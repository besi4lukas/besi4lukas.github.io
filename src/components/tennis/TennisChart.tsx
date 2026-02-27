'use client';

import { useRef } from 'react';
import { useTennisChart } from '@/hooks/useTennisChart';
import { TennisMatchData } from '@/types';
import '@/styles/tennis.css';

interface TennisChartProps {
  data: TennisMatchData[];
  winner: string;
  year: string;
}

export function TennisChart({ data, winner, year }: TennisChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useTennisChart(containerRef, data, winner, year);

  return (
    <div className="mt-8 rounded-3xl bg-card/80 p-4 shadow-xl shadow-black/30 ring-1 ring-white/10">
      <div id="viz" ref={containerRef}></div>
    </div>
  );
}
