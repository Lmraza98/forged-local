import type { Metadata } from 'next'
import { IndustryLandingPage } from '@/components/IndustryLandingPage'

export const metadata: Metadata = {
  title: 'Landscaping Answering Service | Missed Call Text Back for Landscapers',
  description: 'Stop losing landscaping jobs to missed calls. ForgedLocal automatically texts back customers when your crew is on a job. Trusted by NH landscapers.',
  keywords: 'landscaping answering service, landscaper missed call text back, lawn care lead capture, landscaping phone service, New Hampshire landscaper',
  openGraph: {
    title: 'Landscaping Answering Service | Capture Every Estimate Request',
    description: 'ForgedLocal helps landscapers capture every call with automatic text-back technology. Setup in 48 hours.',
    url: 'https://forgedlocal.com/landscaping-answering-service',
  },
  alternates: {
    canonical: 'https://forgedlocal.com/landscaping-answering-service',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Landscaping Answering Service',
  description: 'Missed call text-back service for landscapers and lawn care professionals. Automatically respond to missed calls within 60 seconds.',
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
    audienceType: 'Landscapers'
  }
}

export default function LandscapingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IndustryLandingPage
        industry="Landscaping"
        industryPlural="Landscapers"
        heroTitle="Spring Calls Are Flooding In. How Many Are You Losing?"
        heroSubtitle="When your crew is spread across 5 job sites running mowers and equipment, you can't answer every call. Homeowners wanting $5,000 patio projects call someone who picks up. ForgedLocal texts them back so you don't lose the job."
        painPoints={[
          'Calls come while you\'re operating loud equipment or driving between sites',
          'Spring rush brings 50+ calls a week—impossible to answer them all',
          'High-value hardscape and design projects ($5,000-20,000+) slip away',
          'Customers wanting weekly service quotes call during peak mowing hours',
          'No way to capture leads when crews are spread across job sites',
          'By evening, callers have already gotten quotes from competitors'
        ]}
        benefits={[
          'Instant text: "Thanks for calling! What landscaping work are you looking for?"',
          'Customers describe their project (patio, lawn care, design) while you work',
          'Capture seasonal rush calls without hiring office staff',
          'Photos of yards and project ideas come via text',
          'One inbox for all estimate requests and customer messages',
          'Track which recovered calls became recurring lawn care clients'
        ]}
        stats={{
          missedCallPercent: '35%',
          avgJobValue: '$2,400',
          monthlyLoss: '$12,000+'
        }}
        testimonial={{
          quote: 'During spring cleanup season, I was missing 8-10 calls a day. ForgedLocal texts them all back automatically. Picked up 6 new weekly lawn care accounts and a $15,000 patio job in the first month.',
          name: 'Brian S.',
          company: 'Granite State Landscaping',
          location: 'Bedford, NH'
        }}
        faqs={[
          {
            question: 'How does ForgedLocal handle the spring/summer rush?',
            answer: 'When call volume spikes in busy season, ForgedLocal automatically texts back every missed call within 60 seconds. No extra staff needed. You capture leads from customers who called while you were mowing or on another site.'
          },
          {
            question: 'Can customers send photos of their yard?',
            answer: 'Yes! When customers reply to your auto-text, they can send photos of their property, problem areas, or inspiration images for projects. You can start estimating before you even visit the site.'
          },
          {
            question: 'Do I need to change my business phone number?',
            answer: 'No. Your number on your truck, door hangers, and Google listing stays exactly the same. We work behind your existing line.'
          },
          {
            question: 'What about recurring lawn care customers?',
            answer: 'ForgedLocal is great for capturing new recurring clients. A missed call from someone wanting weekly service could be worth $2,000-3,000 over the season. That auto-text keeps them from calling someone else.'
          },
          {
            question: 'How does pricing work compared to hiring office help?',
            answer: 'Part-time office help costs $15-20/hour and still can\'t answer calls at 6am or 8pm when homeowners are thinking about their yards. ForgedLocal works 24/7 and costs less than one recovered job per month.'
          },
          {
            question: 'Can I track which leads turn into jobs?',
            answer: 'Yes. ForgedLocal shows you every recovered lead and whether it converted. You\'ll know exactly how many lawn care clients, hardscape projects, and design jobs came from calls you would have missed.'
          }
        ]}
      />
    </>
  )
}



