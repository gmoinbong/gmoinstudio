import type { Metadata } from 'next'
import Link from 'next/link'
import { Gamepad2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: '404 | gmoinstudio',
}

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-blue-900/20 to-background" />

        <Link
          href="/"
          className="absolute top-8 left-8 z-10 flex items-center gap-2 transition-opacity hover:opacity-90"
        >
          <Gamepad2 className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold font-[family-name:var(--font-poppins)]">
            gmoinstudio
          </span>
        </Link>

        <div className="relative z-10 text-center max-w-lg mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 font-[family-name:var(--font-poppins)]">
            404
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 text-balance">
            This page could not be found.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/50 hover:shadow-primary/70 transition-all duration-300"
          >
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
