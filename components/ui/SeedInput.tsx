import React from 'react'

interface SeedInputProps {
  seed: string
  onChange: (value: string) => void
  onRandom: () => void
}

/**
 * Input for specifying a seed for deterministic generation. Includes a small
 * randomise button which generates a new seed when clicked.
 */
export function SeedInput({ seed, onChange, onRandom }: SeedInputProps) {
  return (
    <div className="flex items-center space-x-2">
      <input
        className="border rounded px-2 py-1 text-sm flex-1"
        value={seed}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Введите seed"
      />
      <button
        onClick={onRandom}
        className="px-2 py-1 text-xs rounded bg-primary text-dark hover:opacity-90"
        title="Случайный seed"
      >
        🎲
      </button>
    </div>
  )
}
