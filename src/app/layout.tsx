import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://forgedlocal.com'),
  title: 'ForgedLocal – Stop Losing Local Leads to Missed Calls',
  description:
    'ForgedLocal helps local service businesses capture every call and web lead with practical automation and AI-powered follow-up.',
  openGraph: {
    title: 'ForgedLocal – Stop Losing Local Leads to Missed Calls',
    description:
      'ForgedLocal helps local service businesses capture every call and web lead with practical automation and AI-powered follow-up.',
    url: 'https://forgedlocal.com',
    siteName: 'ForgedLocal',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ForgedLocal – Stop Losing Local Leads to Missed Calls',
    description:
      'ForgedLocal helps local service businesses capture every call and web lead with practical automation and AI-powered follow-up.',
  },
  alternates: {
    canonical: 'https://forgedlocal.com',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
