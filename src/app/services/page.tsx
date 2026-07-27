import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata = pageMetadata(
  "Website Services for New Hampshire Businesses",
  "New websites, website redesigns, local SEO foundations, Google Business Profile help, and website care for local service businesses.",
  "/services",
);

const items = [
  ["New business websites", "For businesses launching or operating without a credible website.", "Get a professional online home that explains what you do, where you work, and how customers can contact you. We shape the message, design the pages, and build the site so you can stay focused on the business."],
  ["Website redesigns", "For websites that feel dated, slow, confusing, or ineffective.", "We keep what is useful, fix what is getting in the way, and rebuild around mobile usability, credibility, clear service pages, and stronger calls to action."],
  ["Local SEO foundations", "Help search engines and local customers understand your business.", "Every build includes useful page titles and descriptions, a search-friendly structure, local service messaging, a sitemap, Search Console readiness, appropriate structured data, and sound performance fundamentals. Rankings are never guaranteed."],
  ["Google Business Profile assistance", "Improve a key part of your local search presence.", "We can help with setup or optimization, including accurate categories, services, business information, photos, and the connection between your profile and website. ForgedLocal is not affiliated with Google."],
  ["Website care", "Keep the website running without adding another job to your list.", "Ongoing care can include hosting, software updates, backups, basic content changes, technical maintenance, and direct support when you need help."],
] as const;

export default function ServicesPage() {
  return (
    <main>
      <PageHero eyebrow="Website services">A better website, built around how your business actually wins work.</PageHero>
      <section className="content-section services-page-section">
        <div className="container">
          <div className="card-grid" data-reveal>
            {items.map(([title, kicker, description], index) => (
              <article className="card interactive-card service-detail-card" key={title} data-spotlight>
                <span className="card-number">0{index + 1}</span>
                <span className="card-arrow"><ArrowRight /></span>
                <h3>{title}</h3>
                <strong>{kicker}</strong>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-tint pricing-section">
        <div className="container">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">Straightforward starting points</p>
              <h2>Pricing that is easy to understand.</h2>
              <p>Final scope and price depend on your content, page count, and project needs.</p>
            </div>
          </div>
          <div className="pricing-grid" data-reveal>
            <article className="card price-card" data-spotlight>
              <span className="price-tier">Foundation</span><h3>Starter Website</h3>
              <p className="price">From {siteConfig.pricing.starter}</p>
              <p>For newer businesses that need a clear, professional online presence.</p>
            </article>
            <article className="card price-card featured" data-spotlight>
              <span className="price-tier">Most common</span><h3>Business Website</h3>
              <p className="price">From {siteConfig.pricing.business}</p>
              <p>For established businesses that need stronger service pages, lead generation, and local SEO foundations.</p>
            </article>
            <article className="card price-card" data-spotlight>
              <span className="price-tier">Ongoing</span><h3>Website Care</h3>
              <p className="price">From {siteConfig.pricing.care}</p>
              <p>For hosting, maintenance, routine updates, and ongoing support.</p>
            </article>
          </div>
          <p className="price-note" data-reveal><Check size={14} /> All prices are starting points, not fixed quotes. You will receive a clear scope before work begins.</p>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
