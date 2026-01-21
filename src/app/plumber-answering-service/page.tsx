import type { Metadata } from 'next'
import { IndustryLandingPage } from '@/components/IndustryLandingPage'

export const metadata: Metadata = {
  title: 'Plumber Answering Service | Missed Call Text Back for Plumbers',
  description: 'Never miss another plumbing emergency call. ForgedLocal automatically texts back customers when you\'re on a job. Trusted by NH plumbers to capture every lead.',
  keywords: 'plumber answering service, plumbing missed call text back, plumber lead capture, plumbing phone service, New Hampshire plumber, emergency plumber answering',
  openGraph: {
    title: 'Plumber Answering Service | Capture Every Emergency Call',
    description: 'ForgedLocal helps plumbers capture every call with automatic text-back technology. Setup in 48 hours.',
    url: 'https://forgedlocal.com/plumber-answering-service',
  },
  alternates: {
    canonical: 'https://forgedlocal.com/plumber-answering-service',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Plumber Answering Service',
  description: 'Missed call text-back service for plumbers and plumbing contractors. Automatically respond to missed calls within 60 seconds.',
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
    audienceType: 'Plumbers'
  }
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does ForgedLocal help plumbers capture more jobs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When you miss a call while on a job, ForgedLocal automatically texts the customer within 60 seconds from your business number. They can describe their plumbing issue via text, and you respond when you\'re free.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can ForgedLocal handle emergency plumbing calls?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can set up keyword detection for urgent terms like "flooding", "burst pipe", or "no water" to flag calls for immediate attention.'
      }
    }
  ]
}

export default function PlumberPage() {
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
        industry="Plumbing"
        industryPlural="Plumbers"
        heroTitle="That Burst Pipe Call You Missed? They Called Someone Else."
        heroSubtitle="Plumbing emergencies don't wait. When you're under a sink, customers with flooded basements call the next plumber on Google. ForgedLocal texts them back instantly so you don't lose the job."
        painPoints={[
          'Emergency calls come while you\'re mid-repair with water everywhere',
          'Customers with burst pipes call 3-4 plumbers—first to respond wins',
          'Weekend and after-hours calls go to voicemail and disappear',
          'No way to triage urgent calls from routine maintenance requests',
          'By the time you check voicemail, the emergency is someone else\'s job',
          'High-value jobs ($500-2,000+) lost to simple missed calls'
        ]}
        benefits={[
          'Instant text: "Sorry we missed your call! What\'s the plumbing issue? We\'ll get right back to you."',
          'Customers describe their emergency via text while you finish current job',
          'Urgent keywords like "flooding" or "burst" get flagged immediately',
          'Capture after-hours emergencies—the highest-margin calls',
          'One inbox for all calls, texts, and voicemails',
          'Track which recovered calls became $1,000+ emergency repairs'
        ]}
        stats={{
          missedCallPercent: '27%',
          avgJobValue: '$650',
          monthlyLoss: '$5,200+'
        }}
        testimonial={{
          quote: 'A customer texted back "basement flooding" while I was finishing another job. That was a $2,400 emergency repair I would have lost. ForgedLocal is a no-brainer.',
          name: 'Dave T.',
          company: 'Priority Plumbing',
          location: 'Manchester, NH'
        }}
        faqs={[
          {
            question: 'How fast does ForgedLocal respond to missed plumbing calls?',
            answer: 'Within 60 seconds. When a call goes unanswered, our system immediately sends a text from your business number. For plumbing emergencies, speed is everything—being first to respond often wins the job.'
          },
          {
            question: 'Do I need to change my plumbing business phone number?',
            answer: 'No. Your number on Google, your trucks, and your business cards stays exactly the same. We connect behind your existing line.'
          },
          {
            question: 'How do emergency calls get handled?',
            answer: 'You can configure keyword detection. When customers reply with urgent terms like "flooding," "burst pipe," "no hot water," or "sewer backup," those get flagged for immediate attention. You decide how to prioritize.'
          },
          {
            question: 'What if customers prefer to call instead of text?',
            answer: 'Many customers—especially during emergencies—appreciate getting ANY response quickly. The text lets them know you\'re aware and will call back. Most customers will text details, which you can review and prioritize.'
          },
          {
            question: 'How much does this cost compared to a call center?',
            answer: 'Traditional plumber answering services charge $300-600/month and often fumble technical questions. ForgedLocal costs less and lets customers communicate directly with you via text. One emergency repair covers months of service.'
          },
          {
            question: 'Can I see which missed calls turned into jobs?',
            answer: 'Yes. ForgedLocal tracks the entire journey from missed call to text conversation to booked job. You\'ll see exactly how much revenue you\'re recovering.'
          }
        ]}
      />
    </>
  )
}




