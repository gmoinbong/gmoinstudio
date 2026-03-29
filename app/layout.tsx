import React from "react"
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'

import './globals.css'

import { Metrics } from '@/app/metrics'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'gmoinstudio | Crafting Digital Experiences That Matter',
  description:
    'gmoinstudio — independent studio building games and apps with thoughtful design and modern technology. Digital products that solve real problems and deliver genuine entertainment.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <Metrics />
        {children}
      </body>
    </html>
  )
}
