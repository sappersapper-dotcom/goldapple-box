import React from 'react'
import { Lock, Unlock } from 'lucide-react'

interface LockToggleProps {
  locked: boolean
  onToggle: () => void
}

/**
 * Toggle button to lock or unlock a parameter in the generator. When locked
 * the current value will be preserved during subsequent randomisations.
 */
export function LockToggle({ locked, onToggle }: LockToggleProps) {
  const Icon = locked ? Lock : Unlock
  return (
    <button onClick={onToggle} className="p-1" title={locked ? 'Разблокировать' : 'Заблокировать'}>
      <Icon size={16} />
    </button>
  )
}
