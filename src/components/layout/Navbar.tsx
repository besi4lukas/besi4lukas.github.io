'use client';

import Link from 'next/link';

interface NavbarProps {
  /** Called when the user clicks "Let's Talk" */
  onChatOpen: () => void;
}

/**
 * Fixed top navigation bar.
 * – Logo (K monogram + name) on the left
 * – "Work" anchor link in the centre
 * – "Let's Talk" button on the right (opens the chat panel)
 */
export function Navbar({ onChatOpen }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-hero-bg/80 backdrop-blur-md border-b border-white/5">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 group">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white text-sm font-bold">
          K
        </span>
        <span className="text-white font-semibold tracking-tight group-hover:text-accent transition-colors duration-200">
          Kingsley
        </span>
      </Link>

      {/* Centre nav links */}
      <div className="hidden sm:flex items-center gap-8">
        <a
          href="#work"
          className="text-sm font-medium text-muted hover:text-white transition-colors duration-200"
        >
          Work
        </a>
        <Link
          href="/about"
          className="text-sm font-medium text-muted hover:text-white transition-colors duration-200"
        >
          About
        </Link>
      </div>

      {/* CTA */}
      <button
        onClick={onChatOpen}
        className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white hover:bg-accent/90 active:scale-95 transition-all duration-200 shadow-lg shadow-accent/20"
      >
        Let&apos;s Talk
      </button>
    </nav>
  );
}

