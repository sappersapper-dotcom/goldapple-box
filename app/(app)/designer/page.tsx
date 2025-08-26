"use client"

import { useEffect, useState } from 'react'
import { presets } from '@/lib/generator/palettes'
import { generateDesign, mutateDesign, createRNG } from '@/lib/generator'
import { Design } from '@/lib/generator/types'
import { ColorChip } from '@/components/ui/ColorChip'
import { PatternPreview } from '@/components/ui/PatternPreview'
import { Sticker } from '@/components/ui/Sticker'
import { SeedInput } from '@/components/ui/SeedInput'
import { LockToggle } from '@/components/ui/LockToggle'
import { ExportButtons } from '@/components/ui/ExportButtons'

export default function DesignerPage() {
  type LockMap = Partial<Record<keyof Design, boolean>>
  const [preset, setPreset] = useState<keyof typeof presets>('edgy')
  const [seed, setSeed] = useState('')
  const [design, setDesign] = useState<Design>(() => generateDesign('edgy'))
  const [lockMap, setLockMap] = useState<LockMap>({})

  // regenerate design whenever preset or seed changes (except when locked)
  useEffect(() => {
    setDesign(generateDesign(preset, seed))
  }, [preset])

  const toggleLock = (key: keyof Design) => {
    setLockMap((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const regenerate = () => {
    setDesign((prev) => mutateDesign(prev, preset, lockMap, seed))
  }

  const randomSeed = () => {
    const rng = createRNG()
    // generate a short random alphanumeric seed
    const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let s = ''
    for (let i = 0; i < 8; i++) s += alphabet[Math.floor(rng() * alphabet.length)]
    setSeed(s)
    // generate design with new seed
    setDesign(generateDesign(preset, s))
  }

  const exportPNG = () => {
    alert('Экспорт PNG пока не реализован. Замените этот вызов библиотекой html-to-image.')
  }
  const exportSVG = () => {
    alert('Экспорт SVG пока не реализован. Замените этот вызов библиотекой html-to-image.')
  }

  const copyLink = () => {
    const url = `${window.location.origin}/designer?preset=${preset}&seed=${seed}`
    navigator.clipboard.writeText(url)
    alert('Ссылка скопирована!')
  }

  return (
    <main className="container mx-auto max-w-4xl px-4 py-6 space-y-8">
      <h1 className="text-3xl font-bold">Дизайнер коробок</h1>
      {/* Preset selector */}
      <div className="flex flex-wrap items-center space-x-4">
        <label htmlFor="preset" className="font-semibold">Пресет:</label>
        <select
          id="preset"
          value={preset}
          onChange={(e) => setPreset(e.target.value as keyof typeof presets)}
          className="border rounded px-2 py-1"
        >
          {Object.keys(presets).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
        <SeedInput seed={seed} onChange={setSeed} onRandom={randomSeed} />
        <button
          onClick={copyLink}
          className="ml-auto px-3 py-1 rounded bg-secondary text-dark text-sm hover:opacity-90"
        >
          Скопировать ссылку
        </button>
      </div>
      {/* Design preview */}
      <div
        className="relative rounded-2xl shadow-soft p-8 flex flex-col items-center justify-center"
        style={{ backgroundColor: design.palette.primary, backgroundImage: design.pattern.css }}
      >
        <Sticker sticker={design.sticker} color={design.palette.accent} size={48} />
        <h2
          className="mt-4 text-4xl font-extrabold text-center"
          style={{ fontFamily: design.typography.fontFamily, letterSpacing: design.typography.letterSpacing, textTransform: design.typography.transform }}
        >
          {design.slogan}
        </h2>
      </div>
      {/* Controls */}
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <span className="w-32 font-medium">Палитра</span>
          <div className="flex space-x-3">
            <ColorChip color={design.palette.primary} />
            <ColorChip color={design.palette.secondary} />
            <ColorChip color={design.palette.accent} />
          </div>
          <LockToggle locked={!!lockMap.palette} onToggle={() => toggleLock('palette')} />
        </div>
        <div className="flex items-center space-x-4">
          <span className="w-32 font-medium">Паттерн</span>
          <PatternPreview pattern={design.pattern} size={32} />
          <LockToggle locked={!!lockMap.pattern} onToggle={() => toggleLock('pattern')} />
        </div>
        <div className="flex items-center space-x-4">
          <span className="w-32 font-medium">Стикер</span>
          <Sticker sticker={design.sticker} color={design.palette.accent} size={24} />
          <LockToggle locked={!!lockMap.sticker} onToggle={() => toggleLock('sticker')} />
        </div>
        <div className="flex items-center space-x-4">
          <span className="w-32 font-medium">Типография</span>
          <span
            className="text-xl"
            style={{ fontFamily: design.typography.fontFamily, letterSpacing: design.typography.letterSpacing, textTransform: design.typography.transform }}
          >
            Aa
          </span>
          <LockToggle locked={!!lockMap.typography} onToggle={() => toggleLock('typography')} />
        </div>
        <div className="flex items-center space-x-4">
          <span className="w-32 font-medium">Слоган</span>
          <span className="flex-1">{design.slogan}</span>
          <LockToggle locked={!!lockMap.slogan} onToggle={() => toggleLock('slogan')} />
        </div>
      </div>
      {/* Action buttons */}
      <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={regenerate}
            className="px-4 py-2 rounded bg-primary text-dark font-semibold hover:opacity-90"
          >
            Перегенерировать
          </button>
          <ExportButtons onExportPNG={exportPNG} onExportSVG={exportSVG} />
      </div>
    </main>
  )
}
