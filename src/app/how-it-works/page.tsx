import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQAccordion } from './faq-accordion'

export const metadata: Metadata = {
  title: 'How ForgedLocal Works | Missed Call Text Back Explained',
  description: 'See exactly how ForgedLocal captures missed calls and texts customers back automatically. Simple setup behind your existing business number. Up and running in 48 hours.',
  openGraph: {
    title: 'How ForgedLocal Works | Auto Text-Back for Contractors',
    description: 'We plug in behind your existing number. When you miss a call, we text them back in 60 seconds. Simple.',
    url: 'https://forgedlocal.com/how-it-works',
  },
  alternates: {
    canonical: 'https://forgedlocal.com/how-it-works',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Set Up Missed Call Text Back with ForgedLocal',
  description: 'A step-by-step guide to setting up automatic text-back for your contractor business',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Connect Your Line',
      text: 'We set up call forwarding from your existing business number to ForgedLocal. Takes about 10 minutes and your customers still dial the same number.'
    },
    {
      '@type': 'HowToStep',
      name: 'Configure Auto-Reply',
      text: 'We work with you to craft the perfect auto-reply message that fits your brand and business.'
    },
    {
      '@type': 'HowToStep',
      name: 'Start Capturing Leads',
      text: 'When calls go unanswered, ForgedLocal texts the customer within 60 seconds. They reply, you respond when ready, and close more jobs.'
    }
  ]
}

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex min-h-screen flex-col bg-[#FFFDF8] text-slate-900">
        {/* HEADER */}
        <header className="sticky top-0 z-50 border-b border-amber-100/80 bg-[#FFFDF8]/95 backdrop-blur-md h-16">
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

            <div className="hidden items-center gap-8 md:flex">
              <Link href="/how-it-works" className="text-sm font-semibold text-amber-600">
                How It Works
              </Link>
              <Link href="/#industries" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">
                Industries
              </Link>
              <Link href="/#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">
                Pricing
              </Link>
            </div>

            <Link
              href="/#contact"
              className="inline-flex items-center rounded-full bg-amber-700 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-amber-700/25 transition hover:bg-amber-800 hover:shadow-amber-700/40"
            >
              Get Free Quote
            </Link>
          </nav>
        </header>

        <main className="flex-1">
          {/* HERO */}
          <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}
            />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl" />

            <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-24 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-4 py-2 mb-6">
                  <svg className="h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm font-medium text-amber-200">Simple Setup, Powerful Results</span>
                </span>

                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  How ForgedLocal Works
                </h1>
                <p className="mt-6 text-lg text-slate-300 sm:text-xl leading-relaxed">
                  We plug in behind your existing phone number. When a call goes unanswered, 
                  we text them back from your number within 60 seconds. That&apos;s it.
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FFFDF8] to-transparent" />
          </section>

          {/* THE FLOW */}
          <section className="bg-[#FFFDF8] py-20 sm:py-28">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mx-auto max-w-5xl">
                <div className="text-center mb-16">
                  <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 mb-4">
                    The Flow
                  </span>
                  <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                    What happens when you miss a call
                  </h2>
                </div>

                <div className="relative">
                  {/* Connection line */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-amber-200 hidden lg:block" />
                  
                  <div className="space-y-8 lg:space-y-0">
                    {[
                      {
                        step: '1',
                        title: 'Customer calls your number',
                        description: 'They dial the same number that\'s on your trucks, business cards, and Google listing. Nothing changes for them.',
                        icon: (
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        )
                      },
                      {
                        step: '2',
                        title: 'Call is forwarded through ForgedLocal',
                        description: 'Your carrier routes calls to our system first. We log the attempt and forward it to your phones instantly.',
                        icon: (
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                          </svg>
                        )
                      },
                      {
                        step: '3',
                        title: 'You\'re busy on a job',
                        description: 'You\'re under a sink, on a roof, or driving to the next site. The call goes unanswered or hits voicemail.',
                        icon: (
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )
                      },
                      {
                        step: '4',
                        title: 'ForgedLocal detects the miss',
                        description: 'Within seconds, our system knows the call wasn\'t answered. We flag it as a missed lead.',
                        icon: (
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                          </svg>
                        )
                      },
                      {
                        step: '5',
                        title: 'Auto text sent in 60 seconds',
                        description: '"Sorry we missed your call! This is [Your Business]. How can we help?" Sent from YOUR number.',
                        icon: (
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        )
                      },
                      {
                        step: '6',
                        title: 'Customer responds',
                        description: 'They text back: "My AC isn\'t cooling" or "Pipe burst in basement." You get the details while finishing your current job.',
                        icon: (
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                          </svg>
                        )
                      },
                      {
                        step: '7',
                        title: 'You close the job',
                        description: 'Reply when you\'re ready, schedule the visit, and book another job you would have lost to a competitor.',
                        icon: (
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )
                      },
                    ].map((item, index) => (
                      <div 
                        key={item.step} 
                        className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                      >
                        <div className={`lg:flex ${index % 2 === 1 ? 'lg:justify-start lg:order-2' : 'lg:justify-end'}`}>
                          <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:max-w-md">
                            <div className="absolute -top-4 left-6 lg:left-auto lg:-left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-sm font-bold text-white shadow-lg shadow-amber-500/30">
                              {item.step}
                            </div>
                            <div className="flex items-start gap-4 pt-4">
                              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                                {item.icon}
                              </div>
                              <div>
                                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                                <p className="mt-1 text-slate-600">{item.description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`hidden lg:block ${index % 2 === 1 ? 'lg:order-1' : ''}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* WHAT YOU GET */}
          <section className="bg-slate-900 py-20 sm:py-28">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mx-auto max-w-5xl">
                <div className="text-center mb-16">
                  <span className="inline-block rounded-full bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
                    What&apos;s Included
                  </span>
                  <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Everything you need to capture more leads
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'Done-For-You Setup',
                      description: 'We handle call forwarding configuration with your carrier. Takes 10-15 minutes of your time.'
                    },
                    {
                      title: 'Custom Auto-Reply',
                      description: 'Personalized message that sounds like you. Include your business name and ask the right questions.'
                    },
                    {
                      title: 'Unified Inbox',
                      description: 'All calls, texts, and voicemails in one place. Never lose track of a lead again.'
                    },
                    {
                      title: 'Emergency Flagging',
                      description: 'Keywords like "flooding" or "no heat" get priority alerts so you can respond to urgent calls first.'
                    },
                    {
                      title: '24/7 Coverage',
                      description: 'After-hours calls get the same instant response. Capture emergency jobs while you sleep.'
                    },
                    {
                      title: 'Performance Reports',
                      description: 'See how many calls you\'re missing, recovering, and converting to jobs. Know your ROI.'
                    }
                  ].map((feature, i) => (
                    <div key={i} className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 mb-4">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-slate-400">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-[#FFFDF8] py-20 sm:py-28">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mx-auto max-w-3xl">
                <div className="text-center mb-12">
                  <span className="inline-block rounded-full bg-slate-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-600 mb-4">
                    FAQ
                  </span>
                  <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                    Common Questions
                  </h2>
                </div>

                <div className="space-y-3">
                  <FAQAccordion
                    question="Do I have to change my business phone number?"
                    answer="No. Your number stays exactly the same. We set up call forwarding behind the scenes—customers still dial the number on your trucks, business cards, and Google listing."
                  />
                  <FAQAccordion
                    question="Is this a phone system replacement?"
                    answer="No. ForgedLocal works alongside your existing phones. When calls come in, your phones still ring normally. We only activate when a call goes unanswered."
                  />
                  <FAQAccordion
                    question="What happens to my existing voicemail?"
                    answer="You can keep your current voicemail setup. ForgedLocal works alongside it—the auto-text goes out whether or not the customer leaves a voicemail."
                  />
                  <FAQAccordion
                    question="How long does setup take?"
                    answer="Most contractors are up and running within 48 hours. The actual setup call takes about 15 minutes of your time—we handle everything else."
                  />
                  <FAQAccordion
                    question="Can I turn it off if I don't like it?"
                    answer="Yes. Simply remove the call forwarding and your phone works exactly as before. No contracts, no penalties, no hassle."
                  />
                  <FAQAccordion
                    question="What does the auto-reply text say?"
                    answer="We customize it with you. A typical message is: 'Hi, this is [Your Business]. Sorry we missed your call! What can we help you with?' Short, friendly, and gets them to respond."
                  />
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-slate-900 py-20 sm:py-28">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Ready to capture more leads?
                </h2>
                <p className="mt-4 text-lg text-slate-300">
                  Get a free quote and see how much revenue you&apos;re leaving on the table.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full bg-amber-700 px-8 py-4 text-base font-bold text-white shadow-lg shadow-amber-700/30 transition hover:bg-amber-800 hover:shadow-amber-700/40"
                  >
                    Get Your Free Quote
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                <p className="mt-6 text-sm text-slate-300">
                  Setup in 48 hours • No contracts • Keep your number
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="bg-slate-950 border-t border-slate-800">
          <div className="container mx-auto px-4 py-8 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-slate-500">© 2025 ForgedLocal. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="/" className="text-sm text-slate-400 hover:text-amber-400 transition">Home</Link>
                <Link href="/how-it-works" className="text-sm text-slate-400 hover:text-amber-400 transition">How it works</Link>
                <Link href="/#pricing" className="text-sm text-slate-400 hover:text-amber-400 transition">Pricing</Link>
                <Link href="/#contact" className="text-sm text-slate-400 hover:text-amber-400 transition">Contact</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
