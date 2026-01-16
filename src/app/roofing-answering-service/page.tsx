import type { Metadata } from 'next'
import { IndustryLandingPage } from '@/components/IndustryLandingPage'

export const metadata: Metadata = {
  title: 'Roofing Answering Service | Missed Call Text Back for Roofers',
  description: 'Stop losing roofing leads to missed calls. ForgedLocal automatically texts back homeowners when you\'re on the roof. Trusted by NH roofing contractors.',
  keywords: 'roofing answering service, roofer missed call text back, roofing lead capture, roofing contractor phone service, New Hampshire roofer, storm damage calls',
  openGraph: {
    title: 'Roofing Answering Service | Capture Every Storm Damage Call',
    description: 'ForgedLocal helps roofing contractors capture every call with automatic text-back technology. Setup in 48 hours.',
    url: 'https://forgedlocal.com/roofing-answering-service',
  },
  alternates: {
    canonical: 'https://forgedlocal.com/roofing-answering-service',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Roofing Answering Service',
  description: 'Missed call text-back service for roofing contractors. Automatically respond to missed calls within 60 seconds.',
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
    audienceType: 'Roofing Contractors'
  }
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does ForgedLocal help roofers during storm season?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'After a storm, call volume spikes dramatically. ForgedLocal automatically texts back every missed call within 60 seconds, so you capture leads even when you\'re overwhelmed with calls and on-site inspections.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do I need a receptionist if I use ForgedLocal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ForgedLocal handles missed calls automatically. Many roofing contractors use it alongside their existing setup—it catches the calls that slip through when you\'re busy on a roof.'
      }
    }
  ]
}

export default function RoofingPage() {
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
      <IndustryLandingPage
        industry="Roofing"
        industryPlural="Roofing Contractors"
        heroTitle="Every Storm Brings 50 Calls. How Many Are You Missing?"
        heroSubtitle="When you're on a roof or driving to inspections, homeowners with storm damage are calling everyone on Google. First roofer to respond gets the $12,000 replacement. ForgedLocal makes sure that's you."
        painPoints={[
          'Storm season floods you with calls you can\'t answer from the roof',
          'Homeowners with damage call 5-6 roofers—first response wins',
          'High-value jobs ($8,000-15,000+) lost while you\'re on inspections',
          'After-hours storm damage calls go to voicemail',
          'No way to capture leads when your crew is spread across job sites',
          'By the time you call back, they\'ve already scheduled with a competitor'
        ]}
        benefits={[
          'Instant text to every missed call: "Got your call about your roof! Can you describe the damage?"',
          'Homeowners send photos of damage via text while you\'re on another job',
          'Storm damage keywords get priority flagging',
          'Capture after-hours calls when homeowners discover leaks at night',
          'One inbox shows all leads with damage details and photos',
          'Track exactly which storm calls became $10,000+ roof replacements'
        ]}
        stats={{
          missedCallPercent: '31%',
          avgJobValue: '$8,500',
          monthlyLoss: '$25,500+'
        }}
        testimonial={{
          quote: 'After the last hailstorm, I was getting 40+ calls a day. ForgedLocal texted back everyone I missed. Closed an extra $45,000 in roof replacements that week alone.',
          name: 'Chris M.',
          company: 'Summit Roofing',
          location: 'Salem, NH'
        }}
        faqs={[
          {
            question: 'How does ForgedLocal handle storm season call volume?',
            answer: 'When storms hit, your call volume can spike 5-10x. ForgedLocal automatically texts back every single missed call within 60 seconds, so you capture leads even when you physically can\'t answer. No extra staff needed.'
          },
          {
            question: 'Can homeowners send photos of roof damage?',
            answer: 'Yes! When customers respond to your auto-text, they can send photos of their damage. You\'ll see hail damage, missing shingles, and leaks before you even drive out—helps you prioritize and give quick estimates.'
          },
          {
            question: 'Do I need to change my business phone number?',
            answer: 'No. Your number on your trucks, yard signs, and Google listing stays the same. ForgedLocal works behind your existing line.'
          },
          {
            question: 'What about calls from insurance adjusters?',
            answer: 'All calls are captured regardless of who\'s calling. You can identify insurance-related calls from the text conversation and prioritize accordingly.'
          },
          {
            question: 'How does pricing compare to hiring a receptionist?',
            answer: 'A full-time receptionist costs $35,000-45,000/year and still misses after-hours calls. ForgedLocal costs a fraction of that and works 24/7. Most roofers see ROI from just one recovered job per month.'
          },
          {
            question: 'Can I track which leads came from missed calls?',
            answer: 'Absolutely. ForgedLocal shows you every recovered lead—who called, when they called, what they texted, and whether it turned into a signed contract. You\'ll know exactly how much revenue you\'re recovering.'
          }
        ]}
      />
    </>
  )
}

