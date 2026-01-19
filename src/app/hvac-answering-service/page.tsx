import type { Metadata } from 'next'
import { IndustryLandingPage } from '@/components/IndustryLandingPage'

export const metadata: Metadata = {
  title: 'HVAC Answering Service | Missed Call Text Back for HVAC Contractors',
  description: 'Stop losing HVAC jobs to missed calls. ForgedLocal automatically texts back customers who call when you\'re on the job. NH HVAC contractors trust us to capture every lead.',
  keywords: 'HVAC answering service, HVAC missed call text back, HVAC lead capture, heating and cooling answering service, HVAC phone service, New Hampshire HVAC',
  openGraph: {
    title: 'HVAC Answering Service | Never Miss Another AC Repair Call',
    description: 'ForgedLocal helps HVAC contractors capture every call with automatic text-back technology. Setup in 48 hours.',
    url: 'https://forgedlocal.com/hvac-answering-service',
  },
  alternates: {
    canonical: 'https://forgedlocal.com/hvac-answering-service',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'HVAC Answering Service',
  description: 'Missed call text-back service for HVAC contractors. Automatically respond to missed calls within 60 seconds.',
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
    audienceType: 'HVAC Contractors'
  }
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does ForgedLocal work with my HVAC business phone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We connect behind your existing business number using call forwarding. When a call goes unanswered, our system automatically sends a text message from your business number within 60 seconds.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do I need to change my HVAC business phone number?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. You keep the same number on your trucks, business cards, and Google listing. ForgedLocal works behind the scenes.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does an HVAC answering service cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pricing is based on your call volume and is designed to cost less than the revenue from one recovered job per month. Most HVAC contractors see 3-5x ROI.'
      }
    }
  ]
}

export default function HVACPage() {
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
        industry="HVAC"
        industryPlural="HVAC Contractors"
        heroTitle="Stop Losing $800 AC Repair Jobs to Voicemail"
        heroSubtitle="When you're elbow-deep in a furnace, calls go to voicemail. Those customers call your competitor next. ForgedLocal texts them back instantly—from your number—so you never lose another job."
        painPoints={[
          'Customers call while you\'re crawling through an attic or basement',
          'By the time you call back, they\'ve already booked with someone else',
          'Summer AC emergencies and winter heating calls come at the worst times',
          'Your dispatcher is overwhelmed during peak season',
          'After-hours calls go straight to voicemail and disappear',
          'No way to know which missed calls became lost jobs'
        ]}
        benefits={[
          'Automatic text within 60 seconds: "Sorry we missed your call, how can we help with your heating/cooling?"',
          'Customers respond via text while you finish the current job',
          'Emergency calls get flagged so you can prioritize urgent repairs',
          'Works 24/7—capture after-hours AC emergencies automatically',
          'One inbox shows all missed calls, texts, and voicemails',
          'See exactly which recovered calls turned into booked jobs'
        ]}
        stats={{
          missedCallPercent: '23%',
          avgJobValue: '$800',
          monthlyLoss: '$4,800+'
        }}
        testimonial={{
          quote: 'We were losing 5-6 calls a week during busy season. Now those turn into $800 tune-ups and $3,000 replacements. ForgedLocal paid for itself the first week.',
          name: 'Mike R.',
          company: 'Reliable HVAC Services',
          location: 'Nashua, NH'
        }}
        faqs={[
          {
            question: 'How does ForgedLocal work with my HVAC business phone?',
            answer: 'We connect behind your existing business number using call forwarding. When a call goes unanswered, our system automatically sends a text message from your business number within 60 seconds. Customers think it\'s you responding.'
          },
          {
            question: 'Do I need to change my HVAC business phone number?',
            answer: 'No. You keep the same number that\'s on your trucks, business cards, and Google Business Profile. We work behind the scenes—customers never know the difference.'
          },
          {
            question: 'What if I\'m on another call when a customer calls?',
            answer: 'If the call goes to voicemail or isn\'t answered, ForgedLocal detects it as missed and sends the auto-text. You can then respond via text when you\'re free, or call them back.'
          },
          {
            question: 'How much does this cost compared to hiring an answering service?',
            answer: 'Traditional HVAC answering services charge $200-500/month and often give generic responses. ForgedLocal costs less and texts from YOUR number with YOUR message. Most contractors see ROI from recovering just one job.'
          },
          {
            question: 'Can I customize the auto-reply message?',
            answer: 'Absolutely. We work with you to craft a message that fits your brand. Many HVAC contractors use something like "Hi, this is [Company]. Sorry we missed your call! What can we help with—AC repair, heating issue, or maintenance?"'
          },
          {
            question: 'What about emergency calls?',
            answer: 'You can set up keyword detection so urgent terms like "no heat" or "AC broken" get flagged for immediate attention. You decide how to handle after-hours emergencies.'
          }
        ]}
      />
    </>
  )
}



