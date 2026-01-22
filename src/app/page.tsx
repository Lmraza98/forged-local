// app/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'

// Lazy load below-fold components for better LCP
const QuickQuoteForm = dynamic(() => import('@/components/QuickQuoteForm').then(mod => ({ default: mod.QuickQuoteForm })))
const FloatingCTA = dynamic(() => import('@/components/FloatingCTA').then(mod => ({ default: mod.FloatingCTA })))
const ExitIntentPopup = dynamic(() => import('@/components/ExitIntentPopup').then(mod => ({ default: mod.ExitIntentPopup })))
const MobileCallButton = dynamic(() => import('@/components/MobileCallButton').then(mod => ({ default: mod.MobileCallButton })))

export const metadata: Metadata = {
  title: 'ForgedLocal | Missed Call Text Back for Contractors | NH',
  description: 'Stop losing $5,000+ jobs to missed calls. ForgedLocal automatically texts back customers within 60 seconds when you can\'t answer. Trusted by HVAC, plumbing, roofing & electrical contractors in New Hampshire.',
  keywords: 'missed call text back, contractor answering service, HVAC answering service, plumber answering service, New Hampshire contractors, lead capture',
  openGraph: {
    title: 'ForgedLocal | Stop Losing Jobs to Missed Calls',
    description: 'Automatically text back customers within 60 seconds. HVAC, plumbing, roofing & electrical contractors in NH trust ForgedLocal to capture every lead.',
    url: 'https://forgedlocal.com',
    siteName: 'ForgedLocal',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ForgedLocal | Missed Call Text Back for Contractors',
    description: 'Stop losing $5,000+ jobs to voicemail. Auto text-back in 60 seconds.',
  },
  alternates: {
    canonical: 'https://forgedlocal.com',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ForgedLocal',
  url: 'https://forgedlocal.com',
  description: 'Missed call text-back service for contractors and home service businesses. Automatically respond to missed calls within 60 seconds.',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'NH',
    addressCountry: 'US'
  },
  areaServed: {
    '@type': 'State',
    name: 'New Hampshire'
  },
  priceRange: '$$',
  serviceType: 'Answering Service'
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is missed call text back?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Missed call text back automatically sends an SMS to customers who call your business when you can\'t answer. ForgedLocal sends this text within 60 seconds, from your business number, so customers feel like you responded personally.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much do contractors lose from missed calls?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Studies show 23-35% of calls to service businesses go unanswered. For contractors with average job values of $500-2,000+, that can mean $5,000-25,000+ in lost revenue per month.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do I need to change my business phone number?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. ForgedLocal works behind your existing business number. Customers still call the same number on your trucks, cards, and Google listing.'
      }
    }
  ]
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Conversion Components */}
      <FloatingCTA />
      <ExitIntentPopup />
      <MobileCallButton />

      <div className="flex min-h-screen flex-col bg-[#FFFDF8] text-slate-900">
        {/* SIMPLIFIED HEADER */}
        <header className="sticky top-0 z-50 border-b border-amber-100/80 bg-[#FFFDF8]/95 backdrop-blur-md">
          <nav className="container mx-auto flex items-center justify-between px-4 h-16 lg:px-8">
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
              href="#get-quote"
              className="inline-flex items-center rounded-full bg-amber-500 px-5 py-2.5 text-sm font-bold text-slate-900 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400 hover:shadow-amber-500/30 hover:scale-105"
            >
              Get Free Quote
            </Link>
          </nav>
        </header>

        <main className="flex-1">
          {/* HERO + FORM SECTION */}
          <section className="relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
            
            {/* Grid pattern */}
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}
            />

            {/* Radial glow */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/[0.07] rounded-full blur-3xl" />

            <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-24 lg:px-8">
              <div className="mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Hero Content */}
                  <div className="text-center lg:text-left">
                    {/* Main headline */}
                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                      Missed calls cost you jobs.
                      <br />
                      <span className="text-amber-300">We text back in 60 seconds.</span>
                    </h1>

                    {/* Body copy */}
                    <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                      When you miss a call or it comes in after hours, ForgedLocal automatically sends a follow-up text so you don&apos;t lose the job.
                    </p>

                    {/* Bullets */}
                    <div className="mt-6 space-y-2.5">
                      {[
                        'Replies in under 60 seconds',
                        'Captures name and job details',
                        'No contracts. Turn it off anytime'
                      ].map((point, i) => (
                        <div key={i} className="flex items-center gap-3 justify-center lg:justify-start">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-slate-200 text-sm">{point}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTAs */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                      <Link
                        href="#how-it-works"
                        className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-slate-900 shadow-lg shadow-amber-500/25 transition hover:bg-amber-400"
                      >
                        See how it works
                      </Link>
                      <Link
                        href="#get-quote"
                        className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-800/50 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-amber-400 hover:text-amber-300"
                      >
                        Get a free quote
                      </Link>
                    </div>
                  </div>

                  {/* Quick Quote Form */}
                  <div id="get-quote" className="scroll-mt-20">
                    <div className="rounded-2xl border border-slate-700 bg-slate-800/80 backdrop-blur-sm p-6 sm:p-8 shadow-2xl">
                      <h2 className="text-xl font-bold text-white mb-2">Get your free quote</h2>
                      <p className="text-sm text-slate-400 mb-6">See how many jobs you&apos;re missing</p>
                      <QuickQuoteForm variant="dark" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FFFDF8] to-transparent" />
          </section>

          {/* SOCIAL PROOF BAR */}
          <section className="bg-[#FFFDF8] py-8 border-b border-amber-100">
            <div className="container mx-auto px-4">
              <p className="text-center text-sm font-medium text-slate-600 mb-4">
                Trusted by contractors across New Hampshire
              </p>
              <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                {['HVAC', 'Plumbing', 'Roofing', 'Electrical', 'Landscaping'].map((trade) => (
                  <span key={trade} className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    {trade}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* HOW IT WORKS - SIMPLIFIED */}
          <section id="how-it-works" className="bg-[#FFFDF8] py-20 sm:py-24 scroll-mt-16">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mx-auto max-w-4xl">
                <div className="text-center mb-14">
                  <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                    How it works
                  </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                  {[
                    {
                      step: '1',
                      title: 'Missed call comes in',
                      description: 'A customer calls while you\'re on a job. No one answers.'
                    },
                    {
                      step: '2',
                      title: 'ForgedLocal texts back',
                      description: 'Within 60 seconds, we send a text: "Sorry we missed you - how can we help?"'
                    },
                    {
                      step: '3',
                      title: 'You book the job',
                      description: 'Customer replies with details. You follow up when ready.'
                    }
                  ].map((item) => (
                    <div key={item.step} className="text-center">
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-500 text-2xl font-bold text-white shadow-lg shadow-amber-500/30">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SINGLE TESTIMONIAL */}
          <section className="bg-slate-900 py-16 sm:py-20">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <svg className="mx-auto h-10 w-10 text-amber-500 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-xl text-slate-200 mb-6 leading-relaxed">
                  &ldquo;We were losing 5-6 calls a week. Now those turn into booked jobs. ForgedLocal paid for itself the first week.&rdquo;
                </blockquote>
                <div>
                  <p className="font-bold text-white">Mike R.</p>
                  <p className="text-sm text-slate-400">HVAC Contractor • Nashua, NH</p>
                </div>
              </div>
            </div>
          </section>

          {/* SIMPLE PRICING REASSURANCE */}
          <section className="bg-[#FFFDF8] py-20 sm:py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6">
                  Simple pricing
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Start with a 14-day pilot. After setup, we confirm call volume and quote a simple monthly plan. No contracts. Cancel anytime.
                </p>
                <Link
                  href="#get-quote"
                  className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-4 text-base font-bold text-slate-900 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400 hover:shadow-amber-500/30 hover:scale-105"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ - SHORTENED */}
          <section className="bg-slate-50 py-16 sm:py-20 border-y border-slate-200">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mx-auto max-w-3xl">
                <div className="text-center mb-10">
                  <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    Common questions
                  </h2>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      q: 'Do I need to change my business phone number?',
                      a: 'No. Your number stays the same on your trucks, business cards, and Google listing. We work behind your existing line.'
                    },
                    {
                      q: 'What happens when I DO answer a call?',
                      a: 'Nothing! ForgedLocal only activates when a call goes unanswered.'
                    },
                    {
                      q: 'What if I want to turn it off?',
                      a: 'Remove the call forwarding and your phone works exactly as before. No contracts, no penalties.'
                    }
                  ].map((faq, i) => (
                    <details key={i} className="group rounded-2xl border border-slate-200 bg-white">
                      <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-slate-900">
                        {faq.q}
                        <svg className="h-5 w-5 text-slate-400 transition group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-5 pb-5 text-slate-600">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section id="contact" className="bg-slate-900 py-20 sm:py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
                  Ready to stop losing leads?
                </h2>
                <p className="text-lg text-slate-300 mb-10">
                  Get a free quote and see how many jobs you could be capturing.
                </p>
                
                <div className="rounded-2xl border border-slate-700 bg-slate-800/80 backdrop-blur-sm p-6 sm:p-8 max-w-md mx-auto">
                  <QuickQuoteForm variant="dark" />
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER - SIMPLIFIED */}
        <footer className="bg-slate-950 border-t border-slate-800">
          <div className="container mx-auto px-4 py-10 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-white">ForgedLocal</span>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
                <Link href="/terms" className="hover:text-amber-400 transition">Terms</Link>
                <Link href="/privacy" className="hover:text-amber-400 transition">Privacy</Link>
                <Link href="/sms-consent" className="hover:text-amber-400 transition">SMS Terms</Link>
              </div>
              
              <p className="text-sm text-slate-500">© 2025 ForgedLocal</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
