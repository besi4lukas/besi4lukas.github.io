'use client';

import { useState, useEffect, useRef } from 'react';
import { ChatMessage, ChatState, LeadData } from '@/types';
import { getBotResponse, isHireIntent } from './chatKnowledge';

interface ChatWidgetProps {
  open: boolean;
  onToggle: () => void;
}

const GREETING_TEXT =
  "Hi there! I'm Kingsley's virtual assistant. How can I help you navigate his work? 🚀";

/**
 * Self-contained floating chat widget.
 *
 * – Circular icon fixed at bottom-right (pulse ring on first visit).
 * – Slide-in panel: 380×540px desktop, full-screen mobile.
 * – Rule-based bot with Kingsley knowledge base.
 * – Lead-capture conversation flow → "Details Captured" success card.
 * – To wire real email delivery: call your EmailJS / Resend endpoint inside
 *   `handleSend` at the `lead_confirm` state where the console.log lives.
 */
export function ChatWidget({ open, onToggle }: ChatWidgetProps) {
  // Per-instance counter kept in a ref so it never touches module-level state.
  // This avoids server/client hydration mismatches caused by shared mutable
  // module-level variables being incremented at different times.
  const counterRef = useRef(0);
  const makeId = () => `msg-${++counterRef.current}`;

  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    { id: 'msg-greeting', role: 'bot', text: GREETING_TEXT },
  ]);
  const [chatState, setChatState] = useState<ChatState>('answering');
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [lead, setLead] = useState<Partial<LeadData>>({});
  const [pulseActive, setPulseActive] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Stop the pulse ring after ~3 s
  useEffect(() => {
    const t = setTimeout(() => setPulseActive(false), 3500);
    return () => clearTimeout(t);
  }, []);

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // ── Helpers ──────────────────────────────────────────────────────────────

  function addMessage(msg: Omit<ChatMessage, 'id'>) {
    const id = makeId();
    setMessages((prev) => [...prev, { ...msg, id }]);
  }

  function botReply(text: string, delayMs = 900) {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage({ role: 'bot', text });
    }, delayMs);
  }

  function botSuccess() {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage({ role: 'bot', isSuccess: true });
      addMessage({
        role: 'bot',
        text: "You're all set! Kingsley will be in touch soon. You can also reach him directly at hello@kingsleybesidonne.com 📬",
      });
      setChatState('answering');
    }, 1000);
  }

  // ── Send handler ─────────────────────────────────────────────────────────

  function handleSend() {
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;
    setInput('');

    addMessage({ role: 'user', text: trimmed });

    // ── Lead-capture state machine ──────────────────────────────────────
    if (chatState === 'lead_name') {
      setLead((prev) => ({ ...prev, name: trimmed }));
      setChatState('lead_email');
      botReply(`Thanks ${trimmed}! What's the best email for Kingsley to reach you?`);
      return;
    }

    if (chatState === 'lead_email') {
      setLead((prev) => ({ ...prev, email: trimmed }));
      setChatState('lead_message');
      botReply("Perfect! Could you briefly describe what you're looking for or the opportunity?");
      return;
    }

    if (chatState === 'lead_message') {
      const fullLead = { ...lead, message: trimmed } as LeadData;
      setLead(fullLead);
      setChatState('lead_confirm');
      botReply(
        `Got it! Here's what I'll send to Kingsley:\n\n👤 **Name:** ${fullLead.name}\n📧 **Email:** ${fullLead.email}\n💬 **Message:** ${trimmed}\n\nShall I forward this to him? (yes / no)`,
        1200
      );
      return;
    }

    if (chatState === 'lead_confirm') {
      const yes = /^(yes|yeah|yep|sure|ok|okay|go ahead|send it|do it)/i.test(trimmed);
      const no  = /^(no|nope|cancel|stop|don't|dont)/i.test(trimmed);

      if (yes) {
        // ── In production: call EmailJS / Resend here ──────────────────
        console.info('[ChatWidget] Lead captured:', lead);
        // Example EmailJS call:
        // emailjs.send('SERVICE_ID', 'TEMPLATE_ID', lead, 'PUBLIC_KEY');
        setChatState('sent');
        botSuccess();
      } else if (no) {
        setChatState('answering');
        botReply("No problem! Feel free to ask anything else about Kingsley's work.");
      } else {
        botReply('Just reply **yes** to send or **no** to cancel.');
      }
      return;
    }

    // ── General answering state ─────────────────────────────────────────
    if (isHireIntent(trimmed)) {
      setChatState('lead_name');
      botReply(
        "That sounds exciting! Kingsley specialises in React, Spring Boot, and full-stack product engineering. To connect you with him — what's your name?"
      );
      return;
    }

    const response = getBotResponse(trimmed);
    botReply(response);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleSend();
  }

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <>
      {/* ── Chat Panel ──────────────────────────────────────────────────── */}
      {open && (
        <div className="chat-panel-enter fixed bottom-[92px] right-6 z-50 flex w-[92vw] max-w-[380px] flex-col overflow-hidden rounded-2xl bg-surface shadow-2xl shadow-black/50 ring-1 ring-white/10"
          style={{ height: 'min(540px, 80vh)' }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-white/8 bg-grid-bg px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white font-bold text-sm flex-none">
              K
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white">Kingsley AI</p>
              <p className="flex items-center gap-1.5 text-xs text-success">
                <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                Online
              </p>
            </div>
            <button
              onClick={onToggle}
              aria-label="Close chat"
              className="text-muted hover:text-white transition-colors p-1"
            >
              <i className="fa-solid fa-xmark text-base" />
            </button>
          </div>

          {/* Message thread */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {/* Date stamp */}
            <p className="text-center text-[10px] uppercase tracking-widest text-muted/50">Today</p>

            {messages.map((msg) => {
              if (msg.isSuccess) {
                return (
                  <div key={msg.id} className="flex flex-col items-start gap-1">
                    <div className="rounded-xl bg-card border border-success/20 px-4 py-3 w-full text-center">
                      <i className="fa-solid fa-circle-check text-success text-xl mb-1" />
                      <p className="text-sm font-semibold text-success">Details Captured</p>
                      <p className="text-xs text-muted mt-0.5">Kingsley will be in touch shortly.</p>
                    </div>
                  </div>
                );
              }

              const isBot = msg.role === 'bot';
              return (
                <div
                  key={msg.id}
                  className={`flex items-end gap-2 ${isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {isBot && (
                    <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
                      K
                    </div>
                  )}
                  <div
                    className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                      isBot
                        ? 'bg-card text-text rounded-bl-sm'
                        : 'bg-accent text-white rounded-br-sm'
                    }`}
                    dangerouslySetInnerHTML={{
                      __html: (msg.text ?? '').replace(
                        /\*\*(.+?)\*\*/g,
                        '<strong>$1</strong>'
                      ),
                    }}
                  />
                </div>
              );
            })}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex items-end gap-2">
                <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
                  K
                </div>
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-card px-4 py-3">
                  <span className="typing-dot h-1.5 w-1.5 rounded-full bg-muted/60" />
                  <span className="typing-dot h-1.5 w-1.5 rounded-full bg-muted/60" />
                  <span className="typing-dot h-1.5 w-1.5 rounded-full bg-muted/60" />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input bar */}
          <div className="flex items-center gap-2 border-t border-white/8 bg-grid-bg px-3 py-2.5">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="flex-1 rounded-full bg-surface/60 px-4 py-2 text-sm text-text placeholder:text-muted/50 outline-none focus:ring-1 focus:ring-accent/50"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              aria-label="Send message"
              className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-accent text-white disabled:opacity-40 hover:bg-accent/90 active:scale-95 transition-all"
            >
              <i className="fa-solid fa-paper-plane text-xs" />
            </button>
          </div>

          {/* Branding */}
          <p className="bg-grid-bg py-1.5 text-center text-[10px] text-muted/40">
            Powered by <strong className="text-accent2">Kingsley AI</strong> v2.4
          </p>
        </div>
      )}

      {/* ── Floating Action Button ───────────────────────────────────────── */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Pulse ring (first 3 s on mount) */}
        {pulseActive && !open && (
          <span className="absolute inset-0 rounded-full bg-accent pulse-ring" />
        )}

        <button
          onClick={onToggle}
          aria-label={open ? 'Close chat' : "Chat with Kingsley's AI Assistant"}
          title={open ? 'Close chat' : "Chat with Kingsley's AI Assistant"}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-xl shadow-accent/30 hover:bg-accent/90 active:scale-95 transition-all duration-200"
        >
          <i
            className={`text-lg transition-transform duration-300 ${
              open ? 'fa-solid fa-xmark' : 'fa-solid fa-comment-dots'
            }`}
          />
        </button>
      </div>
    </>
  );
}

