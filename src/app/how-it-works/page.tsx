// app/how-it-works/page.tsx

import type { Metadata } from 'next'
import { FAQAccordion } from './faq-accordion'

export const metadata: Metadata = {
  title: 'How ForgedLocal Works – Behind Your Existing Number',
  description:
    'See how ForgedLocal plugs in behind your current business line to detect missed calls and text customers back automatically.',
}

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <nav className="container mx-auto flex items-center justify-between px-4 py-3 sm:py-4 lg:px-8">
          <a href="/" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 220 40"
              width="220"
              height="40"
              role="img"
              aria-label="ForgedLocal logo"
              className="h-8 w-auto"
            >
              <text
                x="0"
                y="26"
                fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif"
                fontSize="22"
                fontWeight="700"
              >
                <tspan fill="#0B1220">Forged</tspan>
                <tspan fill="#FBBF24" textDecoration="underline">Local</tspan>
              </text>
            </svg>
          </a>

          <div className="hidden items-center gap-6 text-xs font-medium text-slate-600 md:flex sm:text-sm">
            <a href="/how-it-works" className="text-slate-900">
              How it works
            </a>
            <a href="/#who-we-serve" className="hover:text-slate-900">
              Who it&apos;s for
            </a>
            <a href="/#pricing" className="hover:text-slate-900">
              Pricing
            </a>
            <a href="/#contact" className="hover:text-slate-900">
              Contact
            </a>
          </div>

          <a
            href="/#contact"
            className="inline-flex items-center rounded-full bg-amber-400 px-4 py-2 text-xs font-semibold text-slate-900 shadow-sm transition hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:text-sm"
          >
            Book a quick intro call
          </a>
        </nav>
      </header>

      <main className="flex-1">
        {/* HERO */}
        <section
          id="hero"
          aria-labelledby="hero-heading"
          className="relative overflow-hidden bg-slate-950 text-slate-50"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
            aria-hidden="true"
          />

          <div className="relative container mx-auto px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
            <div className="mx-auto max-w-3xl space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 rounded-full bg-slate-900/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-400/20 text-sm text-amber-200">
                  #
                </span>
                Behind your number
              </div>
              <h1
                id="hero-heading"
                className="text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                How ForgedLocal sits behind your number
              </h1>
              <p className="text-sm text-slate-300 sm:text-base" style={{ lineHeight: '1.6' }}>
                Your public number stays the same. We plug in behind it, spot missed calls, and text customers back automatically from the same number they called.
              </p>
            </div>
          </div>
        </section>

        {/* CALL FLOW DIAGRAM */}
        <section className="border-t border-slate-200/60 bg-white">
          <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="mb-4 flex justify-center">
                <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-amber-600">
                  How it routes
                </span>
              </div>
              <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight sm:text-3xl">
                The call flow in plain English
              </h2>

              <div className="relative">
                <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-px w-[85%] -translate-x-1/2 -translate-y-1/2 bg-slate-700/30 lg:block" />
                <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
                  <div className="relative flex min-h-[230px] flex-col rounded-2xl bg-slate-900 p-6 text-white shadow-sm">
                    <span className="absolute left-6 top-6 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-sm font-semibold text-slate-950">
                      1
                    </span>
                    <div className="pt-10">
                      <h3 className="mb-2 text-lg font-semibold">
                        Customer calls your usual number
                      </h3>
                      <p className="text-sm text-slate-300" style={{ lineHeight: '1.6' }}>
                        You keep the same number on trucks, cards, and Google.
                      </p>
                    </div>
                  </div>

                  <div className="relative flex min-h-[230px] flex-col rounded-2xl bg-slate-900 p-6 text-white shadow-sm">
                    <span className="absolute left-6 top-6 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-sm font-semibold text-slate-950">
                      2
                    </span>
                    <div className="pt-10">
                      <h3 className="mb-2 text-lg font-semibold">
                        Forwarded through ForgedLocal
                      </h3>
                      <p className="text-sm text-slate-300" style={{ lineHeight: '1.6' }}>
                        Calls are forwarded to a ForgedLocal number. We log every attempt and send it straight to your phones.
                      </p>
                    </div>
                  </div>

                  <div className="relative flex min-h-[230px] flex-col rounded-2xl bg-slate-900 p-6 text-white shadow-sm">
                    <span className="absolute left-6 top-6 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-sm font-semibold text-slate-950">
                      3
                    </span>
                    <div className="pt-10">
                      <h3 className="mb-2 text-lg font-semibold">
                        If missed, we text them back
                      </h3>
                      <p className="text-sm text-slate-300" style={{ lineHeight: '1.6' }}>
                        No answer? ForgedLocal marks it as missed and sends a quick SMS from your business number.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR WITH MAP ACCENT */}
        <section
          id="who-we-serve"
          className="border-t border-slate-200/60 bg-white"
        >
          <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
            <div className="mx-auto flex max-w-5xl flex-col gap-6 lg:flex-row lg:items-center lg:gap-12">
              <div className="space-y-4 text-center lg:w-3/5 lg:text-left">
                <div className="flex items-center justify-center gap-3 lg:justify-start">
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wide text-slate-700">
                    Who it&apos;s for
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                  Built for Southern NH service businesses
                </h3>
                <p className="text-sm text-slate-600">
                  We focus on contractors and home service teams in Southern New Hampshire and nearby who already have a public number and a steady flow of calls.
                </p>
                <div className="grid gap-3 text-left text-sm text-slate-600 sm:grid-cols-2">
                  {[
                    'HVAC, roofing, plumbing, electrical, landscaping, and similar trades.',
                    'Offices that publish a business number on trucks, cards, and Google.',
                    'Teams that miss calls during busy stretches or after hours.',
                    'Owners who want proof that follow-up texts turn into booked jobs.',
                  ].map(item => (
                    <div key={item} className="flex items-start gap-2 rounded-2xl bg-slate-50 p-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-2/5">
                <div className="mx-auto max-w-xs rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm">
                  <img
                    src="/new-england.svg"
                    alt="New England outline"
                    className="mx-auto w-40 opacity-60"
                    loading="lazy"
                  />
                  <p className="mt-4 text-xs text-slate-500">
                    Serving Southern NH and nearby markets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STEP-BY-STEP EXPLANATION */}
        <section className="border-t border-slate-200/60 bg-[#F7F8FC]">
          <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="mb-4 flex justify-center">
                <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-amber-600">
                  What happens
                </span>
              </div>
              <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight sm:text-3xl">
                Step-by-step
              </h2>

              <div className="space-y-4">
                {[
                  {
                    title: 'Connect behind your number - ',
                    body: 'We have your carrier forward calls from your public number to a ForgedLocal tracking line.',
                  },
                  {
                    title: 'Log every incoming call - ',
                    body: 'Every call is recorded in your system with time, number, and whether it was answered or missed.',
                  },
                  {
                    title: 'Detect missed calls - ',
                    body: 'When a call isn’t answered (busy, no pickup, voicemail), we flag it instantly as a missed call.',
                  },
                  {
                    title: 'Text missed callers back - ',
                    body: 'Missed callers get a short, friendly SMS from your business number.',
                  },
                  {
                    title: 'Review the impact - ',
                    body: 'You see how many missed calls were texted and which ones turned into jobs.',
                  },
                ].map((step, index) => (
                  <div key={step.title} className="grid gap-4 md:grid-cols-[auto,1fr] md:items-start">
                    <div className="flex items-center md:justify-center">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-sm font-semibold text-slate-950">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600" style={{ lineHeight: '1.6' }}>
                      <span className="font-semibold text-slate-900">{step.title}</span>
                      {step.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="border-t border-slate-200/60 bg-white">
          <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="mb-4 flex justify-center">
                <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-amber-600">
                  Common questions
                </span>
              </div>
              <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight sm:text-3xl">
                Frequently asked questions
              </h2>

              <div className="space-y-2">
                <FAQAccordion
                  question="Do we have to change our business number?"
                  answer="No. You keep the same public number. We only change where calls are routed behind the scenes."
                />
                <FAQAccordion
                  question="Is this a phone system replacement?"
                  answer="No. ForgedLocal plugs into your existing phones. They still ring the same way; we just watch for missed calls and text people back."
                />
                <FAQAccordion
                  question="What happens to our existing voicemail?"
                  answer="You can keep your current voicemail exactly as it is. ForgedLocal works alongside it."
                />
                <FAQAccordion
                  question="Can we turn it off if we don't like it?"
                  answer="Yes. Removing call forwarding sends calls straight to your current setup and bypasses ForgedLocal."
                />
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="border-t border-slate-200/60 bg-white">
          <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-6 text-sm text-slate-600" style={{ lineHeight: '1.6' }}>
                Want to see how this would work with your phone setup?
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Book a quick intro call
              </a>
              <p className="mt-3 text-xs text-slate-500">
                We&apos;ll walk through your call flow together.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="container mx-auto flex flex-col items-start justify-between gap-4 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>© 2025 ForgedLocal. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="/how-it-works" className="hover:text-slate-800">
              How it works
            </a>
            <a href="/#who-we-serve" className="hover:text-slate-800">
              Who it&apos;s for
            </a>
            <a href="/#pricing" className="hover:text-slate-800">
              Pricing
            </a>
            <a href="/#contact" className="hover:text-slate-800">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
