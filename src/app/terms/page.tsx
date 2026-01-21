import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | ForgedLocal',
  description: 'ForgedLocal terms of service and conditions of use.',
}

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFFDF8] text-slate-900">
      {/* HEADER */}
      <header className="border-b border-amber-100/80 bg-[#FFFDF8]">
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
        </nav>
      </header>

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl prose prose-slate">
            <h1>Terms of Service</h1>
            <p className="lead">Last updated: January 2025</p>

            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using ForgedLocal&apos;s services (&quot;Service&quot;), you agree to be bound by these Terms of Service. 
              If you disagree with any part of these terms, you do not have permission to access the Service.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              ForgedLocal provides missed call text-back services for contractors and home service businesses. 
              Our Service includes:
            </p>
            <ul>
              <li>Call forwarding configuration</li>
              <li>Automatic SMS responses to missed calls</li>
              <li>Lead capture and unified inbox</li>
              <li>Performance reporting</li>
            </ul>

            <h2>3. User Responsibilities</h2>
            <p>You are responsible for:</p>
            <ul>
              <li>Providing accurate business information</li>
              <li>Maintaining proper consent from your customers to receive SMS messages</li>
              <li>Complying with all applicable laws and regulations, including the Telephone Consumer Protection Act (TCPA)</li>
              <li>Paying all fees associated with your subscription</li>
            </ul>

            <h2>4. SMS Messaging Compliance</h2>
            <p>
              By using our Service, you acknowledge that SMS messages will be sent on your behalf to callers who 
              do not reach you. You agree to:
            </p>
            <ul>
              <li>Only use the Service for legitimate business communications</li>
              <li>Honor all opt-out requests promptly</li>
              <li>Not use the Service for spam, harassment, or illegal purposes</li>
              <li>Include proper business identification in messages</li>
            </ul>

            <h2>5. Pricing and Payment</h2>
            <p>
              Subscription fees are billed monthly in advance. Prices are subject to change with 30 days notice.
              There are no long-term contracts; you may cancel at any time.
            </p>

            <h2>6. Cancellation</h2>
            <p>
              You may cancel your subscription at any time by removing call forwarding from your phone line 
              and notifying us. No refunds will be provided for partial months.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              ForgedLocal shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
              including loss of profits, data, or business opportunities. Our total liability shall not exceed 
              the amount paid by you in the 12 months preceding the claim.
            </p>

            <h2>8. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless ForgedLocal from any claims, damages, or expenses arising 
              from your use of the Service or violation of these Terms.
            </p>

            <h2>9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will provide notice of significant changes 
              via email or through the Service.
            </p>

            <h2>10. Contact</h2>
            <p>
              Questions about these Terms should be sent to: <a href="mailto:legal@forgedlocal.com">legal@forgedlocal.com</a>
            </p>
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




