// app/page.tsx

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ForgedLocal',
  url: 'https://forgedlocal.com',
  description:
    'ForgedLocal helps local service businesses capture every call and web lead with practical automation and AI-powered follow-up.',
};

// Simple inline icons – no extra libraries needed
function IconPhone() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.37 1.7.72 2.49a2 2 0 0 1-.45 2.18L8.5 9.5a15.24 15.24 0 0 0 6 6l1.11-1.33a2 2 0 0 1 2.18-.45c.79.35 1.63.6 2.49.72A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconSparkles() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l1.4 3.7L17 8.1l-3.6 1.4L12 13l-1.4-3.5L7 8.1l3.6-1.4L12 3z" />
      <path d="M5 16l.7 1.8L8 18.5l-1.7.7L5 21l-.7-1.8L2.5 18.5l1.8-.7L5 16z" />
      <path d="M19 14l.9 2.2L22 17l-2.1.8L19 20l-.9-2.2L16 17l2.1-.8L19 14z" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" y1="19" x2="20" y2="19" />
      <rect x="6" y="12" width="2.5" height="5" />
      <rect x="10.5" y="9" width="2.5" height="8" />
      <rect x="15" y="6" width="2.5" height="11" />
    </svg>
  );
}

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
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
          <nav className="container mx-auto flex items-center justify-between px-4 py-3 sm:py-4 lg:px-8">
            <a href="/" className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-xs font-semibold text-amber-300 ring-1 ring-amber-400/70">
                FL
              </span>
              <span className="text-sm font-semibold tracking-tight sm:text-base">
                ForgedLocal
              </span>
            </a>

            <div className="hidden items-center gap-6 text-xs font-medium text-slate-600 md:flex sm:text-sm">
              <a href="#how-it-works" className="hover:text-slate-900">
                How it works
              </a>
              <a href="#who-we-serve" className="hover:text-slate-900">
                Who it&apos;s for
              </a>
              <a href="#pricing" className="hover:text-slate-900">
                Pricing
              </a>
              <a href="#contact" className="hover:text-slate-900">
                Contact
              </a>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-amber-400 px-4 py-2 text-xs font-semibold text-slate-900 shadow-sm transition hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:text-sm"
            >
              Book a quick call
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
            {/* Base gradient */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
              aria-hidden="true"
            />

            {/* New England outline in the background */}
            <div
              className="pointer-events-none absolute -right-40 -top-24 h-[420px] w-[420px] opacity-[0.14] mix-blend-screen"
              aria-hidden="true"
            >
              {/* <Image
                src="/new-england-outline.svg" // put your SVG here
                alt=""
                fill
                className="object-contain drop-shadow-[0_0_30px_rgba(250,204,21,0.35)]"
              /> */}
            </div>

            <div className="relative container mx-auto px-4 py-14 sm:px-6 sm:py-18 lg:flex lg:items-center lg:gap-16 lg:px-8 lg:py-20">
              {/* LEFT COLUMN */}
              <div className="max-w-xl space-y-6 lg:max-w-lg">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-amber-300 sm:text-xs">
                  Practical AI for local service businesses
                </p>

                <h1
                  id="hero-heading"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
                >
                  Stop losing local leads to missed calls.
                </h1>

                <p className="max-w-md text-sm text-slate-200 sm:text-base">
                  ForgedLocal sits behind your existing business line so every call,
                  voicemail, and web lead is captured and followed up - without changing
                  the number on your trucks.
                </p>

                {/* Feature chips */}
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="flex items-start gap-2 rounded-2xl bg-slate-900/80 px-3 py-3">
                    <span className="mt-0.5 rounded-full bg-slate-800 p-2 text-amber-300">
                      {/* phone icon */}
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.37 1.7.72 2.49a2 2 0 0 1-.45 2.18L8.5 9.5a15.24 15.24 0 0 0 6 6l1.11-1.33a2 2 0 0 1 2.18-.45c.79.35 1.63.6 2.49.72A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </span>
                    <div className="text-xs">
                      <p className="font-semibold text-slate-50">Capture every call</p>
                      <p className="mt-1 text-slate-300">Missed calls & forms log automatically.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 rounded-2xl bg-slate-900/80 px-3 py-3">
                    <span className="mt-0.5 rounded-full bg-slate-800 p-2 text-amber-300">
                      {/* sparkles icon */}
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 3l1.4 3.7L17 8.1l-3.6 1.4L12 13l-1.4-3.5L7 8.1l3.6-1.4L12 3z" />
                        <path d="M5 16l.7 1.8L8 18.5l-1.7.7L5 21l-.7-1.8L2.5 18.5l1.8-.7L5 16z" />
                        <path d="M19 14l.9 2.2L22 17l-2.1.8L19 20l-.9-2.2L16 17l2.1-.8L19 14z" />
                      </svg>
                    </span>
                    <div className="text-xs">
                      <p className="font-semibold text-slate-50">Fast follow-up</p>
                      <p className="mt-1 text-slate-300">Text back missed calls in minutes.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 rounded-2xl bg-slate-900/80 px-3 py-3">
                    <span className="mt-0.5 rounded-full bg-slate-800 p-2 text-amber-300">
                      {/* chart icon */}
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="4" y1="19" x2="20" y2="19" />
                        <rect x="6" y="12" width="2.5" height="5" />
                        <rect x="10.5" y="9" width="2.5" height="8" />
                        <rect x="15" y="6" width="2.5" height="11" />
                      </svg>
                    </span>
                    <div className="text-xs">
                      <p className="font-semibold text-slate-50">See the impact</p>
                      <p className="mt-1 text-slate-300">Track recovered jobs & revenue.</p>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    Schedule a 15-minute intro
                  </a>
                  <a
                    href="#how-it-works"
                    className="inline-flex items-center justify-center rounded-full border border-slate-600 px-5 py-2.5 text-sm font-medium text-slate-50 transition hover:border-amber-300 hover:text-amber-200"
                  >
                    See how it works
                  </a>
                </div>
              </div>

              {/* RIGHT COLUMN – your “Today” mock card */}
              <div className="mt-10 w-full max-w-md lg:mt-0 lg:flex-1">
                <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4 shadow-xl">
                  <div className="mb-3 flex items-center justify-between text-xs text-slate-300">
                    <span>Today</span>
                    <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[0.7rem] text-emerald-300">
                      3 missed calls
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between rounded-2xl bg-slate-950/80 px-3 py-2.5">
                      <div>
                        <p className="font-semibold text-slate-50">New lead - web form</p>
                        <p className="text-[0.7rem] text-slate-400">
                          &quot;AC not working upstairs&quot;
                        </p>
                      </div>
                      <span className="rounded-full bg-amber-400/20 px-2.5 py-1 text-[0.7rem] text-amber-200">
                        Reply ready
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-2xl bg-slate-950/70 px-3 py-2.5">
                      <div>
                        <p className="font-semibold text-slate-50">Missed call - 9:12 am</p>
                        <p className="text-[0.7rem] text-slate-400">Text follow-up sent</p>
                      </div>
                      <button className="rounded-full bg-slate-800 px-3 py-1 text-[0.7rem] text-slate-100">
                        Call back
                      </button>
                    </div>

                    <div className="flex items-center justify-between rounded-2xl bg-slate-950/70 px-3 py-2.5">
                      <div>
                        <p className="font-semibold text-slate-50">Missed call - 1:47 pm</p>
                        <p className="text-[0.7rem] text-slate-400">Waiting for reply</p>
                      </div>
                      <span className="text-[0.7rem] text-slate-400">3 min ago</span>
                    </div>

                    <div className="rounded-2xl border border-amber-400/60 bg-slate-950/70 px-3 py-2.5 text-[0.7rem] text-slate-200">
                      $750 average job × 2 recovered leads/month ≈{' '}
                      <span className="font-semibold text-amber-300">
                        $1,500 / month
                      </span>{' '}
                      in extra revenue.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* HOW IT WORKS – visual timeline, short text */}
          <section
            id="how-it-works"
            className="border-b border-slate-200 bg-slate-50"
          >
            <div className="container mx-auto px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  How ForgedLocal works
                </h2>
                <p className="mt-3 text-sm text-slate-600">
                  Three steps. You keep your public number; we upgrade what happens behind it.
                </p>
              </div>

              {/* Dark timeline card on light background */}
              <div className="mt-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 p-[1px]">
                <div className="flex flex-col gap-8 rounded-[1.7rem] bg-slate-950 px-6 py-7 text-slate-50 sm:px-8 sm:py-8 md:flex-row md:items-center md:gap-10">
                  {/* Overview */}
                  <div className="max-w-sm space-y-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wide text-slate-300 ring-1 ring-slate-700">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      3-part call & lead system
                    </span>
                    <p className="text-sm text-slate-200">
                      Phone, capture, and follow-up work together so missed calls turn into booked jobs instead
                      of lost revenue.
                    </p>
                  </div>

                  {/* Steps timeline */}
                  <ol className="flex-1 space-y-4 md:flex md:items-start md:gap-6 md:space-y-0">
                    {/* STEP 1 */}
                    <li className="relative flex flex-1 gap-3">
                      <div className="mt-0.5 flex flex-col items-center md:items-start">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-300 text-xs font-semibold text-slate-950">
                          1
                        </span>
                        <span className="hidden h-px flex-1 md:block md:w-20 md:bg-slate-700/70" />
                      </div>
                      <div className="text-sm">
                        <p className="font-semibold text-slate-50">Connect your line</p>
                        <p className="mt-1 text-xs text-slate-300">
                          We link your existing business number to a VoIP/call system. Customers still dial the
                          same digits.
                        </p>
                      </div>
                    </li>

                    {/* STEP 2 */}
                    <li className="relative flex flex-1 gap-3">
                      <div className="mt-0.5 flex flex-col items-center md:items-start">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-300 text-xs font-semibold text-slate-950">
                          2
                        </span>
                        <span className="hidden h-px flex-1 md:block md:w-20 md:bg-slate-700/70" />
                      </div>
                      <div className="text-sm">
                        <p className="font-semibold text-slate-50">Capture every lead</p>
                        <p className="mt-1 text-xs text-slate-300">
                          Calls, voicemails, and website forms flow into one simple inbox with clear missed-call
                          alerts.
                        </p>
                      </div>
                    </li>

                    {/* STEP 3 */}
                    <li className="relative flex flex-1 gap-3">
                      <div className="mt-0.5 flex flex-col items-center md:items-start">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-300 text-xs font-semibold text-slate-950">
                          3
                        </span>
                      </div>
                      <div className="text-sm">
                        <p className="font-semibold text-slate-50">Follow up & track</p>
                        <p className="mt-1 text-xs text-slate-300">
                          Quick replies, reminders, and basic reporting so you see extra jobs and monthly
                          revenue gained.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </section>


          {/* WHO WE SERVE – two cards, minimal copy */}
          <section
            id="who-we-serve"
            className="border-b border-slate-200 bg-white"
          >
            <div className="container mx-auto px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
              <div className="max-w-2xl space-y-3">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Who ForgedLocal is for
                </h2>
                <p className="text-sm text-slate-600">
                  We focus on local service contractors with a real business line and a steady flow of calls.
                </p>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wide text-slate-700">
                  {/* simple “pin” icon */}
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

              <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr,0.85fr]">
                {/* GREAT FIT */}
                <div className="flex flex-col gap-4 rounded-3xl border border-amber-200 bg-amber-50 px-6 py-6 sm:px-7 sm:py-7">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-amber-800">
                        Great fit
                      </p>
                      <p className="mt-1 text-sm font-semibold text-amber-900">
                        HVAC, roofing, landscaping, plumbing, electrical, and similar shops with:
                      </p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-[0.7rem] font-medium text-amber-800">
                      Ready to tighten up leads
                    </span>
                  </div>

                  <ul className="space-y-2 text-sm text-amber-900/90">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-700" />
                      <span>Office phone number already in use (not just a personal cell).</span>
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

                  <p className="mt-1 text-xs text-amber-900/80">
                    You keep the number on your trucks, cards, and website. We add the intelligence behind it.
                  </p>
                </div>

                {/* NOT IDEAL */}
                <div className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-6 py-6 sm:px-7 sm:py-7">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-700">
                    Not ideal (for now)
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                      <span>One-person operators using only a personal cell for everything.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                      <span>Owners unwilling to route their existing number through a VoIP/call system.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                      <span>Businesses that do not want to adjust any call or lead-handling process.</span>
                    </li>
                  </ul>
                  <p className="mt-1 text-xs text-slate-500">
                    ForgedLocal is for teams that want cleaner lead handling without adding more software work
                    to their plate.
                  </p>
                </div>
              </div>
            </div>
          </section>


          {/* PRICING – single card */}
          <section
            id="pricing"
            className="border-b border-slate-200 bg-slate-50"
          >
            <div className="container mx-auto px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Simple engagement, clear pricing
                </h2>
                <p className="mt-3 text-sm text-slate-600">
                  No generic SaaS seat pricing. We scope around your numbers.
                </p>
              </div>

              <div className="mt-8 max-w-3xl rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">
                  What you get:
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                  <li>Done-for-you setup and call-flow design</li>
                  <li>Connection to your existing number/VoIP where possible</li>
                  <li>Ongoing tuning as we see how leads behave</li>
                </ul>
                <p className="mt-3 text-sm text-slate-600">
                  On our intro call we estimate average job value, realistic
                  missed leads, and potential extra revenue. Pricing is designed
                  to stay well below that recovered amount.
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-amber-300"
                >
                  Talk about your numbers
                </a>
              </div>
            </div>
          </section>

          {/* CONTACT – form unchanged structurally, just fits new palette */}
          <section
            id="contact"
            className="bg-white"
          >
            <div className="container mx-auto px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Start a conversation
                </h2>
                <p className="mt-3 text-sm text-slate-600">
                  Share a few details. We&apos;ll reply with a time for a quick,
                  no-pressure intro call.
                </p>
              </div>

              <div className="mt-8 max-w-3xl">
                <form
                  action="/api/contact"
                  method="POST"
                  className="grid gap-6 md:grid-cols-2"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium uppercase tracking-wide text-slate-700"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                      placeholder="Jane Contractor"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium uppercase tracking-wide text-slate-700"
                    >
                      Work email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="businessName"
                      className="block text-xs font-medium uppercase tracking-wide text-slate-700"
                    >
                      Business name
                    </label>
                    <input
                      id="businessName"
                      name="businessName"
                      type="text"
                      required
                      className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
                      placeholder="Forged Plumbing & HVAC"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-medium uppercase tracking-wide text-slate-700"
                    >
                      Best phone number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="businessType"
                      className="block text-xs font-medium uppercase tracking-wide text-slate-700"
                    >
                      Type of business
                    </label>
                    <input
                      id="businessType"
                      name="businessType"
                      type="text"
                      className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
                      placeholder="HVAC, roofing, landscaping, plumbing, etc."
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="missedLeads"
                      className="block text-xs font-medium uppercase tracking-wide text-slate-700"
                    >
                      Estimated missed calls/leads per month
                    </label>
                    <input
                      id="missedLeads"
                      name="missedLeads"
                      type="text"
                      className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
                      placeholder="Example: 5–15"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium uppercase tracking-wide text-slate-700"
                    >
                      Anything else we should know?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
                      placeholder="Current phone setup, missed leads, or what you’d like to improve."
                    />
                  </div>
                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    >
                      Request a quick intro
                    </button>
                    <p className="mt-3 text-xs text-slate-500">
                      This form starts a conversation. You decide after our
                      first call whether ForgedLocal is a fit.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-slate-200 bg-white">
          <div className="container mx-auto flex flex-col items-start justify-between gap-4 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:px-6 lg:px-8">
            <p>© 2025 ForgedLocal. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#how-it-works" className="hover:text-slate-800">
                How it works
              </a>
              <a href="#who-we-serve" className="hover:text-slate-800">
                Who it&apos;s for
              </a>
              <a href="#pricing" className="hover:text-slate-800">
                Pricing
              </a>
              <a href="#contact" className="hover:text-slate-800">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
