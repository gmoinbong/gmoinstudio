'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Gamepad2, Mail } from 'lucide-react'

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-primary/10 backdrop-blur-xl bg-background/80">
        <div className="max-w-4xl mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Gamepad2 className="w-6 h-6 text-primary" />
            <span className="text-lg font-bold font-[family-name:var(--font-poppins)]">gmoinstudio</span>
          </Link>
          <Link 
            href="/"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-[800px] mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-white mb-4 font-[family-name:var(--font-poppins)]">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 mb-16">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        </motion.div>

        {/* Section 1 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 font-[family-name:var(--font-poppins)]">
            Agreement
          </h2>
          <p className="text-gray-300 leading-relaxed">
            By accessing or playing our games, you agree to these Terms of Service. If you do not agree, do not use our games. These terms constitute a legal agreement between you and gmoinstudio.
          </p>
        </motion.section>

        {/* Section 2 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 font-[family-name:var(--font-poppins)]">
            Who Can Use Our Games
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Age Requirement</h3>
              <p>
                You must be at least 13 years old to play our games. Users under 18 require parental consent.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Geographic Restrictions</h3>
              <p>
                Our games are available worldwide except where prohibited by law. Some features may vary by region.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Account</h3>
              <p>
                You are responsible for maintaining account security. One person per account.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 3 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 font-[family-name:var(--font-poppins)]">
            Your Obligations
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">You agree NOT to:</p>
          <ul className="space-y-2 text-gray-300 leading-relaxed list-disc list-inside">
            <li>Use cheats, hacks, mods, or exploits to gain unfair advantage</li>
            <li>Harass, abuse, or harm other players</li>
            <li>Share or sell your account</li>
            <li>Reverse engineer or decompile game code</li>
            <li>Use the game for commercial purposes without permission</li>
            <li>Upload harmful content or viruses</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            Violation may result in account suspension or ban without refund.
          </p>
        </motion.section>

        {/* Section 4 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 font-[family-name:var(--font-poppins)]">
            Our Rights & Ownership
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Intellectual Property</h3>
              <p>
                All game content, graphics, code, mechanics, and designs are owned by gmoinstudio. Protected by copyright and trademark laws.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Content Updates</h3>
              <p>
                We reserve the right to modify, update, or discontinue game features at any time without notice.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">User-Generated Content</h3>
              <p>
                Any feedback, suggestions, or content you submit may be used by us without compensation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Account Termination</h3>
              <p>
                We may suspend or terminate accounts that violate terms, at our sole discretion.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 5 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 font-[family-name:var(--font-poppins)]">
            Purchases & Refunds
          </h2>
          <ul className="space-y-3 text-gray-300 leading-relaxed list-disc list-inside">
            <li>All purchases are final unless required by law</li>
            <li>Virtual currency has no real-world value and is non-transferable</li>
            <li>We are not responsible for unauthorized purchases (secure your device)</li>
            <li>Prices may change without notice</li>
            <li>For refund requests, contact platform (App Store/Google Play) within 48 hours</li>
          </ul>
        </motion.section>

        {/* Section 6 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 font-[family-name:var(--font-poppins)]">
            Disclaimers
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            {'Games provided "AS IS" without warranties. We are not liable for:'}
          </p>
          <ul className="space-y-2 text-gray-300 leading-relaxed list-disc list-inside">
            <li>Game errors, bugs, crashes, or data loss</li>
            <li>Interruption of service or server downtime</li>
            <li>Loss of progress or in-game items</li>
            <li>Third-party content or links</li>
            <li>Damages from use or inability to use games</li>
            <li>Maximum liability limited to amount paid in last 30 days</li>
          </ul>
        </motion.section>

        {/* Section 7 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 font-[family-name:var(--font-poppins)]">
            Data & Privacy
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Your use of our games is also governed by our{' '}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
            . Please review it to understand how we collect and use data.
          </p>
        </motion.section>

        {/* Section 8 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 font-[family-name:var(--font-poppins)]">
            Changes to Terms
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We may modify these terms at any time. Significant changes will be notified via email or in-game. Continued use after changes constitutes acceptance.
          </p>
        </motion.section>

        {/* Section 9 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 font-[family-name:var(--font-poppins)]">
            Governing Law
          </h2>
          <p className="text-gray-300 leading-relaxed">
            These terms are governed by applicable law. Disputes will be resolved in accordance with local jurisdiction. If any provision is invalid, remaining terms stay in effect.
          </p>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-16 p-8 rounded-2xl border border-primary/20 bg-card/30 backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold text-white mb-4 font-[family-name:var(--font-poppins)] text-center">
            Questions or Issues?
          </h2>
          <div className="text-center space-y-3">
            <div>
              <a 
                href="mailto:hello@gmoinstudio.com" 
                className="inline-flex items-center gap-2 text-xl text-primary hover:text-primary/80 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                hello@gmoinstudio.com
              </a>
            </div>
            <div>
              <p className="text-gray-400 text-sm">For account issues: </p>
              <a 
                href="mailto:hello@gmoinstudio.com" 
                className="text-primary hover:text-primary/80 transition-colors duration-300"
              >
                hello@gmoinstudio.com
              </a>
            </div>
            <p className="text-sm text-gray-400">Response time: 48-72 hours</p>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-primary transition-colors duration-300">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-primary transition-colors duration-300">
              Terms of Service
            </Link>
            <span>•</span>
            <span>© {new Date().getFullYear()} gmoinstudio</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
