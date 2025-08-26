import React from 'react'

interface ColorChipProps {
  color: string
  label?: string
}

/**
 * Display a coloured chip with an optional label. Used in the style guide to
 * showcase the brand palette.
 */
export function ColorChip({ color, label }: ColorChipProps) {
  return (
    <div className="flex items-center space-x-2">
      <div
        className="w-6 h-6 rounded-full border"
        style={{ backgroundColor: color }}
      />
      {label && <span className="text-sm">{label}</span>}
    </div>
  )
}
