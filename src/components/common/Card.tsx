import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-2xl bg-card/80 p-6 shadow-xl shadow-black/30 ring-1 ring-white/10 ${className}`}
    >
      {children}
    </div>
  );
}
