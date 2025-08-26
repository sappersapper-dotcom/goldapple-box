import '@/app/globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'GoldApple Box Generator',
  description: 'Случайная генерация дизайнов Gold Apple Box для подростков',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
