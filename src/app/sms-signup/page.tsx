'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SMSSignupPage() {
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '')
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/)
    if (match) {
      const parts = [match[1], match[2], match[3]].filter(Boolean)
      if (parts.length === 0) return ''
      if (parts.length === 1) return parts[0]
      if (parts.length === 2) return `(${parts[0]}) ${parts[1]}`
      return `(${parts[0]}) ${parts[1]}-${parts[2]}`
    }
    return value
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setPhone(formatted)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    
    const cleanedPhone = phone.replace(/\D/g, '')
    if (cleanedPhone.length !== 10) {
      setError('Please enter a valid 10-digit phone number')
      return
    }

    setIsSubmitting(true)
    
    try {
      // Simulate API call - replace with your actual Twilio/backend integration
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSuccess(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="flex min-h-screen flex-col bg-[#FFFDF8] text-slate-900">
        <Header />
        <main className="flex-1 flex items-center justify-center py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-md text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-slate-900 mb-4">You&apos;re All Set!</h1>
              <p className="text-slate-600 mb-6">
                Thank you for signing up for SMS updates from ForgedLocal. 
                You&apos;ll receive a confirmation message shortly.
              </p>
              <p className="text-sm text-slate-500 mb-8">
                Reply STOP at any time to unsubscribe.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#FFFDF8] text-slate-900">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-md">
            {/* Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-100 to-amber-200">
                  <svg className="h-7 w-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-slate-900 mb-2">
                  Get SMS Updates
                </h1>
                <p className="text-slate-600">
                  Stay informed about our services and exclusive offers
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="(555) 555-5555"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-colors"
                    required
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">
                    {error}
                  </p>
                )}

                {/* Primary CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-amber-500/25 hover:from-amber-600 hover:to-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Signing up...
                    </span>
                  ) : (
                    'Sign up for SMS'
                  )}
                </button>

                {/* Secondary option */}
                <Link
                  href="/"
                  className="block w-full rounded-lg border border-slate-300 px-6 py-3 text-center text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  No Thanks
                </Link>
              </form>

              {/* A2P Compliance Disclosure */}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-xs text-slate-500 leading-relaxed">
                  By submitting this form and signing up for texts, you{' '}
                  <span className="text-slate-700 font-medium">
                    consent to receive marketing text messages
                  </span>{' '}
                  (e.g. service updates, promotions, appointment reminders) from ForgedLocal 
                  at the number provided, including messages sent by autodialer.{' '}
                  <span className="text-slate-700 font-medium">
                    Consent is not a condition of purchase.
                  </span>{' '}
                  <span className="text-slate-700 font-medium">
                    Msg &amp; data rates may apply.
                  </span>{' '}
                  Msg frequency varies. Unsubscribe at any time by replying{' '}
                  <span className="font-semibold text-slate-700">STOP</span>{' '}
                  or clicking the unsubscribe link (where available).{' '}
                  <Link href="/privacy" className="text-amber-600 underline hover:text-amber-700">
                    Privacy Policy
                  </Link>
                  {' & '}
                  <Link href="/terms" className="text-amber-600 underline hover:text-amber-700">
                    Terms
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Additional info below card */}
            <div className="mt-6 text-center">
              <p className="text-sm text-slate-500">
                Questions? Contact us at{' '}
                <a href="mailto:support@forgedlocal.com" className="text-amber-600 underline hover:text-amber-700">
                  support@forgedlocal.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="border-b border-amber-100/80 bg-[#FFFDF8]">
      <nav className="container mx-auto flex items-center justify-center px-4 h-16 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg shadow-amber-500/20">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <span className="text-xl font-bold">
            <span className="text-slate-900">Forged</span>
            <span className="text-amber-600">Local</span>
          </span>
        </Link>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-slate-500">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link href="/" className="hover:text-amber-600 transition-colors">← Back to Home</Link>
          <span className="text-slate-300">|</span>
          <Link href="/sms-consent" className="hover:text-amber-600 transition-colors">SMS Terms</Link>
          <span className="text-slate-300">|</span>
          <Link href="/privacy" className="hover:text-amber-600 transition-colors">Privacy Policy</Link>
          <span className="text-slate-300">|</span>
          <Link href="/terms" className="hover:text-amber-600 transition-colors">Terms of Service</Link>
        </div>
        <p className="mt-4 text-slate-400">
          © {new Date().getFullYear()} ForgedLocal. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

