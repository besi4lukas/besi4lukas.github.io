'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { TennisChart } from '@/components/tennis/TennisChart';
import { PlayerSelector } from '@/components/tennis/PlayerSelector';
import { tennisData, players, years } from '@/data/tennis';
import { TennisMatchData } from '@/types';

export default function TennisPage() {
  const [selectedPlayer, setSelectedPlayer] = useState(players[0]);
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [chartData, setChartData] = useState<TennisMatchData[]>([]);
  const [displayPlayer, setDisplayPlayer] = useState(players[0]);
  const [displayYear, setDisplayYear] = useState(years[0]);

  useEffect(() => {
    // Initialize with default data
    const initialData = tennisData[players[0]]?.[years[0]] || [];
    setChartData(initialData);
  }, []);

  const handleSubmit = () => {
    const data = tennisData[selectedPlayer]?.[selectedYear] || [];
    setChartData(data);
    setDisplayPlayer(selectedPlayer);
    setDisplayYear(selectedYear);
  };

  return (
    <div className="bg-base min-h-screen">
      <nav className="border-b border-white/5 bg-surface/60 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent font-semibold">
              T
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted">Interactive Viz</p>
              <p className="text-lg font-heading font-semibold text-white">Tennis Break Points</p>
            </div>
          </div>
          <Link href="/" className="hidden text-sm text-muted transition hover:text-accent sm:block">
            Back to home
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-6 py-10">
        <PlayerSelector
          players={players}
          years={years}
          selectedPlayer={selectedPlayer}
          selectedYear={selectedYear}
          onPlayerChange={setSelectedPlayer}
          onYearChange={setSelectedYear}
          onSubmit={handleSubmit}
        />

        {chartData.length > 0 && (
          <TennisChart data={chartData} winner={displayPlayer} year={displayYear} />
        )}
      </main>
    </div>
  );
}
