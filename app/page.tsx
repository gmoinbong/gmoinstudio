'use client'

import React from "react"
import Link from 'next/link'

import { motion } from 'framer-motion'
import { ArrowDown, Mail, Gamepad2 } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'

// Animated particles component (uses client-only dimensions to avoid SSR "window is not defined")
function Particles() {
  const [size, setSize] = useState({ w: 1024, h: 768 })
  useEffect(() => {
    const update = () => setSize({ w: window.innerWidth, h: window.innerHeight })
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  const particles = Array.from({ length: 50 })

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          initial={{
            x: Math.random() * size.w,
            y: Math.random() * size.h,
          }}
          animate={{
            y: [null, Math.random() * size.h],
            x: [null, Math.random() * size.w],
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

export default function Page() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Form submitted:', formData)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden supports-[min-height:100dvh]:min-h-[100dvh]">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-blue-900/20 to-background" />
        <Particles />

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute left-4 top-4 z-20 flex items-center gap-2 pl-[env(safe-area-inset-left)] pt-[env(safe-area-inset-top)] sm:left-8 sm:top-8"
        >
          <Gamepad2 className="h-7 w-7 text-primary sm:h-8 sm:w-8" />
          <span className="text-lg font-bold font-[family-name:var(--font-poppins)] sm:text-xl">{'gmoinstudio'}</span>
        </motion.div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 pt-20 text-center sm:px-6 sm:pt-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-balance font-[family-name:var(--font-poppins)] text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-6"
          >
            Crafting Digital Experiences That Matter
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 mb-8 text-balance"
          >
            Independent studio building games and apps with thoughtful design and modern technology
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/50 hover:shadow-primary/70 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:bottom-8"
        >
          <ArrowDown className="h-6 w-6 animate-bounce text-gray-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center font-[family-name:var(--font-poppins)] text-3xl font-bold text-white sm:mb-12 sm:text-4xl"
          >
            Who We Are
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-gray-300 leading-relaxed text-center"
          >
            <p>
              {
                "We're an independent studio passionate about creating digital products people actually want to use. From strategy games to utility apps, our focus is always the same — thoughtful design, clean architecture, and experiences that respect the user."
              }
            </p>
            <p>
              Currently in active development across multiple projects, we build things that solve real problems or create genuine entertainment. Our commitment to quality means we take time to get the details right, whether{" "}
              {"that's"} balancing a game mechanic or refining a daily workflow.
            </p>
            <p>
              We believe software should be purposeful. Every interaction, every screen, every decision in our products is designed to feel natural and earned.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Games in Development */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center sm:mb-16"
          >
            <h2 className="mb-4 font-[family-name:var(--font-poppins)] text-3xl font-bold text-white sm:text-4xl">Our Projects</h2>
            <p className="text-lg text-gray-400">Games, apps, and experiments</p>
          </motion.div>

          <div className="grid grid-cols-1 items-stretch gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 - RepReady */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative h-full min-h-[280px] rounded-2xl overflow-hidden backdrop-blur-xl bg-card/60 border border-primary/20 group hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-teal-500/30 to-emerald-500/30" style={{ filter: 'blur(30px)' }} />
              <div className="relative flex h-full flex-col justify-between gap-4 p-5 backdrop-blur-sm sm:p-6">
                <Badge className="self-end bg-primary/20 text-primary border-primary/30">In Development</Badge>
                <div className="space-y-3 text-left">
                  <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">RepReady</Badge>
                  <p className="text-base font-semibold text-white font-[family-name:var(--font-poppins)]">
                    {'"Am I ready to train today?"'}
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Daily gym recovery tracker. No wearable, no account, no internet.                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Tower Defense */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative h-full min-h-[280px] rounded-2xl overflow-hidden backdrop-blur-xl bg-card/60 border border-primary/20 group hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-orange-500/30 to-pink-500/30" style={{ filter: 'blur(30px)' }} />
              <div className="relative flex h-full flex-col justify-between gap-4 p-5 backdrop-blur-sm sm:p-6">
                <Badge className="self-end bg-violet-500/20 text-violet-200 border-violet-500/30">Coming Soon</Badge>
                <div>
                  <Badge className="mb-3 bg-purple-500/20 text-purple-300 border-purple-500/30">Tower Defense</Badge>
                  <p className="text-sm text-gray-300">Strategic placement · Wave-based · Deep progression</p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Incremental */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="relative h-full min-h-[280px] rounded-2xl overflow-hidden backdrop-blur-xl bg-card/60 border border-primary/20 group hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 via-blue-500/30 to-teal-500/30" style={{ filter: 'blur(30px)' }} />
              <div className="relative flex h-full flex-col justify-between gap-4 p-5 backdrop-blur-sm sm:p-6">
                <Badge className="self-end bg-primary/20 text-primary border-primary/30">In Development</Badge>
                <div>
                  <Badge className="mb-3 bg-green-500/20 text-green-300 border-green-500/30">Incremental</Badge>
                  <p className="text-sm text-gray-300">Idle progression · Strategy upgrades · Long-term growth</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center font-[family-name:var(--font-poppins)] text-3xl font-bold text-white sm:mb-16 sm:text-4xl"
          >
            What We Do Best
          </motion.h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {/* Column 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center space-y-4 p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-colors duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center text-3xl">
                🎯
              </div>
              <h3 className="text-xl font-bold text-white font-[family-name:var(--font-poppins)]">Product Design</h3>
              <p className="text-gray-400 leading-relaxed">
                Crafting experiences with depth and purpose. Balancing complexity with simplicity, whether it{"'s"} a game mechanic or an app flow.
              </p>
            </motion.div>

            {/* Column 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center space-y-4 p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-colors duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center text-3xl">
                💻
              </div>
              <h3 className="text-xl font-bold text-white font-[family-name:var(--font-poppins)]">Development</h3>
              <p className="text-gray-400 leading-relaxed">
                React Native, TypeScript, Expo — modern cross-platform stack for both games and apps. Clean architecture that scales.
              </p>
            </motion.div>

            {/* Column 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center space-y-4 p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-colors duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center text-3xl">
                📊
              </div>
              <h3 className="text-xl font-bold text-white font-[family-name:var(--font-poppins)]">Systems Thinking</h3>
              <p className="text-gray-400 leading-relaxed">
                Designing progression systems, feedback loops, and user journeys that keep people engaged for the right reasons.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #6366F1 2px, #6366F1 3px), repeating-linear-gradient(90deg, transparent, transparent 2px, #6366F1 2px, #6366F1 3px)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center font-[family-name:var(--font-poppins)] text-3xl font-bold text-white sm:mb-12 sm:text-4xl"
          >
            Built With Modern Technology
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {['React Native', 'TypeScript', 'Expo', 'Modern Architecture'].map((tech, i) => (
              <Badge key={i} variant="outline" className="px-4 py-2 text-base border-primary/30 text-gray-300 hover:border-primary hover:text-primary transition-colors duration-300">
                {tech}
              </Badge>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center font-[family-name:var(--font-poppins)] text-3xl font-bold text-white sm:mb-16 sm:text-4xl"
          >
            Our Approach
          </motion.h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-poppins)]">User-First Development</h3>
              <p className="text-gray-300 leading-relaxed">
                We prioritize meaningful experiences over engagement tricks. Regular testing and iteration based on real feedback. No dark patterns, no bloat.
              </p>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-poppins)]">Quality Over Speed</h3>
              <p className="text-gray-300 leading-relaxed">
                Taking time to get things right. Comprehensive testing across devices. Nothing ships until it earns its place.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center sm:mb-12"
          >
            <h2 className="mb-4 font-[family-name:var(--font-poppins)] text-3xl font-bold text-white sm:text-4xl">{"Let's Connect"}</h2>
            <p className="text-lg text-gray-400">
              Interested in our projects? Want to collaborate? Get in touch.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 max-w-full text-center sm:mb-12"
          >
            <a
              href="mailto:hello@gmoinstudio.com"
              className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 break-words text-base text-primary transition-colors duration-300 hover:text-primary/80 sm:text-2xl"
            >
              <Mail className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
              <span className="min-w-0 break-words text-center">hello@gmoinstudio.com</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10 flex flex-wrap justify-center gap-4 sm:mb-12 sm:gap-6"
          >
            <Link
              href="https://discord.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 min-h-[44px] w-11 min-w-[44px] items-center justify-center rounded-lg border border-primary/20 bg-card transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/30 sm:h-12 sm:w-12"
            >
              <svg className="w-5 h-5 text-gray-300 hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </Link>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <Input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-card border-primary/20 text-white placeholder:text-gray-500 focus:border-primary"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-card border-primary/20 text-white placeholder:text-gray-500 focus:border-primary"
              />
            </div>
            <div>
              <Textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-card border-primary/20 text-white placeholder:text-gray-500 focus:border-primary min-h-[150px]"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
            >
              Send Message
            </Button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/10 px-4 py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-center gap-y-4 text-center md:flex-row md:flex-wrap md:gap-x-6 md:gap-y-2">
            <div className="flex items-center gap-2">
              <Gamepad2 className="h-5 w-5 text-primary" />
              <span className="font-bold font-[family-name:var(--font-poppins)]">gmoinstudio</span>
            </div>
            <span className="hidden text-gray-500 sm:inline">•</span>
            <span className="text-gray-500">© {new Date().getFullYear()} All rights reserved</span>
            <span className="hidden text-gray-500 md:inline">•</span>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-gray-400">
              <Link href="/privacy" className="text-primary transition-all duration-300 hover:underline">
                Privacy Policy
              </Link>
              <span className="hidden text-gray-500 sm:inline">•</span>
              <Link href="/terms" className="text-primary transition-all duration-300 hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            {'Made with ✦ and ☕'}
          </p>
        </div>
      </footer>
    </div>
  )
}
