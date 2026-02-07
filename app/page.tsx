'use client'

import React from "react"
import Link from 'next/link'

import { motion } from 'framer-motion'
import { ArrowDown, Mail, Twitter, Gamepad2 } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'

// Animated particles component (uses client-only dimensions to avoid SSR "window is not defined")
function Particles() {
  const [size, setSize] = useState({ w: 1024, h: 768 })
  useEffect(() => {
    setSize({ w: window.innerWidth, h: window.innerHeight })
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
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-blue-900/20 to-background" />
        <Particles />
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-8 left-8 flex items-center gap-2"
        >
          <Gamepad2 className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold font-[family-name:var(--font-poppins)]">{'gmoinstudio'}</span>
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-poppins)] text-balance"
          >
            Crafting Engaging Gaming Experiences
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 mb-8 text-balance"
          >
            Independent game studio focused on strategy and innovative mechanics
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
          className="absolute bottom-8"
        >
          <ArrowDown className="w-6 h-6 text-gray-400 animate-bounce" />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-12 text-center font-[family-name:var(--font-poppins)]"
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
              {"We're an independent game development studio passionate about creating deep, engaging gameplay experiences. Specializing in strategy games with innovative mechanics, our focus is on player experience and replayability."}
            </p>
            <p>
              Currently in active development, {"we're"} building games that challenge and reward strategic thinking. Our commitment to quality means we take the time to refine every mechanic, balance every system, and ensure every decision matters.
            </p>
            <p>
              We believe in creating games that respect player intelligence and offer meaningful choices. {"Whether it's"} managing resources, optimizing strategies, or adapting to dynamic challenges, our games are designed to keep you thinking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Games in Development */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4 font-[family-name:var(--font-poppins)]">Our Projects</h2>
            <p className="text-gray-400 text-lg">Currently in development</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - Tower Defense */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-video rounded-2xl overflow-hidden backdrop-blur-xl bg-card/60 border border-primary/20 group hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-orange-500/30 to-pink-500/30" style={{ filter: 'blur(30px)' }} />
              <div className="relative h-full p-6 flex flex-col justify-between backdrop-blur-sm">
                <Badge className="self-end bg-primary/20 text-primary border-primary/30">Coming Soon</Badge>
                <div>
                  <Badge className="mb-3 bg-purple-500/20 text-purple-300 border-purple-500/30">Tower Defense</Badge>
                  <p className="text-sm text-gray-300">Strategic placement • Wave-based • Deep progression</p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Clicker */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-video rounded-2xl overflow-hidden backdrop-blur-xl bg-card/60 border border-primary/20 group hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 via-blue-500/30 to-teal-500/30" style={{ filter: 'blur(30px)' }} />
              <div className="relative h-full p-6 flex flex-col justify-between backdrop-blur-sm">
                <Badge className="self-end bg-green-500/20 text-green-300 border-green-500/30">In Development</Badge>
                <div>
                  <Badge className="mb-3 bg-green-500/20 text-green-300 border-green-500/30">Incremental</Badge>
                  <p className="text-sm text-gray-300">Idle progression • Strategy upgrades • Long-term growth</p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Future */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-video rounded-2xl overflow-hidden backdrop-blur-xl bg-card/60 border border-primary/20 group hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700/30 via-gray-600/30 to-gray-500/30" style={{ filter: 'blur(30px)' }} />
              <div className="relative h-full p-6 flex flex-col justify-center items-center backdrop-blur-sm">
                <Badge className="mb-4 bg-gray-500/20 text-gray-300 border-gray-500/30">Concepting</Badge>
                <p className="text-4xl mb-2">{'?'}</p>
                <p className="text-gray-400">More to come...</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-16 text-center font-[family-name:var(--font-poppins)]"
          >
            What We Do Best
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <h3 className="text-xl font-bold text-white font-[family-name:var(--font-poppins)]">Game Design</h3>
              <p className="text-gray-400 leading-relaxed">
                Creating engaging mechanics with depth and replayability. Balancing complexity with accessibility.
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
                Building with modern tech stack. React Native, TypeScript, scalable architecture for cross-platform experiences.
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
              <h3 className="text-xl font-bold text-white font-[family-name:var(--font-poppins)]">Systems Design</h3>
              <p className="text-gray-400 leading-relaxed">
                Crafting intricate progression systems, economies, and player feedback loops that keep players engaged.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #6366F1 2px, #6366F1 3px), repeating-linear-gradient(90deg, transparent, transparent 2px, #6366F1 2px, #6366F1 3px)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-12 text-center font-[family-name:var(--font-poppins)]"
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
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-16 text-center font-[family-name:var(--font-poppins)]"
          >
            Our Approach
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-poppins)]">Player-First Development</h3>
              <p className="text-gray-300 leading-relaxed">
                We prioritize meaningful gameplay over monetization gimmicks. Regular testing and iteration based on player feedback. Transparent development process.
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
                Taking time to get mechanics right. Comprehensive testing and balancing. No release until {"it's"} truly ready.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4 font-[family-name:var(--font-poppins)]">{"Let's Connect"}</h2>
            <p className="text-gray-400 text-lg">
              Interested in our projects? Want to collaborate? Get in touch.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 text-center"
          >
            <a href="mailto:hello@gmoinstudio.com" className="inline-flex items-center gap-2 text-2xl text-primary hover:text-primary/80 transition-colors duration-300">
              <Mail className="w-6 h-6" />
              hello@gmoinstudio.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center gap-6 mb-12"
          >
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-card border border-primary/20 rounded-lg flex items-center justify-center hover:border-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
              <Twitter className="w-5 h-5 text-gray-300 hover:text-primary transition-colors" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-card border border-primary/20 rounded-lg flex items-center justify-center hover:border-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
              <svg className="w-5 h-5 text-gray-300 hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
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
      <footer className="py-12 px-4 border-t border-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            <div className="flex items-center gap-2">
              <Gamepad2 className="w-5 h-5 text-primary" />
              <span className="font-bold font-[family-name:var(--font-poppins)]">gmoinstudio</span>
            </div>
            <span className="text-gray-500">•</span>
            <span className="text-gray-500">© {new Date().getFullYear()} All rights reserved</span>
            <span className="hidden md:inline text-gray-500">•</span>
            <div className="flex gap-4 text-gray-400 text-sm">
              <Link href="/privacy" className="text-primary hover:underline transition-all duration-300">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="text-primary hover:underline transition-all duration-300">
                Terms of Service
              </Link>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors duration-300">Press Kit</a>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            {'Made with 🎮 and ☕'}
          </p>
        </div>
      </footer>
    </div>
  )
}
