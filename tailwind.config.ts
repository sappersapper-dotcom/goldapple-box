import type { Config } from 'tailwindcss'

// Custom color palette inspired by the research of the Gold Apple brand.  
// The primary lime tone corresponds to Pantone 389C (RGB 220 255 0 → #DCFF00).  
// Secondary colours (purple and pink) are approximate values chosen to reflect the
// energetic, youthful aesthetic mentioned in public articles【642765226791854†L146-L160】【942344703007850†L92-L99】.
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base brand colours
        primary: '#DCFF00', // lime – Pantone 389C【642765226791854†L146-L160】
        purple: '#A355F6', // vibrant purple (approximate)
        pink: '#F95FA1', // vibrant pink (approximate)
        dark: '#1A1A1A', // deep grey for backgrounds
        light: '#F8F8F8', // light neutral background
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Impact', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 4px 12px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [],
}

export default config
