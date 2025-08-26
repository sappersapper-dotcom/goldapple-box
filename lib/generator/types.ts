// Interfaces describing the structure of a generated design. These
// abstractions allow the generator to assemble combinations of colours,
// backgrounds, patterns and other decorative elements. They also help
// TypeScript provide strong typing throughout the UI layer.

export interface Palette {
  /** Primary accent colour, typically used for backgrounds or key shapes */
  primary: string
  /** Secondary accent colour used for typography or decorative elements */
  secondary: string
  /** Additional accent colour for small details */
  accent: string
}

export interface Pattern {
  /** Unique name of the pattern */
  name: string
  /** CSS-friendly background definition (linear-gradient, url etc.) */
  css: string
}

export interface Sticker {
  name: string
  /** A React component returned by lucide-react or your own illustration */
  Icon: any
}

export interface TypographySpec {
  /** Font family to use for headings */
  fontFamily: string
  /** Base font weight */
  fontWeight: number | string
  /** Letter spacing */
  letterSpacing: string
  /** Case transformation (e.g. uppercase) */
  transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none'
}

export interface Design {
  palette: Palette
  pattern: Pattern
  sticker: Sticker
  typography: TypographySpec
  slogan: string
}
