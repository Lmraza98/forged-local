// app/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'

// Lazy load below-fold components for better LCP
const ContactForm = dynamic(() => import('@/components/ContactForm').then(mod => ({ default: mod.ContactForm })))
const TrustSignals = dynamic(() => import('@/components/TrustSignals').then(mod => ({ default: mod.TrustSignals })))
const FloatingCTA = dynamic(() => import('@/components/FloatingCTA').then(mod => ({ default: mod.FloatingCTA })))
const ExitIntentPopup = dynamic(() => import('@/components/ExitIntentPopup').then(mod => ({ default: mod.ExitIntentPopup })))
const ROICalculator = dynamic(() => import('@/components/ROICalculator').then(mod => ({ default: mod.ROICalculator })))
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

const industries = [
  { name: 'HVAC', href: '/hvac-answering-service', stat: '$800', desc: 'avg repair' },
  { name: 'Plumbing', href: '/plumber-answering-service', stat: '$650', desc: 'avg job' },
  { name: 'Roofing', href: '/roofing-answering-service', stat: '$8,500', desc: 'avg replacement' },
  { name: 'Electrical', href: '/electrician-answering-service', stat: '$1,200', desc: 'avg job' },
  { name: 'Landscaping', href: '/landscaping-answering-service', stat: '$2,400', desc: 'avg project' },
]

const testimonials = [
  {
    quote: 'We were losing 5-6 calls a week. Now those turn into booked jobs. ForgedLocal paid for itself the first week.',
    name: 'Mike R.',
    title: 'HVAC Contractor',
    location: 'Nashua, NH'
  },
  {
    quote: 'A customer texted back "basement flooding" while I was on another job. That was a $2,400 emergency repair I would have lost.',
    name: 'Dave T.',
    title: 'Plumber',
    location: 'Manchester, NH'
  },
  {
    quote: 'After a hailstorm, I was getting 40+ calls a day. ForgedLocal texted back everyone I missed. Extra $45,000 that week.',
    name: 'Chris M.',
    title: 'Roofing Contractor',
    location: 'Salem, NH'
  }
]

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
        {/* STICKY HEADER */}
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

            <div className="hidden items-center gap-6 md:flex">
              <Link href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">
                How It Works
              </Link>
              <Link href="#calculator" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">
                Calculator
              </Link>
              <Link href="#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">
                Pricing
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="#contact"
                className="hidden sm:inline-flex items-center rounded-full border-2 border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-amber-500 hover:text-amber-600"
              >
                Get Quote
              </Link>
              <a
                href="https://calendly.com/YOUR_CALENDLY_URL"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-amber-700 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-amber-700/25 transition hover:bg-amber-800 hover:shadow-amber-700/40 hover:scale-105"
              >
                <svg className="mr-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Setup Call
              </a>
            </div>
          </nav>
        </header>

        <main className="flex-1">
          {/* HERO */}
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

            <div className="relative container mx-auto px-4 py-20 sm:py-28 lg:py-36 lg:px-8">
              <div className="mx-auto max-w-4xl text-center">
                {/* Live indicator */}
                <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm px-5 py-2.5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-sm font-medium text-slate-300">Serving NH Contractors 24/7</span>
                </div>

                {/* Main headline */}
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                  That missed call?
                  <br />
                  <span className="text-amber-300">It just cost you $800.</span>
                </h1>

                <p className="mt-6 text-lg text-slate-300 sm:text-xl max-w-2xl mx-auto leading-relaxed">
                  When you&apos;re on a job, customers don&apos;t leave voicemails—they call your competitor. 
                  <strong className="text-white"> ForgedLocal texts them back in 60 seconds</strong>, from your number, so you never lose another lead.
                </p>

                {/* Stats */}
                <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl mx-auto">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-amber-300">27%</div>
                    <div className="text-sm text-slate-300 mt-1">Calls Missed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-amber-300">60s</div>
                    <div className="text-sm text-slate-300 mt-1">Auto Text-Back</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-400">5x</div>
                    <div className="text-sm text-slate-300 mt-1">Avg ROI</div>
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/YOUR_CALENDLY_URL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-amber-700 px-8 py-4 text-base font-bold text-white shadow-xl shadow-amber-700/20 transition hover:bg-amber-500 hover:shadow-amber-500/30 hover:scale-105"
                  >
                    <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book 10-Min Setup Call
                  </a>
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full border-2 border-slate-600 px-8 py-4 text-base font-semibold text-slate-300 transition hover:border-white hover:text-white"
                  >
                    Get Free Quote Instead
                  </Link>
                </div>
                
                {/* Trust line */}
                <p className="mt-6 text-sm text-slate-400">
                  No contracts. Cancel anytime. Turn it off instantly by removing call forwarding.
                </p>
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
                  <span key={trade} className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
                    {trade}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* PROBLEM / SOLUTION */}
          <section className="bg-[#FFFDF8] py-20 sm:py-28">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                  {/* Problem */}
                  <div>
                    <span className="inline-block rounded-full bg-red-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-red-700 mb-6">
                      The Problem
                    </span>
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6">
                      85% of callers won&apos;t leave a voicemail
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">
                      They&apos;ll just call the next contractor on Google. By the time you check your missed calls, that $800 AC repair or $2,400 plumbing emergency is someone else&apos;s job.
                    </p>
                    <div className="space-y-4">
                      {[
                        'You\'re under a sink when a $1,500 job calls',
                        'Customer has a burst pipe and can\'t wait',
                        'Storm damage calls flood in faster than you can answer',
                        'After-hours emergencies go straight to voicemail'
                      ].map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold mt-0.5">✗</span>
                          <span className="text-slate-700">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Solution */}
                  <div>
                    <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-6">
                      The Solution
                    </span>
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6">
                      Auto text-back in 60 seconds
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">
                      ForgedLocal texts missed callers from your business number before they dial someone else. They respond via text, you reply when you&apos;re free, and you close the job.
                    </p>
                    <div className="space-y-4">
                      {[
                        'Instant SMS: "Sorry we missed you! How can we help?"',
                        'Customers describe their issue via text',
                        'You respond when you\'re at a stopping point',
                        'More jobs booked, zero extra effort'
                      ].map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white text-xs font-bold mt-0.5">✓</span>
                          <span className="text-slate-700">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section id="how-it-works" className="bg-slate-900 py-20 sm:py-28">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mx-auto max-w-5xl">
                <div className="text-center mb-16">
                  <span className="inline-block rounded-full bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 mb-6">
                    How It Works
                  </span>
                  <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                    Up and running in 48 hours
                  </h2>
                  <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
                    No new phone system. No app to learn. We plug into your existing business line.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      step: '1',
                      title: 'Connect Your Line',
                      description: 'Simple call forwarding from your existing number. Takes 10 minutes. Your number stays the same everywhere.'
                    },
                    {
                      step: '2',
                      title: 'We Catch Missed Calls',
                      description: 'When a call goes unanswered, ForgedLocal sends a text within 60 seconds: "Sorry we missed your call! How can we help?"'
                    },
                    {
                      step: '3',
                      title: 'You Close More Jobs',
                      description: 'Customers reply via text. You see everything in one inbox. Respond when you\'re ready and book the job.'
                    }
                  ].map((item) => (
                    <div key={item.step} className="relative">
                      <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500 text-xl font-bold text-white shadow-lg shadow-amber-500/30">
                        {item.step}
                      </div>
                      <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-8 pt-12 h-full">
                        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                        <p className="text-slate-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* INDUSTRIES */}
          <section id="industries" className="bg-[#FFFDF8] py-20 sm:py-28">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mx-auto max-w-5xl">
                <div className="text-center mb-16">
                  <span className="inline-block rounded-full bg-slate-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-600 mb-6">
                    Industries
                  </span>
                  <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                    Built for contractors who live on the phone
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {industries.map((industry) => (
                    <Link
                      key={industry.name}
                      href={industry.href}
                      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-amber-300 hover:shadow-lg hover:shadow-amber-500/10"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition">
                          {industry.name}
                        </h3>
                        <svg className="h-5 w-5 text-slate-400 group-hover:text-amber-500 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <div className="text-3xl font-bold text-amber-600">{industry.stat}</div>
                      <div className="text-sm text-slate-600">{industry.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section className="bg-slate-900 py-20 sm:py-28">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mx-auto max-w-6xl">
                <div className="text-center mb-16">
                  <span className="inline-block rounded-full bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 mb-6">
                    Results
                  </span>
                  <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Real contractors, real revenue recovered
                  </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, i) => (
                    <div key={i} className="rounded-2xl border border-slate-700 bg-slate-800/50 p-8">
                      <svg className="h-10 w-10 text-amber-500 mb-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <blockquote className="text-lg text-slate-300 mb-6">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                      <div>
                        <p className="font-bold text-white">{testimonial.name}</p>
                        <p className="text-sm text-slate-300">{testimonial.title} • {testimonial.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ROI CALCULATOR */}
          <ROICalculator />

          {/* PRICING */}
          <section id="pricing" className="bg-[#FFFDF8] py-20 sm:py-28">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mx-auto max-w-5xl">
                <div className="text-center mb-12">
                  <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 mb-6">
                    Pricing
                  </span>
                  <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                    Start with a 14-day pilot. No risk.
                  </h2>
                  <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                    Setup fee waived for your pilot. See real results before you commit.
                  </p>
                </div>

                {/* Pilot Offer Banner */}
                <div className="mb-8 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 p-6 text-center text-white">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <div className="flex items-center gap-2">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-bold text-lg">14-Day Pilot:</span>
                    </div>
                    <span className="text-emerald-100">Setup fee waived • Full features • Cancel if not satisfied</span>
                  </div>
                </div>

                {/* Pricing Tiers */}
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Starter */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Starter</h3>
                    <p className="text-sm text-slate-600 mb-4">For solo operators</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-slate-900">$149</span>
                      <span className="text-slate-600">/mo</span>
                    </div>
                    <ul className="space-y-3 mb-6 text-sm">
                      {['Up to 50 calls/month', 'Missed call text-back', 'Basic inbox', 'Email support'].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-600">
                          <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://calendly.com/YOUR_CALENDLY_URL"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full rounded-full border-2 border-slate-200 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-amber-500 hover:text-amber-600"
                    >
                      Start Pilot
                    </a>
                  </div>

                  {/* Growth - Featured */}
                  <div className="rounded-2xl border-2 border-amber-700 bg-white p-6 shadow-xl shadow-amber-700/10 relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-700 px-3 py-1 text-xs font-bold text-white">
                      MOST POPULAR
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Growth</h3>
                    <p className="text-sm text-slate-600 mb-4">For growing teams</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-slate-900">$299</span>
                      <span className="text-slate-600">/mo</span>
                    </div>
                    <ul className="space-y-3 mb-6 text-sm">
                      {['Up to 150 calls/month', 'Everything in Starter', 'Emergency keyword flagging', 'Performance reports', 'Priority support'].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-600">
                          <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://calendly.com/YOUR_CALENDLY_URL"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full rounded-full bg-amber-700 py-3 text-center text-sm font-bold text-white shadow-lg shadow-amber-700/25 transition hover:bg-amber-800"
                    >
                      Start Pilot
                    </a>
                  </div>

                  {/* Scale */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Scale</h3>
                    <p className="text-sm text-slate-600 mb-4">For multi-line operations</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-slate-900">$499</span>
                      <span className="text-slate-600">/mo</span>
                    </div>
                    <ul className="space-y-3 mb-6 text-sm">
                      {['Unlimited calls', 'Everything in Growth', 'Multiple lines/locations', 'Custom integrations', 'Dedicated account manager'].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-600">
                          <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://calendly.com/YOUR_CALENDLY_URL"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full rounded-full border-2 border-slate-200 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-amber-500 hover:text-amber-600"
                    >
                      Start Pilot
                    </a>
                  </div>
                </div>

                {/* Trust line */}
                <p className="mt-8 text-center text-sm text-slate-600">
                  No contracts. No setup fee for pilots. Cancel anytime by removing call forwarding.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-slate-50 py-20 sm:py-28 border-y border-slate-200">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mx-auto max-w-3xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                    Common Questions
                  </h2>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      q: 'Do I need to change my business phone number?',
                      a: 'No. Your number stays the same on your trucks, business cards, and Google listing. We work behind your existing line using simple call forwarding.'
                    },
                    {
                      q: 'What happens when I DO answer a call?',
                      a: 'Nothing! ForgedLocal only activates when a call goes unanswered. If you or your team picks up, everything works exactly as before.'
                    },
                    {
                      q: 'How fast does the auto-text go out?',
                      a: 'Within 60 seconds of a missed call. Speed matters—being first to respond dramatically increases your chances of booking the job.'
                    },
                    {
                      q: 'Can I customize what the text says?',
                      a: 'Absolutely. We work with you to craft a message that fits your brand and business. Many contractors include their name and ask about the specific service needed.'
                    },
                    {
                      q: 'What if I want to turn it off?',
                      a: 'Remove the call forwarding and your phone works exactly as before. No contracts, no penalties.'
                    }
                  ].map((faq, i) => (
                    <details key={i} className="group rounded-2xl border border-slate-200 bg-white">
                      <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-slate-900">
                        {faq.q}
                        <svg className="h-5 w-5 text-slate-400 transition group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-6 pb-6 text-slate-600">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CONTACT / CTA */}
          <section id="contact" className="bg-slate-900 py-20 sm:py-28">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mx-auto max-w-5xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                      Ready to stop losing leads?
                    </h2>
                    <p className="mt-6 text-lg text-slate-300">
                      Get a free quote and see exactly how much revenue you&apos;re leaving on the table. Most contractors are up and running within 48 hours.
                    </p>
                    
                    <div className="mt-10 space-y-5">
                      {[
                        { icon: '⚡', text: 'Setup in 48 hours or less' },
                        { icon: '📱', text: 'Keep your existing phone number' },
                        { icon: '🔄', text: 'No contracts, cancel anytime' },
                        { icon: '📈', text: 'Average 5x ROI for contractors' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 text-slate-300">
                          <span className="text-2xl">{item.icon}</span>
                          <span className="text-lg">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <TrustSignals />
                    <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6 sm:p-8">
                      <h3 className="text-xl font-bold text-white mb-6">Get your free quote</h3>
                      <ContactForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="bg-slate-950 border-t border-slate-800">
          <div className="container mx-auto px-4 py-12 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-lg font-bold text-white">ForgedLocal</span>
                </div>
                <p className="text-slate-300 max-w-sm">
                  Missed call text-back for contractors. Stop losing $5,000+ jobs to voicemail.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-4">Industries</h4>
                <ul className="space-y-2">
                  {industries.map((ind) => (
                    <li key={ind.name}>
                      <Link href={ind.href} className="text-slate-300 hover:text-amber-400 transition">
                        {ind.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><Link href="/how-it-works" className="text-slate-300 hover:text-amber-400 transition">How It Works</Link></li>
                  <li><Link href="#pricing" className="text-slate-300 hover:text-amber-400 transition">Pricing</Link></li>
                  <li><Link href="#contact" className="text-slate-300 hover:text-amber-400 transition">Contact</Link></li>
                  <li><Link href="/terms" className="text-slate-300 hover:text-amber-400 transition">Terms of Service</Link></li>
                  <li><Link href="/privacy" className="text-slate-300 hover:text-amber-400 transition">Privacy Policy</Link></li>
                  <li><Link href="/sms-consent" className="text-slate-300 hover:text-amber-400 transition">SMS Terms</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
              <p>© 2025 ForgedLocal. All rights reserved.</p>
              <div className="flex gap-4">
                <Link href="/terms" className="text-slate-400 hover:text-amber-400 transition">Terms</Link>
                <Link href="/privacy" className="text-slate-400 hover:text-amber-400 transition">Privacy</Link>
                <Link href="/sms-consent" className="text-slate-400 hover:text-amber-400 transition">SMS Terms</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
