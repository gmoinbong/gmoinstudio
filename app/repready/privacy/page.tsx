'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Dumbbell, Mail } from 'lucide-react'

export default function RepReadyPrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-primary/10 backdrop-blur-xl bg-background/80">
        <div className="max-w-4xl mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Dumbbell className="w-6 h-6 text-primary" />
            <span className="text-lg font-bold font-[family-name:var(--font-poppins)]">RepReady</span>
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
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            RepReady — Gym Recovery Tracker
          </p>
          <p className="text-sm text-gray-500 mb-16">
            Last updated:{' '}
            {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </motion.div>

        {/* Section 1 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 font-[family-name:var(--font-poppins)]">
            The Short Version
          </h2>
          <p className="text-gray-300 leading-relaxed">
            RepReady does not collect, transmit, or share any of your personal data.
            Everything you enter — check-ins, muscle soreness, sleep, recovery scores —
            stays on your device. We have no servers, no accounts, and no way to see your data.
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
            What Data We Collect
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Health & Fitness Data</h3>
              <p>
                Your daily check-ins (muscle soreness, sleep quality, energy, motivation),
                recovery scores, and notes are stored locally on your device using SQLite.
                This data never leaves your device and is never transmitted to any server.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Profile Settings</h3>
              <p>
                Your training preferences (experience level, training type, schedule, age group)
                are stored locally on your device. We do not collect or store this information remotely.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">What We Do NOT Collect</h3>
              <p>
                We do not collect your name, email, location, device identifiers,
                or any other personally identifiable information. We do not use analytics SDKs,
                advertising networks, or crash reporting services.
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
            How Your Data Is Stored
          </h2>
          <ul className="space-y-3 text-gray-300 leading-relaxed list-disc list-inside">
            <li>All data is stored locally on your device using SQLite</li>
            <li>No internet connection is required to use RepReady</li>
            <li>Data is only deleted if you use the "Delete all data" option in Settings or uninstall the app</li>
            <li>You can export your data as CSV at any time from Settings</li>
          </ul>
        </motion.section>

        {/* Section 4 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 font-[family-name:var(--font-poppins)]">
            Premium Purchase
          </h2>
          <p className="text-gray-300 leading-relaxed">
            RepReady offers a one-time Premium unlock via Google Play Billing.
            All payment processing is handled entirely by Google Play.
            We do not receive, store, or have access to your payment information.
            Google's privacy policy applies to the transaction:{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              policies.google.com/privacy
            </a>
            .
          </p>
        </motion.section>

        {/* Section 5 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 font-[family-name:var(--font-poppins)]">
            Third-Party Services
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            RepReady is built with Expo. The app itself does not integrate any
            third-party analytics, advertising, or tracking SDKs.
            The only third-party interaction is Google Play for app distribution and in-app purchases.
          </p>
          <ul className="space-y-2 text-gray-300 leading-relaxed">
            <li>
              <a
                href="https://expo.dev/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Expo
              </a>
              {' — development framework (no data collected at runtime)'}
            </li>
            <li>
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google Play
              </a>
              {' — app distribution and billing'}
            </li>
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
            Your Rights
          </h2>
          <ul className="space-y-3 text-gray-300 leading-relaxed list-disc list-inside">
            <li>All your data is already fully under your control — it lives on your device</li>
            <li>You can delete all data at any time via Settings → Delete all data</li>
            <li>You can export all your data as CSV via Settings → Export CSV</li>
            <li>Uninstalling the app removes all locally stored data permanently</li>
          </ul>
        </motion.section>

        {/* Section 7 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 font-[family-name:var(--font-poppins)]">
            Children
          </h2>
          <p className="text-gray-300 leading-relaxed">
            RepReady is intended for users aged 13 and older. We do not knowingly
            collect data from children under 13. Since no data leaves the device,
            there is no remote data to delete — uninstalling the app removes everything.
          </p>
        </motion.section>

        {/* Section 8 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 font-[family-name:var(--font-poppins)]">
            Changes to This Policy
          </h2>
          <p className="text-gray-300 leading-relaxed">
            If we ever introduce features that change how data is handled,
            this policy will be updated and the date at the top will reflect the change.
            We will notify users through an in-app message for any material changes.
          </p>
        </motion.section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16 p-8 rounded-2xl border border-primary/20 bg-card/30 backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold text-white mb-4 font-[family-name:var(--font-poppins)] text-center">
            Questions?
          </h2>
          <div className="text-center space-y-2">
            <a
              href="mailto:hello@gmoinstudio.com"
              className="inline-flex items-center gap-2 text-xl text-primary hover:text-primary/80 transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              hello@gmoinstudio.com
            </a>
            <p className="text-sm text-gray-400">Response time: 48–72 hours</p>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <Link href="/repready/privacy" className="hover:text-primary transition-colors duration-300">
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