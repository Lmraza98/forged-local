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
  title: { default: "Small Business IT Support in Southern NH | ForgedLocal", template: "%s | ForgedLocal" },
  description: "Direct IT support, Microsoft 365 help, office networks, and practical technology projects for small businesses in Southern New Hampshire and Greater Boston.",
  alternates: { canonical: siteConfig.domain },
  openGraph: { title: "ForgedLocal | Small Business IT Help", description: "Direct IT support and technology projects for small businesses.", url: siteConfig.domain, siteName: siteConfig.name, type: "website", locale: "en_US" },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml", sizes: "96x96" }],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
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
