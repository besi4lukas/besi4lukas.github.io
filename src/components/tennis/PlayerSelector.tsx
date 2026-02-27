'use client';

interface PlayerSelectorProps {
  players: string[];
  years: string[];
  selectedPlayer: string;
  selectedYear: string;
  onPlayerChange: (player: string) => void;
  onYearChange: (year: string) => void;
  onSubmit: () => void;
}

export function PlayerSelector({
  players,
  years,
  selectedPlayer,
  selectedYear,
  onPlayerChange,
  onYearChange,
  onSubmit,
}: PlayerSelectorProps) {
  return (
    <div className="rounded-3xl bg-card/80 p-6 shadow-xl shadow-black/30 ring-1 ring-white/10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:items-end">
        <div className="space-y-2">
          <label htmlFor="sel1" className="block text-sm font-semibold text-white">
            Winner
          </label>
          <select
            className="w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-sm text-white outline-none transition focus:border-accent"
            id="sel1"
            value={selectedPlayer}
            onChange={(e) => onPlayerChange(e.target.value)}
          >
            {players.map((player) => (
              <option key={player} value={player}>
                {player}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="sel2" className="block text-sm font-semibold text-white">
            Year
          </label>
          <select
            className="w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-sm text-white outline-none transition focus:border-accent"
            id="sel2"
            value={selectedYear}
            onChange={(e) => onYearChange(e.target.value)}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-end">
          <button
            type="button"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:shadow-cyan-500/30"
            onClick={onSubmit}
          >
            Change
          </button>
        </div>
      </div>
    </div>
  );
}
