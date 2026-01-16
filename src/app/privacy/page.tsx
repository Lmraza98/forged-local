import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | ForgedLocal',
  description: 'ForgedLocal privacy policy - how we collect, use, and protect your data.',
}

export default function PrivacyPage() {
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
            <h1>Privacy Policy</h1>
            <p className="lead">Last updated: January 2025</p>

            <h2>1. Information We Collect</h2>
            
            <h3>Information You Provide</h3>
            <ul>
              <li><strong>Account Information:</strong> Business name, contact name, email, phone number</li>
              <li><strong>Business Details:</strong> Trade type, service area, call volume estimates</li>
              <li><strong>Payment Information:</strong> Billing address, payment method (processed by our payment provider)</li>
            </ul>

            <h3>Information Collected Automatically</h3>
            <ul>
              <li><strong>Call Data:</strong> Phone numbers of incoming callers, call timestamps, call duration</li>
              <li><strong>SMS Data:</strong> Message content, delivery status, opt-out requests</li>
              <li><strong>Usage Data:</strong> Log data, device information, IP address, browser type</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul>
              <li>Provide and improve our missed call text-back service</li>
              <li>Send SMS messages on your behalf to missed callers</li>
              <li>Generate performance reports and analytics</li>
              <li>Communicate with you about your account</li>
              <li>Process payments and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>3. SMS Messaging and Customer Data</h2>
            <p>
              When we send SMS messages on your behalf to your missed callers:
            </p>
            <ul>
              <li>Messages are sent from your business phone number</li>
              <li>We store message content and delivery status for your records</li>
              <li>We honor all opt-out requests (STOP messages) within 24 hours</li>
              <li>Customer phone numbers are stored securely and used only to provide the Service</li>
            </ul>

            <h2>4. Data Sharing</h2>
            <p>We do not sell your data. We may share information with:</p>
            <ul>
              <li><strong>Service Providers:</strong> Companies that help us deliver the Service (hosting, SMS delivery, payment processing)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>
              We implement industry-standard security measures including:
            </p>
            <ul>
              <li>Encryption of data in transit (TLS/SSL)</li>
              <li>Secure data storage with access controls</li>
              <li>Regular security assessments</li>
              <li>Employee training on data protection</li>
            </ul>

            <h2>6. Data Retention</h2>
            <p>
              We retain your data for as long as your account is active and for a reasonable period thereafter 
              for legal and business purposes. Call and SMS logs are retained for 12 months unless you request earlier deletion.
            </p>

            <h2>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2>8. Cookies and Tracking</h2>
            <p>
              Our website uses cookies and similar technologies to:
            </p>
            <ul>
              <li>Remember your preferences</li>
              <li>Analyze website traffic (Google Analytics)</li>
              <li>Improve our marketing effectiveness</li>
            </ul>

            <h2>9. Children&apos;s Privacy</h2>
            <p>
              Our Service is not directed to individuals under 18. We do not knowingly collect 
              personal information from children.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this policy periodically. We will notify you of material changes 
              via email or through the Service.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              For privacy-related questions or requests, contact us at:{' '}
              <a href="mailto:privacy@forgedlocal.com">privacy@forgedlocal.com</a>
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

