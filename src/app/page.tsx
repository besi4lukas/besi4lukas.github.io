'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { AppGrid } from '@/components/home/AppGrid';
import { ChatWidget } from '@/components/chat/ChatWidget';

/**
 * Home page – single-page layout per PRD:
 *   1. Fixed Navbar
 *   2. Full-screen Hero (video/gradient)
 *   3. App Grid (projects + filter bar)
 *   4. Footer
 *   5. Floating ChatWidget (always visible)
 *
 * Chat open/closed state is lifted here so the Navbar "Let's Talk" button
 * and the ChatWidget floating button both control the same panel.
 */
export default function HomePage() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      {/* Fixed navigation */}
      <Navbar onChatOpen={() => setChatOpen(true)} />

      {/* Full-screen hero */}
      <HeroSection />

      {/* App grid – anchored with id="work" for the navbar link */}
      <AppGrid />

      {/* Footer */}
      <Footer />

      {/* Chat widget – floats above everything */}
      <ChatWidget open={chatOpen} onToggle={() => setChatOpen((v) => !v)} />
    </>
  );
}
