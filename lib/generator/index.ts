import seedrandom from 'seedrandom'
import { presets, paletteToArray } from './palettes'
import { getPatterns } from './patterns'
import { stickers } from './stickers'
import { typographyOptions } from './typography'
import { Design, Palette, Pattern, Sticker, TypographySpec } from './types'

/**
 * Create a deterministic random generator from a string seed. If no seed is
 * provided, a time‑based seed is generated. The returned function behaves like
 * Math.random but yields repeatable sequences given the same seed.
 */
export function createRNG(seed?: string) {
  return seedrandom(seed || String(Date.now()))
}

/**
 * Select a random element from an array using a provided RNG function.
 */
export function randomFrom<T>(arr: T[], rng: seedrandom.prng): T {
  return arr[Math.floor(rng() * arr.length)]
}

/**
 * Generate a new design from scratch based on a chosen preset key. A random
 * slogan is currently generated from a small set; feel free to expand this
 * library with teen slang, K‑pop references and positive messages.
 */
export function generateDesign(presetKey: keyof typeof presets, seed?: string): Design {
  const rng = createRNG(seed)
  const palette: Palette = presets[presetKey]
  const pattern: Pattern = randomFrom(getPatterns(palette), rng)
  const sticker = randomFrom(stickers, rng)
  const typography = randomFrom(typographyOptions, rng)
  const slogans = [
    'Будь собой!',
    'Glow Up ✨',
    'Время сиять',
    'Твой стиль',
    'Тренд сезона',
  ]
  const slogan = randomFrom(slogans, rng)
  return { palette, pattern, sticker, typography, slogan }
}

/**
 * Mutate a design by replacing unlocked parts. The lockMap indicates which
 * properties (palette, pattern, sticker, typography, slogan) should remain
 * unchanged. The RNG ensures mutations are deterministic given the same
 * sequence.
 */
export function mutateDesign(
  design: Design,
  presetKey: keyof typeof presets,
  lockMap: Partial<Record<keyof Design, boolean>>,
  seed?: string,
): Design {
  const rng = createRNG(seed)
  const basePalette = presets[presetKey]
  return {
    palette: lockMap.palette ? design.palette : basePalette,
    pattern: lockMap.pattern ? design.pattern : randomFrom(getPatterns(basePalette), rng),
    sticker: lockMap.sticker ? design.sticker : randomFrom(stickers, rng),
    typography: lockMap.typography ? design.typography : randomFrom(typographyOptions, rng),
    slogan: lockMap.slogan ? design.slogan : randomFrom(['Будь собой!', 'Glow Up ✨', 'Время сиять', 'Твой стиль', 'Тренд сезона'], rng),
  }
}

/**
 * Validate colour contrast between text and background using the WCAG AA
 * guidelines. For simplicity this function calculates the relative
 * luminance of two hex colours and compares the contrast ratio. A ratio of
 * 4.5:1 is recommended for normal text.
 */
export function validateContrast(bg: string, fg: string): boolean {
  function hexToRgb(hex: string) {
    const match = hex.replace('#', '')
    const bigint = parseInt(match, 16)
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255,
    }
  }
  function luminance({ r, g, b }: { r: number; g: number; b: number }) {
    const toLinear = (c: number) => {
      const cs = c / 255
      return cs <= 0.03928 ? cs / 12.92 : Math.pow((cs + 0.055) / 1.055, 2.4)
    }
    const linR = toLinear(r)
    const linG = toLinear(g)
    const linB = toLinear(b)
    return 0.2126 * linR + 0.7152 * linG + 0.0722 * linB
  }
  const lum1 = luminance(hexToRgb(bg))
  const lum2 = luminance(hexToRgb(fg))
  const ratio = (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05)
  return ratio >= 4.5
}
