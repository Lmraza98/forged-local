import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SMS Terms & Consent | ForgedLocal',
  description: 'ForgedLocal SMS messaging terms, consent disclosure, and opt-out information.',
}

export default function SMSConsentPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFFDF8] text-slate-900">
      <header className="border-b border-amber-100/80 bg-[#FFFDF8]">
        <nav className="container mx-auto flex items-center justify-center px-4 h-16 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-amber-600">
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

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-bold text-slate-900 mb-8">SMS Terms &amp; Consent</h1>
            
            <div className="space-y-8">
              <section className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">What You&apos;re Opting Into</h2>
                <p className="text-slate-600 mb-4">
                  By submitting your phone number on ForgedLocal.com, you consent to receive:
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Phone calls and/or SMS text messages from ForgedLocal regarding our missed call text-back services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Follow-up messages about your inquiry, appointment reminders, and service updates</span>
                  </li>
                </ul>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Message Frequency</h2>
                <p className="text-slate-600">
                  Message frequency varies based on your interaction with our service. 
                  You may receive 1-5 messages per month related to your inquiry, account, 
                  or service updates.
                </p>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">How to Opt Out</h2>
                <p className="text-slate-600 mb-4">
                  You can opt out of SMS messages at any time by:
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span><strong>Replying STOP</strong> to any message you receive from us</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Emailing us at <a href="mailto:support@forgedlocal.com" className="text-amber-600 underline">support@forgedlocal.com</a></span>
                  </li>
                </ul>
                <p className="text-slate-600 mt-4">
                  After opting out, you will receive one final confirmation message. 
                  No further messages will be sent unless you re-subscribe.
                </p>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Help</h2>
                <p className="text-slate-600">
                  For help or questions about our SMS program, reply <strong>HELP</strong> to any message 
                  or contact us at <a href="mailto:support@forgedlocal.com" className="text-amber-600 underline">support@forgedlocal.com</a>.
                </p>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Message &amp; Data Rates</h2>
                <p className="text-slate-600">
                  Message and data rates may apply. Check with your mobile carrier for details 
                  about your text messaging plan. Carriers are not liable for delayed or 
                  undelivered messages.
                </p>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Privacy</h2>
                <p className="text-slate-600">
                  Your phone number and personal information are protected under our{' '}
                  <Link href="/privacy" className="text-amber-600 underline">Privacy Policy</Link>. 
                  We do not sell or share your phone number with third parties for marketing purposes.
                </p>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Consent Acknowledgment</h2>
                <p className="text-slate-600">
                  By providing your phone number and submitting a form on our website, you expressly 
                  consent to receive automated text messages and calls from ForgedLocal. This consent 
                  is not a condition of purchase. You may revoke consent at any time.
                </p>
              </section>

              <div className="text-center text-sm text-slate-500 pt-4">
                <p>Last updated: January 2025</p>
                <p className="mt-2">
                  <Link href="/terms" className="underline hover:text-amber-600">Terms of Service</Link>
                  {' • '}
                  <Link href="/privacy" className="underline hover:text-amber-600">Privacy Policy</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-slate-500">
          <Link href="/" className="hover:text-amber-600">← Back to Home</Link>
        </div>
      </footer>
    </div>
  )
}

