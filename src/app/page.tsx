// app/page.tsx
import { ContactForm } from '@/components/ContactForm';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ForgedLocal',
  url: 'https://forgedlocal.com',
  description:
    'ForgedLocal helps local service businesses capture every call and web lead with practical automation and AI-powered follow-up.',
};

export default function HomePage() {
  return (
    <>
      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
        {/* HEADER */}
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur h-16">
          <nav className="container mx-auto flex items-center justify-between px-4 h-full lg:px-8">
            <Link href="/" className="flex items-center">
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
            </Link>

            <div className="hidden items-center gap-6 text-xs font-medium text-slate-600 md:flex sm:text-sm">
              <Link href="/how-it-works" className="hover:text-slate-900">
                How it works
              </Link>
              <Link href="#who-we-serve" className="hover:text-slate-900">
                Who it&apos;s for
              </Link>
              <Link href="#pricing" className="hover:text-slate-900">
                Pricing
              </Link>
              <Link href="#contact" className="hover:text-slate-900">
                Contact
              </Link>
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center rounded-full bg-amber-400 px-4 py-2 text-xs font-semibold text-slate-900 shadow-sm transition hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:text-sm"
            >
              Book a quick intro call
            </Link>
          </nav>
        </header>

        <main className="flex-1">
          {/* HERO SECTION MOVED TO CLIENT COMPONENT */}
          <HeroSection />

          {/* HOW IT WORKS – visual timeline, short text */}
          <section
            id="how-it-works"
            className="border-t border-slate-200/60 bg-white"
          >
            <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
              <h2 className="mb-4 text-center text-xl font-semibold tracking-tight sm:text-2xl">
                How ForgedLocal works behind your existing number
              </h2>
              <p className="mb-6 text-center text-sm text-slate-600 sm:text-base">
                Three parts working together so fewer calls slip through the cracks.
              </p>

              <div className="space-y-4 rounded-2xl bg-slate-900 p-5 text-slate-50 sm:flex sm:space-y-0 sm:space-x-6 sm:p-6">
                {/* Overview */}
                <div className="space-y-3 sm:max-w-[220px]">
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wide text-slate-200">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    3-part call system
                  </span>
                  <p className="text-sm text-slate-200">
                    Phone, capture, and follow-up work together so more missed calls turn into booked jobs.
                  </p>
                </div>

                {/* Steps timeline */}
                <ol className="flex-1 space-y-4 sm:flex sm:items-start sm:gap-6 sm:space-y-0">
                  {/* STEP 1 */}
                  <li className="flex flex-1 flex-col gap-3 rounded-2xl bg-slate-800/60 p-4">
                    <div className="flex items-center gap-2">
                      {/* Plug icon */}
                      <svg
                        className="h-5 w-5 text-amber-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22v-5M9 8V2M15 8V2M6 12h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z" />
                      </svg>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-300 text-xs font-semibold text-slate-950">
                        1
                      </span>
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold text-slate-50">Connect your line</p>
                      <p className="mt-1 text-xs text-slate-300">
                        We plug your existing number into a call and text system. Customers still dial the same digits.
                      </p>
                    </div>
                  </li>

                  {/* STEP 2 */}
                  <li className="flex flex-1 flex-col gap-3 rounded-2xl bg-slate-800/60 p-4">
                    <div className="flex items-center gap-2">
                      {/* Inbox icon */}
                      <svg
                        className="h-5 w-5 text-amber-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-300 text-xs font-semibold text-slate-950">
                        2
                      </span>
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold text-slate-50">Capture every attempt</p>
                      <p className="mt-1 text-xs text-slate-300">
                        Calls, voicemails, and website forms land in one inbox with clear missed-call alerts.
                      </p>
                    </div>
                  </li>

                  {/* STEP 3 */}
                  <li className="flex flex-1 flex-col gap-3 rounded-2xl bg-slate-800/60 p-4">
                    <div className="flex items-center gap-2">
                      {/* Chart/checkmark icon */}
                      <svg
                        className="h-5 w-5 text-amber-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-300 text-xs font-semibold text-slate-950">
                        3
                      </span>
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold text-slate-50">Follow up and track</p>
                      <p className="mt-1 text-xs text-slate-300">
                        Fast replies, reminders, and light reporting so more calls turn into booked jobs instead of lost revenue.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </section>


          {/* WHO WE SERVE – two cards, minimal copy */}
          <section
            id="who-we-serve"
            className="border-t border-slate-200/60 bg-white relative overflow-hidden"
          >
            {/* New England map outline - faint background on larger screens */}
            <div
              className="pointer-events-none absolute inset-0 hidden opacity-[0.03] sm:block"
              aria-hidden="true"
            >
              <svg
                className="h-full w-full"
                viewBox="0 0 400 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Simplified New England outline */}
                <path
                  d="M50 50 L150 30 L250 40 L320 60 L350 100 L340 150 L300 200 L200 220 L100 200 L40 150 Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-slate-900"
                />
              </svg>
            </div>
            <div className="relative mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  Who ForgedLocal is for
                </h2>
                <p className="mb-6 rounded-xl px-4 py-4 text-sm text-slate-600 sm:rounded-none sm:px-0 sm:py-0 sm:text-base">
                  We focus on contractors and home service teams in Southern New Hampshire with a real business line and steady call volume.
                </p>
                <div className="flex justify-center">
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wide text-slate-700">
                    {/* simple "pin" icon */}
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 21s7-5.1 7-11a7 7 0 0 0-14 0c0 5.9 7 11 7 11z" />
                      <circle cx="12" cy="10" r="2.6" />
                    </svg>
                    New England service businesses first
                  </span>
                </div>
              </div>

              <div className="mx-auto mt-8 max-w-md">
                {/* GREAT FIT */}
                <div className="space-y-3 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-slate-800 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber-800">
                    Great fit for
                  </p>

                  <ul className="space-y-2 text-amber-900/90">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-700" />
                      <span>HVAC, roofing, landscaping, plumbing, electrical, and similar shops.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-700" />
                      <span>Office number already in use (not just a personal cell).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-700" />
                      <span>Staff who answer calls, book jobs, and manage the schedule.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-700" />
                      <span>Missed calls or web forms that sometimes fall through the cracks.</span>
                    </li>
                  </ul>

                  <p className="mt-2 text-xs text-amber-900/80">
                    You keep the number on your trucks, cards, and website. We add the system behind it.
                  </p>
                </div>

                {/* NOT A FIT */}
                <div className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-slate-500">
                  <svg
                    className="h-4 w-4 text-slate-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <span>Not a fit if you only take a few calls a month or run everything from a personal cell phone.</span>
                </div>
              </div>
            </div>
          </section>


          {/* PRICING – single card */}
          <section
            id="pricing"
            className="border-t border-slate-200/60 bg-white"
          >
            <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
              <h2 className="mb-3 text-center text-xl font-semibold tracking-tight sm:text-2xl">
                Simple engagement, clear pricing
              </h2>
              <p className="mb-6 text-center text-sm text-slate-600 sm:text-base">
                No generic SaaS seat pricing. We scope around your numbers.
              </p>

              <div className="mx-auto max-w-md rounded-2xl border border-amber-100 bg-amber-50 p-5 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-amber-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <p className="text-sm font-semibold text-slate-900">
                    Done-for-you system setup
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-600" />
                    <span>Done-for-you setup and call-flow design.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-600" />
                    <span>Connection to your existing number or VoIP where possible.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-600" />
                    <span>Ongoing tuning as we see how leads behave.</span>
                  </li>
                </ul>
                <p className="mt-3 text-sm text-slate-700">
                  On our intro call we estimate average job value, realistic missed leads, and potential extra revenue.
                  Pricing stays well below the recovered amount.
                </p>
                <p className="mt-3 text-[0.75rem] text-slate-500">
                  Most clients start with a one-time setup plus a simple monthly service, no long contracts.
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex w-full justify-center rounded-full bg-amber-400 px-4 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-amber-300"
                >
                  Book a quick intro call
                </a>
              </div>
            </div>
          </section>

          {/* CONTACT – tightened form */}
          <section
            id="contact"
            className="border-t border-slate-200/60 bg-white"
          >
            <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
              <h2 className="mb-3 text-center text-xl font-semibold tracking-tight sm:text-2xl">
                Start a conversation
              </h2>
              <p className="mb-6 text-center text-sm text-slate-600 sm:text-base">
                Share a few details. We will reply with a time for a quick, no-pressure intro call.
              </p>

              <ContactForm />
            </div>
          </section>

          {/* TRUST SECTION */}
          <section className="border-t border-slate-200/60 bg-[#F7F8FC]">
            <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
              <p className="mx-auto max-w-2xl text-center text-sm text-slate-600">
                Built for New England contractors who live on the phone - not software companies.
              </p>
            </div>
          </section>
        </main>

        <footer className="border-t border-slate-200 bg-white">
          <div className="container mx-auto flex flex-col items-start justify-between gap-4 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:px-6 lg:px-8">
            <p>© 2025 ForgedLocal. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/how-it-works" className="hover:text-slate-800">
                How it works
              </Link>
              <Link href="#who-we-serve" className="hover:text-slate-800">
                Who it&apos;s for
              </Link>
              <Link href="#pricing" className="hover:text-slate-800">
                Pricing
              </Link>
              <Link href="#contact" className="hover:text-slate-800">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
