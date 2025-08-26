import React from 'react'
import { Sticker as StickerType } from '@/lib/generator/types'

interface StickerProps {
  sticker: StickerType
  color?: string
  size?: number
}

/**
 * Render a sticker icon using lucide-react. Stickers are optional decorative
 * elements that add personality to a design. The colour defaults to the
 * palette's accent tone.
 */
export function Sticker({ sticker, color = '#000', size = 24 }: StickerProps) {
  const Icon = sticker.Icon
  return <Icon size={size} color={color} />
}
