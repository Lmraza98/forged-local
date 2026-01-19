import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank You | ForgedLocal',
  description: 'Thanks for reaching out! Book your setup call now.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFFDF8] text-slate-900">
      {/* HEADER */}
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

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center">
          {/* Success Icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
            <svg className="h-10 w-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            We got your info!
          </h1>
          
          <p className="text-lg text-slate-600 mb-8">
            We&apos;ll review your details and reach out within 24 hours. But if you want to 
            <span className="font-semibold text-amber-600"> skip the wait</span>, book your setup call right now:
          </p>

          {/* Calendly Embed */}
          <div className="rounded-2xl border-2 border-amber-200 bg-white p-6 sm:p-8 shadow-xl mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Book Your 10-Minute Setup Call
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              We&apos;ll walk through your phone setup and have you live in 48 hours.
            </p>
            
            {/* Calendly inline widget - Replace YOUR_CALENDLY_URL */}
            <div 
              className="calendly-inline-widget rounded-xl overflow-hidden" 
              data-url="https://calendly.com/YOUR_CALENDLY_URL?hide_gdpr_banner=1&primary_color=f59e0b"
              style={{ minWidth: '320px', height: '630px' }}
            />
            <script 
              type="text/javascript" 
              src="https://assets.calendly.com/assets/external/widget.js" 
              async 
            />
          </div>

          {/* Alternative CTA */}
          <div className="space-y-4">
            <p className="text-sm text-slate-500">
              Prefer a quick text? Reply to the confirmation we just sent.
            </p>
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-700"
            >
              <svg className="mr-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to homepage
            </Link>
          </div>

          {/* Trust signals */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No obligation
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                10 minutes
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Live in 48 hours
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}



