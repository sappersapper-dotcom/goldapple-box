import React from 'react'
import { Pattern } from '@/lib/generator/types'

interface PatternPreviewProps {
  pattern: Pattern
  size?: number
}

/**
 * Render a small preview of a CSS pattern. The size prop controls the
 * dimensions of the preview square.
 */
export function PatternPreview({ pattern, size = 40 }: PatternPreviewProps) {
  return (
    <div
      className="rounded-md border"
      style={{ width: size, height: size, backgroundImage: pattern.css, backgroundSize: 'auto' }}
      title={pattern.name}
    />
  )
}
