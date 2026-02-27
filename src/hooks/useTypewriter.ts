'use client';

import { useState, useEffect, useRef } from 'react';

export function useTypewriter(text: string, speed: number = 80, trigger?: unknown) {
  const [displayText, setDisplayText] = useState('');
  const runIdRef = useRef(0);

  useEffect(() => {
    const currentRunId = ++runIdRef.current;
    setDisplayText('');
    let i = 0;

    const type = () => {
      if (currentRunId !== runIdRef.current) return;

      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
        setTimeout(type, speed);
      }
    };

    const timer = setTimeout(type, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [text, speed, trigger]);

  return displayText;
}
