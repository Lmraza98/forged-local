import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { Analytics } from "@/components/Analytics";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { InteractionLayer } from "@/components/InteractionLayer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: { default: "New Hampshire Web Design for Local Businesses | ForgedLocal", template: "%s | ForgedLocal" },
  description: "Fast, professional websites for contractors and local service businesses in Nashua and across New Hampshire.",
  alternates: { canonical: siteConfig.domain },
  openGraph: { title: "ForgedLocal | New Hampshire Web Design", description: "Websites built to help local businesses earn trust and generate inquiries.", url: siteConfig.domain, siteName: siteConfig.name, type: "website", locale: "en_US" },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", apple: "/apple-touch-icon.svg" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <InteractionLayer />
        <SiteHeader />
        <div id="main-content" className="route-content">{children}</div>
        <SiteFooter />
        <Analytics />
        <VercelAnalytics />
      </body>
    </html>
  );
}
