import Link from 'next/link'
import { generateDesign } from '@/lib/generator'
import { useState, useEffect } from 'react'
import { PatternPreview } from '@/components/ui/PatternPreview'
import { Sticker } from '@/components/ui/Sticker'

export default function LandingPage() {
  const [samples, setSamples] = useState([
    generateDesign('edgy'),
    generateDesign('kawaii'),
    generateDesign('sporty'),
    generateDesign('glam'),
  ])
  // regenerate previews on mount to avoid hydration mismatch
  useEffect(() => {
    setSamples([
      generateDesign('edgy'),
      generateDesign('kawaii'),
      generateDesign('sporty'),
      generateDesign('glam'),
    ])
  }, [])
  return (
    <main className="container mx-auto px-4 py-8 max-w-5xl">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">Gold Apple Box Generator</h1>
        <p className="text-lg max-w-xl mx-auto">
          Создавайте уникальные дизайны подарочных коробок в стиле <em>Золотого яблока</em>,
          вдохновляйтесь трендами и делитесь результатами.
        </p>
        <Link
          href="/designer"
          className="inline-block px-6 py-3 rounded bg-primary text-dark font-semibold hover:opacity-90"
        >
          Начать генерацию
        </Link>
      </section>
      <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {samples.map((sample, idx) => (
          <div
            key={idx}
            className="rounded-xl p-4 shadow-soft bg-white flex flex-col items-center space-y-2"
            style={{ backgroundImage: sample.pattern.css, backgroundColor: sample.palette.primary }}
          >
            <Sticker sticker={sample.sticker} color={sample.palette.accent} size={32} />
            <h3
              className="text-xl font-bold"
              style={{ fontFamily: sample.typography.fontFamily, letterSpacing: sample.typography.letterSpacing }}
            >
              {sample.slogan}
            </h3>
          </div>
        ))}
      </section>
    </main>
  )
}
