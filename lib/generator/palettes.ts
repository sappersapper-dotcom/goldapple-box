import { Palette } from './types'

// Colour palettes for different teen-oriented presets. These values
// approximate current fashion trends, combining bold neon hues and soft
// pastels. The primary Gold Apple lime tone (Pantone 389C) is used as a
// recurring accent in several palettes to reference the brand identity【642765226791854†L146-L160】.

export const presets: Record<string, Palette> = {
  edgy: {
    primary: '#111111',
    secondary: '#AEEA00',
    accent: '#FF4081',
  },
  kawaii: {
    primary: '#FFC1E3',
    secondary: '#D3BCE3',
    accent: '#B7E3F4',
  },
  sporty: {
    primary: '#1E90FF',
    secondary: '#FF6A6A',
    accent: '#CDFF00',
  },
  glam: {
    primary: '#FFD700',
    secondary: '#800080',
    accent: '#FF00FF',
  },
  eco: {
    primary: '#7BAE4C',
    secondary: '#E5DCCB',
    accent: '#F76C5E',
  },
  tech: {
    primary: '#0D253F',
    secondary: '#00C1D4',
    accent: '#D62196',
  },
  pastel: {
    primary: '#F5C0C0',
    secondary: '#C9F9C9',
    accent: '#E2D5F8',
  },
  neon: {
    primary: '#39FF14',
    secondary: '#FF007F',
    accent: '#FFFB00',
  },
}

// Convert a palette into a list of hex codes; useful for UI display
export function paletteToArray(palette: Palette): string[] {
  return [palette.primary, palette.secondary, palette.accent]
}
