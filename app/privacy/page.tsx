'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Gamepad2, Mail } from 'lucide-react'

export default function PrivacyPage() {
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
            Privacy Policy
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
            What Data We Collect
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Personal Information</h3>
              <p>
                We may collect email addresses and usernames when you contact us or create an account. This information is provided voluntarily.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Analytics Data</h3>
              <p>
                We use Google Analytics and Firebase to collect anonymous usage data including device type, OS version, gameplay sessions, and in-game events. This helps us improve game performance and user experience.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Advertising Data</h3>
              <p>
                We may collect advertising identifiers (IDFA/GAID) to show relevant ads through Google AdMob and Unity Ads.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Cookies</h3>
              <p>
                Our website uses cookies for analytics and to remember your preferences. You can disable cookies in your browser settings.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 2 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 font-[family-name:var(--font-poppins)]">
            Purpose of Data Collection
          </h2>
          <ul className="space-y-3 text-gray-300 leading-relaxed list-disc list-inside">
            <li>Improve game mechanics, balance, and user experience based on gameplay patterns</li>
            <li>Provide technical support and respond to user inquiries</li>
            <li>Send important updates about our games (only if you opted in)</li>
            <li>Display relevant advertisements to support free game development</li>
            <li>Analyze crashes and bugs to improve game stability</li>
          </ul>
        </motion.section>

        {/* Section 3 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 font-[family-name:var(--font-poppins)]">
            How We Store & Protect Data
          </h2>
          <ul className="space-y-3 text-gray-300 leading-relaxed list-disc list-inside">
            <li>Data is stored securely on Firebase/AWS servers with industry-standard encryption</li>
            <li>Only core team members have access to aggregated analytics data</li>
            <li>Personal information (emails) is stored separately and never shared with third parties</li>
            <li>We retain data for maximum 2 years or until you request deletion</li>
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
            Third-Party SDKs & Services
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We use the following third-party services, each with their own privacy policies:
          </p>
          <ul className="space-y-2 text-gray-300 leading-relaxed">
            <li>
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Google Analytics
              </a>
              {' (analytics)'}
            </li>
            <li>
              <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Firebase
              </a>
              {' (backend, analytics, crashlytics)'}
            </li>
            <li>
              <a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Google AdMob
              </a>
              {' (advertising)'}
            </li>
            <li>
              <a href="https://unity.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Unity Ads
              </a>
              {' (advertising)'}
            </li>
            <li>
              <a href="https://expo.dev/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Expo
              </a>
              {' (development framework)'}
            </li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            Each service has its own privacy policy. We recommend reviewing them.
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
            Data Rights & Requests
          </h2>
          <ul className="space-y-3 text-gray-300 leading-relaxed list-disc list-inside">
            <li>You have the right to request access to your personal data</li>
            <li>You can request deletion of your data at any time</li>
            <li>You can opt-out of analytics and advertising (may affect app functionality)</li>
            <li>For GDPR/CCPA compliance: contact us to exercise your rights</li>
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
            {'Children Under 13'}
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Our games are not intended for children under 13. We do not knowingly collect data from children. If you believe a child has provided data, contact us immediately for removal.
          </p>
        </motion.section>

        {/* Section 7 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 font-[family-name:var(--font-poppins)]">
            Changes to Policy
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We may update this policy periodically. Changes will be posted on this page with updated date. Continued use constitutes acceptance of changes.
          </p>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16 p-8 rounded-2xl border border-primary/20 bg-card/30 backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold text-white mb-4 font-[family-name:var(--font-poppins)] text-center">
            Questions About Privacy?
          </h2>
          <div className="text-center space-y-2">
            <a 
              href="mailto:privacy@yourstudio.com" 
              className="inline-flex items-center gap-2 text-xl text-primary hover:text-primary/80 transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              privacy@yourstudio.com
            </a>
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
