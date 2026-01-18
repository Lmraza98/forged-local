import { MetadataRoute } from 'next'

/**
 * Sitemap Configuration
 * 
 * IMPORTANT: Only include URLs that return 200 status (no redirects)
 * 
 * Canonical domain: https://forgedlocal.com (non-www, https)
 * - Set this same domain in Google Search Console
 * - Ensure DNS/hosting redirects www → non-www
 * - Ensure DNS/hosting redirects http → https
 * 
 * Trailing slashes: disabled in next.config.ts
 * - URLs are /page not /page/
 */

const CANONICAL_DOMAIN = 'https://forgedlocal.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Main pages - high priority
  const mainPages = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/how-it-works', priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  // Industry landing pages - high priority (lead generation)
  const industryPages = [
    '/hvac-answering-service',
    '/plumber-answering-service',
    '/roofing-answering-service',
    '/electrician-answering-service',
    '/landscaping-answering-service',
  ].map(path => ({
    path,
    priority: 0.9,
    changeFrequency: 'monthly' as const,
  }))

  // Legal/policy pages - low priority
  const legalPages = [
    '/terms',
    '/privacy',
    '/sms-consent',
  ].map(path => ({
    path,
    priority: 0.3,
    changeFrequency: 'yearly' as const,
  }))

  // Combine all pages
  const allPages = [...mainPages, ...industryPages, ...legalPages]

  // NOTE: Excluded pages (do NOT add to sitemap):
  // - /thank-you (post-conversion page, not indexable)
  // - /api/* (API routes)
  // - Any pages that redirect

  return allPages.map(({ path, priority, changeFrequency }) => ({
    url: `${CANONICAL_DOMAIN}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
