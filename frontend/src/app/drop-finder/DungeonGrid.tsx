import type { Instance } from './types';

interface DungeonGridProps {
  value: string;
  onChange: (value: string) => void;
  instances: Instance[];
  allKey: string;
  allLabel: string;
}

export default function DungeonGrid({
  value,
  onChange,
  instances,
  allKey,
  allLabel,
}: DungeonGridProps) {
  return (
    <div className="card p-5">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onChange(allKey)}
          className={`rounded-lg border px-3.5 py-2 text-sm font-medium transition-all duration-150 ${
            value === allKey
              ? 'border-gold/40 bg-gold/[0.08] text-gold'
              : 'border-border bg-surface-2 text-zinc-200 hover:border-zinc-500 hover:text-white'
          }`}
        >
          {allLabel}
        </button>
        {instances.map((inst) => (
          <button
            key={inst.id}
            onClick={() => onChange(String(inst.id))}
            className={`rounded-lg border px-3.5 py-2 text-sm font-medium transition-all duration-150 ${
              value === String(inst.id)
                ? 'border-gold/40 bg-gold/[0.08] text-gold'
                : 'border-border bg-surface-2 text-zinc-200 hover:border-zinc-500 hover:text-white'
            }`}
          >
            {inst.name}
          </button>
        ))}
      </div>
    </div>
  );
}
