'use client';

import { useTypewriter } from '@/hooks/useTypewriter';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  trigger?: unknown;
}

export function TypewriterText({ text, speed = 80, trigger }: TypewriterTextProps) {
  const displayText = useTypewriter(text, speed, trigger);

  return (
    <>
      <span>{displayText}</span>
      <span className="text-accent animate-pulse">|</span>
    </>
  );
}
