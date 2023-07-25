import './globals.css'
import type { Metadata } from 'next'
import { Arapey } from 'next/font/google'

const arapey = Arapey({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
  title: 'Phat Ngo',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={arapey.className}>{children}</body>
    </html>
  )
}
