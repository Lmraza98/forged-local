import type { Metadata } from 'next'
import { IndustryLandingPage } from '@/components/IndustryLandingPage'

export const metadata: Metadata = {
  title: 'Electrician Answering Service | Missed Call Text Back for Electricians',
  description: 'Stop losing electrical jobs to missed calls. ForgedLocal automatically texts back customers when you\'re on a job. Trusted by NH electricians.',
  keywords: 'electrician answering service, electrical contractor missed call, electrician lead capture, electrical phone service, New Hampshire electrician',
  openGraph: {
    title: 'Electrician Answering Service | Capture Every Service Call',
    description: 'ForgedLocal helps electricians capture every call with automatic text-back technology. Setup in 48 hours.',
    url: 'https://forgedlocal.com/electrician-answering-service',
  },
  alternates: {
    canonical: 'https://forgedlocal.com/electrician-answering-service',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Electrician Answering Service',
  description: 'Missed call text-back service for electricians and electrical contractors. Automatically respond to missed calls within 60 seconds.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'ForgedLocal',
    areaServed: {
      '@type': 'State',
      name: 'New Hampshire'
    }
  },
  serviceType: 'Answering Service',
  audience: {
    '@type': 'Audience',
    audienceType: 'Electricians'
  }
}

export default function ElectricianPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IndustryLandingPage
        industry="Electrical"
        industryPlural="Electricians"
        heroTitle="That Panel Upgrade Call? Gone to Your Competitor."
        heroSubtitle="When you're pulling wire or troubleshooting a panel, you can't answer the phone. Homeowners needing electrical work call the next electrician. ForgedLocal texts them back instantly so you capture the job."
        painPoints={[
          'Calls come while you\'re working in tight spaces with both hands full',
          'Panel upgrades and EV charger installs are $2,000-5,000 jobs you can\'t miss',
          'Homeowners planning projects call during your busiest hours',
          'After-hours calls from people with flickering lights or dead circuits',
          'Commercial clients expect immediate response for electrical issues',
          'No way to know which missed calls were high-value projects'
        ]}
        benefits={[
          'Instant text: "Sorry we missed your call! What electrical work do you need done?"',
          'Customers describe their project while you finish current job',
          'Urgent keywords like "no power" or "sparking" get flagged',
          'Capture after-hours emergency calls automatically',
          'One inbox for all calls, texts, and project inquiries',
          'Track which recovered calls became $3,000+ panel jobs'
        ]}
        stats={{
          missedCallPercent: '24%',
          avgJobValue: '$1,200',
          monthlyLoss: '$6,000+'
        }}
        testimonial={{
          quote: 'Got a text back from a missed call about an EV charger install. That turned into a $3,800 job plus they wanted their panel upgraded. Would have lost both without ForgedLocal.',
          name: 'Kevin L.',
          company: 'Precision Electric',
          location: 'Derry, NH'
        }}
        faqs={[
          {
            question: 'How does ForgedLocal work for electrical contractors?',
            answer: 'When you miss a call while working, ForgedLocal texts the customer within 60 seconds from your business number. They can describe their electrical issue or project, and you respond when you\'re at a safe stopping point.'
          },
          {
            question: 'Do I need to change my electrical business phone number?',
            answer: 'No. Your number on your truck, business cards, and Google stays the same. We connect behind your existing line—customers never know the difference.'
          },
          {
            question: 'How are emergency electrical calls handled?',
            answer: 'You can set up keyword alerts for urgent terms like "no power," "sparking," "burning smell," or "outlet fire." These get flagged immediately so you can prioritize true emergencies.'
          },
          {
            question: 'What about commercial electrical clients?',
            answer: 'Commercial clients often have time-sensitive needs. ForgedLocal ensures they get an immediate response even if you\'re on another job site. Many contractors find this helps them win commercial contracts.'
          },
          {
            question: 'How much does this cost compared to an answering service?',
            answer: 'Traditional answering services charge $200-400/month and often can\'t handle technical questions. ForgedLocal costs less and puts customers directly in touch with you via text. One recovered panel upgrade pays for a year of service.'
          },
          {
            question: 'Can I customize the auto-reply message?',
            answer: 'Yes. We work with you to craft a message that fits your business. Many electricians use something like "Hi, this is [Company]. Sorry we missed your call! What electrical work can we help with?"'
          }
        ]}
      />
    </>
  )
}




