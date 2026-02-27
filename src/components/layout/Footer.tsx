'use client';

import { useState, useEffect } from 'react';

/**
 * Minimal site footer.
 * Shows copyright text and social / contact icon links.
 *
 * `year` is resolved client-side via useEffect to avoid a server/client
 * hydration mismatch caused by `new Date()` being evaluated at different
 * moments on the server vs the browser.
 */
export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  // Runs only in the browser – keeps server HTML neutral (no year rendered)
  // until hydration completes, then fills in the real value.
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/besi4lukas',
      icon: 'fa-brands fa-github',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kingsleybesidonne',
      icon: 'fa-brands fa-linkedin',
    },
    {
      label: 'Email',
      href: 'mailto:kingsley.besidonne@gmail.com',
      icon: 'fa-regular fa-envelope',
    },
  ];

  return (
    <footer className="bg-hero-bg border-t border-white/5 py-8 px-6">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm text-muted">
          &copy; {year ?? ''} Kingsley.{' '}
          <span className="text-accent2">Crafted with intelligence.</span>
        </p>

        {/* Social links */}
        <div className="flex items-center gap-5">
          {socials.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted hover:text-white transition-colors duration-200 text-lg"
            >
              <i className={icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

