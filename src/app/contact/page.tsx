import { Check, Clock3, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata = pageMetadata(
  "Get a Free Website Review",
  "Request a practical website review from ForgedLocal for your New Hampshire contractor or local service business.",
  "/contact",
);

export default function ContactPage() {
  return (
    <main>
      <PageHero eyebrow="Free website review">A practical look at what your website could do better.</PageHero>
      <section className="content-section contact-section">
        <div className="container contact-layout">
          <aside className="contact-details" data-reveal>
            <p className="eyebrow">A useful first conversation</p>
            <h2>Clear feedback. Sensible next steps.</h2>
            <p>No long sales presentation. Tell us about your business and where the current website falls short. We&apos;ll review the essentials and suggest sensible next steps.</p>
            <h3>The review can cover:</h3>
            <ul className="review-list">
              {["Mobile usability", "Website speed", "Clarity of services", "Calls to action", "Credibility", "Local SEO fundamentals"].map((item) => <li key={item}><Check />{item}</li>)}
            </ul>
            <div className="contact-assurances">
              <span><Clock3 />Brief and practical</span>
              <span><ShieldCheck />No-pressure follow-up</span>
            </div>
            <h3>Prefer to contact us directly?</h3>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a>
          </aside>
          <div data-reveal><ContactForm /></div>
        </div>
      </section>
    </main>
  );
}
