import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function pageMetadata(title: string, description: string, path = ""): Metadata {
  const url = `${siteConfig.domain}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: siteConfig.name, type: "website", locale: "en_US" },
    twitter: { card: "summary_large_image", title, description },
  };
}
