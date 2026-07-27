import { MessageSquare, Route, Sparkles } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata = pageMetadata(
  "About ForgedLocal",
  "ForgedLocal is a founder-led New Hampshire web-development business serving contractors and local service businesses.",
  "/about",
);

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="About ForgedLocal">Direct, practical website help for local business owners.</PageHero>
      <section className="content-section">
        <div className="container split about-intro">
          <div data-reveal>
            <p className="eyebrow">A focused web-development business</p>
            <h2>No account handoffs. No mystery process.</h2>
          </div>
          <div data-reveal>
            <p className="lead-small">ForgedLocal is a founder-led business serving contractors and local service companies in Nashua, Southern New Hampshire, and beyond.</p>
            <p>Clients work directly with the person planning, writing, designing, and building the website. That keeps communication clear, recommendations practical, and the finished site connected to the goals discussed at the start.</p>
            <p>The approach is intentionally lean: understand the business, solve the most important website problems, launch a strong foundation, and improve it as the business grows.</p>
          </div>
        </div>
        <div className="container value-rail" data-reveal>
          <div data-spotlight><MessageSquare /><span>Direct</span><p>One clear point of contact.</p></div>
          <div data-spotlight><Route /><span>Practical</span><p>Recommendations tied to business goals.</p></div>
          <div data-spotlight><Sparkles /><span>Detailed</span><p>Care in every visible interaction.</p></div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="container">
          <div className="founder-card" data-reveal data-spotlight>
            <div className="founder-photo">
              <span className="portrait-grid" aria-hidden="true" />
              <span>Founder photo<br />placeholder</span>
            </div>
            <div className="founder-copy">
              <p className="eyebrow">Meet the founder</p>
              <h2>{siteConfig.founder.name}</h2>
              <p className="lead-small">{siteConfig.founder.bio}</p>
              <p><strong>Before launch:</strong> replace this clearly marked section with an approved photo and accurate biography. No personal details have been invented.</p>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
