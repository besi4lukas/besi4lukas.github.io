import { ReactNode, ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  external?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  href,
  external = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center gap-2 rounded-lg px-5 py-3 text-base font-semibold transition';

  const variantStyles = {
    primary:
      'bg-accent text-slate-900 shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5 hover:shadow-cyan-500/30',
    secondary:
      'border border-white/10 text-white/90 hover:border-accent hover:text-accent',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
