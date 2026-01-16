'use client'

import Link from 'next/link'
import { ContactForm } from './ContactForm'

interface IndustryLandingPageProps {
  industry: string
  industryPlural: string
  heroTitle: string
  heroSubtitle: string
  painPoints: string[]
  benefits: string[]
  stats: {
    missedCallPercent: string
    avgJobValue: string
    monthlyLoss: string
  }
  testimonial?: {
    quote: string
    name: string
    company: string
    location: string
  }
  faqs: Array<{
    question: string
    answer: string
  }>
}

export function IndustryLandingPage({
  industry,
  industryPlural,
  heroTitle,
  heroSubtitle,
  painPoints,
  benefits,
  stats,
  testimonial,
  faqs
}: IndustryLandingPageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFFDF8] text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-amber-100/80 bg-[#FFFDF8]/95 backdrop-blur h-16">
        <nav className="container mx-auto flex items-center justify-between px-4 h-full lg:px-8">
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

          <Link
            href="#contact"
            className="inline-flex items-center rounded-full bg-amber-700 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-amber-700/25 transition hover:bg-amber-800 hover:shadow-amber-700/40"
          >
            Get Your Free Quote
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Decorative grid */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          />
          
          <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-24 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              {/* Trust badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-4 py-2">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-medium text-amber-200">Trusted by {industryPlural} in New Hampshire</span>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {heroTitle}
              </h1>
              
              <p className="mt-6 text-lg text-slate-300 sm:text-xl max-w-2xl mx-auto leading-relaxed">
                {heroSubtitle}
              </p>

              {/* Stats row */}
              <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-amber-400">{stats.missedCallPercent}</div>
                  <div className="text-xs sm:text-sm text-slate-300 mt-1">Calls Go to Voicemail</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-amber-400">{stats.avgJobValue}</div>
                  <div className="text-xs sm:text-sm text-slate-300 mt-1">Avg Job Value</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-red-400">{stats.monthlyLoss}</div>
                  <div className="text-xs sm:text-sm text-slate-300 mt-1">Lost Monthly</div>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-amber-700 px-8 py-4 text-base font-bold text-white shadow-lg shadow-amber-700/30 transition hover:bg-amber-800 hover:shadow-amber-700/40 hover:scale-105"
                >
                  Stop Losing {industry} Jobs Today
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center rounded-full border-2 border-slate-600 px-8 py-4 text-base font-semibold text-slate-300 transition hover:border-amber-500 hover:text-amber-400"
                >
                  See How It Works
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PAIN POINTS */}
        <section className="border-b border-amber-100 bg-white py-16 sm:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <span className="inline-block rounded-full bg-red-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-red-700 mb-4">
                  The Problem
                </span>
                <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                  Every Missed Call Costs You Money
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {painPoints.map((point, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 rounded-2xl border border-red-100 bg-red-50/50 p-5"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500 text-white text-sm font-bold">
                      ✗
                    </span>
                    <p className="text-slate-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTION / BENEFITS */}
        <section className="bg-[#FFFDF8] py-16 sm:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-4">
                  The Solution
                </span>
                <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                  ForgedLocal Captures Every Lead
                </h2>
                <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                  We plug into your existing {industry.toLowerCase()} business line. When you miss a call, we automatically text them back within 60 seconds.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white text-sm font-bold">
                      ✓
                    </span>
                    <p className="text-slate-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS - Quick Version */}
        <section className="border-y border-amber-100 bg-white py-16 sm:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="text-center mb-12">
                <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 mb-4">
                  Simple Setup
                </span>
                <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                  Up and Running in 48 Hours
                </h2>
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                {[
                  {
                    step: '1',
                    title: 'Connect Your Line',
                    description: 'We set up call forwarding behind your existing business number. Nothing changes for your customers.'
                  },
                  {
                    step: '2',
                    title: 'We Catch Missed Calls',
                    description: 'Every unanswered call triggers an instant SMS from your number: "Sorry we missed you, how can we help?"'
                  },
                  {
                    step: '3',
                    title: 'Book More Jobs',
                    description: 'Leads respond via text. You see everything in one inbox and close more business.'
                  }
                ].map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-500 text-xl font-bold text-white shadow-lg shadow-amber-500/30">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        {testimonial && (
          <section className="bg-slate-900 py-16 sm:py-20">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <svg className="mx-auto h-12 w-12 text-amber-500 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-xl sm:text-2xl font-medium text-white leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-6">
                  <p className="font-bold text-amber-400">{testimonial.name}</p>
                  <p className="text-slate-400">{testimonial.company} • {testimonial.location}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="bg-[#FFFDF8] py-16 sm:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="text-center mb-12">
                <span className="inline-block rounded-full bg-slate-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-600 mb-4">
                  FAQ
                </span>
                <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                  Common Questions from {industryPlural}
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details 
                    key={index} 
                    className="group rounded-2xl border border-slate-200 bg-white"
                  >
                    <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-slate-900">
                      {faq.question}
                      <svg 
                        className="h-5 w-5 text-slate-400 transition group-open:rotate-180" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-5 pb-5 text-slate-600">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA + CONTACT FORM */}
        <section id="contact" className="bg-slate-900 py-16 sm:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Ready to Capture Every {industry} Lead?
                  </h2>
                  <p className="mt-4 text-lg text-slate-300">
                    Get a free quote and see exactly how much revenue you&apos;re leaving on the table.
                  </p>
                  
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-3 text-slate-300">
                      <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>No contracts, cancel anytime</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Setup in 48 hours or less</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Keep your existing phone number</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6 sm:p-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="container mx-auto flex flex-col items-start justify-between gap-4 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>© 2025 ForgedLocal. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/" className="hover:text-slate-800">Home</Link>
            <Link href="/how-it-works" className="hover:text-slate-800">How it works</Link>
            <Link href="/#pricing" className="hover:text-slate-800">Pricing</Link>
            <Link href="/#contact" className="hover:text-slate-800">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

