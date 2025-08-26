import React from 'react'

interface ExportButtonsProps {
  onExportPNG: () => void
  onExportSVG: () => void
}

/**
 * Buttons to trigger export of the current design to PNG or SVG. Real
 * implementation can leverage libraries like `html-to-image` or `html-to-svg`.
 */
export function ExportButtons({ onExportPNG, onExportSVG }: ExportButtonsProps) {
  return (
    <div className="flex space-x-2">
      <button
        onClick={onExportPNG}
        className="px-3 py-1 rounded bg-primary text-dark text-sm hover:opacity-90"
      >
        Скачать PNG
      </button>
      <button
        onClick={onExportSVG}
        className="px-3 py-1 rounded bg-secondary text-dark text-sm hover:opacity-90"
      >
        Скачать SVG
      </button>
    </div>
  )
}
