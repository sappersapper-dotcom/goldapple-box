import { Pattern, Palette } from './types'

// Generate CSS background definitions based on the current palette. Patterns
// should be simple enough to render dynamically using plain CSS so that
// exported PNG/SVG still look crisp. Feel free to extend this list with
// additional patterns (waves, stars, etc.).

export function getPatterns(palette: Palette): Pattern[] {
  const { primary, secondary, accent } = palette
  return [
    {
      name: 'stripes',
      css: `repeating-linear-gradient(45deg, ${secondary} 0 10px, ${primary} 10px 20px)`,
    },
    {
      name: 'dots',
      css: `radial-gradient(${accent} 2px, transparent 3px) 0 0 / 20px 20px`,
    },
    {
      name: 'grid',
      css: `linear-gradient(${secondary} 0 2px, transparent 2px 100%), linear-gradient(90deg, ${secondary} 0 2px, transparent 2px 100%)`,
    },
    {
      name: 'diagonal',
      css: `repeating-linear-gradient(135deg, ${primary} 0 5px, ${accent} 5px 10px, ${secondary} 10px 15px)`
    },
  ]
}
