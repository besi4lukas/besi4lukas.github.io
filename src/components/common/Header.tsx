'use client';

import { ReactNode } from 'react';
import { TypewriterText } from './TypewriterText';

interface HeaderProps {
  badge: string;
  title: string;
  quote: string;
  typewriterTrigger?: unknown;
  children?: ReactNode;
}

export function Header({ badge, title, quote, typewriterTrigger, children }: HeaderProps) {
  return (
    <header className="relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.18),transparent_35%)]"></div>

      {/* Header content */}
      <div className="relative mx-auto max-w-5xl px-6 py-16 text-center">
        {/* Role badge */}
        <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-muted ring-1 ring-white/10 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
          {badge}
        </p>

        {/* Name with typewriter animation */}
        <h1 className="mt-6 text-4xl font-heading font-semibold tracking-tight text-white sm:text-5xl">
          <TypewriterText text={title} trigger={typewriterTrigger} />
        </h1>

        {/* Quote */}
        <p className="mt-4 text-lg text-muted max-w-3xl mx-auto">{quote}</p>

        {/* Call-to-action buttons */}
        {children && <div className="mt-8 flex justify-center gap-3">{children}</div>}
      </div>
    </header>
  );
}
