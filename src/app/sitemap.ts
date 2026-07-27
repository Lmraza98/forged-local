import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/services", "/work", "/about", "/contact", "/privacy"].map((path, i) => ({
    url: `${siteConfig.domain}${path}`, lastModified: new Date(), changeFrequency: i === 0 ? "weekly" : "monthly", priority: i === 0 ? 1 : path === "/privacy" ? .3 : .8,
  }));
}
