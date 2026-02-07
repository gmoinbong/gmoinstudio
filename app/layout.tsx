import React from "react"
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700'],
  variable: '--font-poppins' 
})

export const metadata: Metadata = {
  title: 'gmoinstudio | Crafting Engaging Gaming Experiences',
  description: 'gmoinstudio — independent game studio focused on strategy and innovative mechanics. Building deep, engaging gameplay experiences.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
