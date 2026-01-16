import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { DM_Sans } from 'next/font/google'
import { Analytics as CustomAnalytics, GTMNoScript } from '@/components/Analytics'
import { Analytics } from '@vercel/analytics/react'

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://forgedlocal.com'),
  title: {
    default: 'ForgedLocal | Missed Call Text Back for Contractors',
    template: '%s | ForgedLocal'
  },
  description: 'Stop losing $5,000+ jobs to missed calls. ForgedLocal automatically texts back customers within 60 seconds when you can\'t answer. Trusted by HVAC, plumbing, roofing & electrical contractors in New Hampshire.',
  keywords: ['missed call text back', 'contractor answering service', 'HVAC answering service', 'plumber answering service', 'auto text back', 'lead capture', 'New Hampshire contractors'],
  authors: [{ name: 'ForgedLocal' }],
  creator: 'ForgedLocal',
  publisher: 'ForgedLocal',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'ForgedLocal | Stop Losing Jobs to Missed Calls',
    description: 'Automatically text back customers within 60 seconds. HVAC, plumbing, roofing & electrical contractors trust ForgedLocal.',
    url: 'https://forgedlocal.com',
    siteName: 'ForgedLocal',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ForgedLocal | Missed Call Text Back for Contractors',
    description: 'Stop losing $5,000+ jobs to voicemail. Auto text-back in 60 seconds.',
  },
  alternates: {
    canonical: 'https://forgedlocal.com',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.svg',
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <head>
        <CustomAnalytics />
      </head>
      <body className="bg-[#FFFDF8] text-slate-900 antialiased font-sans">
        <GTMNoScript />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
