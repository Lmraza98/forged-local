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
  name: 'How ForgedLocal Missed Call Text Back Works',
  description: 'A simple 3-step explanation of how ForgedLocal captures missed calls and texts customers back automatically',
  step: [
    {
      '@type': 'HowToStep',
      name: 'A call is missed',
      text: 'A customer calls while you\'re on a job or after hours.'
    },
    {
      '@type': 'HowToStep',
      name: 'ForgedLocal texts back',
      text: 'Within 60 seconds, we send a polite text from a dedicated local number like: "Sorry we missed your call - how can we help?"'
    },
    {
      '@type': 'HowToStep',
      name: 'You book the job',
      text: 'The customer replies with details. You follow up when it works for you.'
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
                  How It Works
                </h1>
                <p className="mt-6 text-lg text-slate-300 sm:text-xl leading-relaxed">
                  When a call is missed or comes in after hours, ForgedLocal automatically texts 
                  the caller from a dedicated local number within 60 seconds.
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FFFDF8] to-transparent" />
          </section>

          {/* THE FLOW - Simple 3 Steps */}
          <section className="bg-[#FFFDF8] py-20 sm:py-28">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mx-auto max-w-5xl">
                <div className="text-center mb-16">
                  <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 mb-4">
                    Simple Process
                  </span>
                  <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                    How it works
                  </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                  {/* Step 1 */}
                  <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500 text-2xl font-bold text-white shadow-lg shadow-amber-500/30">
                      1
                    </div>
                    <div className="mb-3 flex h-14 w-14 mx-auto items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">A call is missed</h3>
                    <p className="text-slate-600">A customer calls while you&apos;re on a job or after hours.</p>
                  </div>

                  {/* Step 2 */}
                  <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500 text-2xl font-bold text-white shadow-lg shadow-amber-500/30">
                      2
                    </div>
                    <div className="mb-3 flex h-14 w-14 mx-auto items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">ForgedLocal texts back</h3>
                    <p className="text-slate-600">Within 60 seconds, we send a polite text from a dedicated local number:</p>
                    <p className="mt-3 text-sm italic text-slate-500 bg-slate-50 rounded-lg px-4 py-2">&quot;Sorry we missed your call - how can we help?&quot;</p>
                  </div>

                  {/* Step 3 */}
                  <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500 text-2xl font-bold text-white shadow-lg shadow-amber-500/30">
                      3
                    </div>
                    <div className="mb-3 flex h-14 w-14 mx-auto items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">You book the job</h3>
                    <p className="text-slate-600">The customer replies with details. You follow up when it works for you.</p>
                  </div>
                </div>

                {/* Pause note */}
                <p className="mt-10 text-center text-sm text-slate-500">
                  You can pause the system or update the reply message anytime.
                </p>
              </div>
            </div>
          </section>

          {/* WHY DEDICATED NUMBER */}
          <section className="bg-slate-900 py-20 sm:py-28">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mx-auto max-w-5xl">
                <div className="text-center mb-16">
                  <span className="inline-block rounded-full bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
                    Why It Works
                  </span>
                  <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Why we use a dedicated texting number
                  </h2>
                  <p className="mt-4 text-lg text-slate-400">
                    Using a separate local number for text replies is actually better for your business.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'Protects Your Primary Line',
                      description: 'We never touch your main business number. No risk of disruption to how you currently operate.'
                    },
                    {
                      title: 'Better Deliverability',
                      description: 'Dedicated numbers follow carrier compliance rules (A2P, 10DLC) so texts actually get delivered.'
                    },
                    {
                      title: 'Easy to Turn Off',
                      description: 'Want to pause or cancel? Just flip a switch. Your main number is completely unaffected.'
                    },
                    {
                      title: 'Custom Reply Message',
                      description: 'Personalized message that sounds like you. Include your business name and ask the right questions.'
                    },
                    {
                      title: '24/7 Coverage',
                      description: 'After-hours calls get the same instant response. Capture emergency jobs while you sleep.'
                    },
                    {
                      title: 'Future Features Ready',
                      description: 'Call logs, analytics, voicemail follow-ups - a dedicated number makes it all possible.'
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

          {/* SIMPLE CONTROLS */}
          <section className="bg-[#FFFDF8] py-16 sm:py-20">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mx-auto max-w-3xl">
                <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-amber-100/50 p-8 sm:p-10 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Simple controls included</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Update reply messages, pause the system, or turn it off anytime. No contracts.
                  </p>
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
                    question="Why is the text sent from a different number?"
                    answer="To ensure reliable delivery and compliance, ForgedLocal uses a dedicated local texting number for replies. Customers still reach you through your main phone number, and you decide how and when to follow up."
                  />
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
                    answer="We customize it with you. A typical message is: 'Sorry we missed your call - how can we help?' Short, friendly, and gets them to respond with details about what they need."
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
