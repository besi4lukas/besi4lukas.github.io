'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

/**
 * Full-screen hero section.
 *
 * – Cinematic dark gradient background (place a video at /public/hero.mp4
 *   and swap the gradient div for a <video> element to unlock full PRD intent).
 * – Ambient glow blobs for depth.
 * – Staggered fade-up entrance for badge → heading → copy → buttons.
 * – "Scroll to explore" prompt that fades out once the user starts scrolling.
 */
export function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  // Fade out the scroll prompt on first scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) setScrolled(true);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-hero-bg">
      {/* ── Background ──────────────────────────────────────────────────── */}

      {/* Ambient glow orbs */}
      <div className="absolute top-1/3 left-1/4 h-[480px] w-[480px] rounded-full bg-accent/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-[320px] w-[320px] rounded-full bg-accent2/8 blur-[100px] pointer-events-none" />

      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-black/40" />

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">

        {/* Main heading */}
        <h1 className="animate-fade-up-2 mt-8 text-6xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-7xl md:text-8xl">
          Architecting
          <br />
          <span className="text-accent2">Digital</span>{' '}
          <span className="text-white">Experiences</span>
        </h1>

        {/* Sub-copy */}
        <p className="animate-fade-up-3 mt-6 max-w-xl text-base text-white font-bold sm:text-lg">
          Kingsley / Full-Stack Developer &amp; AI Specialist crafting intelligent,
          scalable, and immersive web solutions.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-4 mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#work"
            className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent/90 active:scale-95 transition-all duration-200"
          >
            View Selected Work
          </a>
          <Link
            href="/about"
            className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white hover:border-white/50 hover:bg-white/5 active:scale-95 transition-all duration-200"
          >
            About Me
          </Link>
        </div>
      </div>

      {/* ── Scroll Prompt ────────────────────────────────────────────────── */}
      <div
        className={`absolute bottom-10 left-0 right-0 z-10 flex flex-col items-center gap-2 transition-opacity duration-500 ${
          scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        style={{ animationDelay: '0.9s' }}
      >
        <span className="animate-fade-up text-xs font-bold uppercase tracking-[0.2em] text-white">
          Scroll to Explore
        </span>
        <i className="fa-solid fa-chevron-down animate-bounce-down text-sm text-muted/50" />
      </div>
    </section>
  );
}

