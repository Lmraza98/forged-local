import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Website Portfolio and Concept Work",
  "View clearly labeled concept websites and sample redesigns for local service businesses.",
  "/work",
);

export default function WorkPage() {
  return (
    <main>
      <PageHero eyebrow="Selected work">Website concepts shaped around real service-business problems.</PageHero>
      <section className="content-section work-page-section">
        <div className="container">
          <div className="work-intro" data-reveal>
            <span>Demonstration work</span>
            <p className="lead">These projects show ForgedLocal&apos;s approach while a public client portfolio is being assembled. They are not presented as real clients or measured case studies.</p>
          </div>
          <div className="work-grid work-page-grid" data-reveal>
            <article className="project project-green" data-spotlight>
              <div className="project-screen"><span>RIDGE &amp; PINE</span><strong>Outdoor spaces, built to last.</strong><i>Request an estimate</i></div>
              <div className="project-copy">
                <small>Concept website · Landscaping</small><h3>Ridge &amp; Pine Landscaping</h3>
                <p><b>Problem:</b> Broad messaging and no clear path to request an estimate.</p>
                <p><b>Approach:</b> Clear service positioning, project-led visuals, and a prominent estimate action.</p>
                <p><b>Intended outcome:</b> Help qualified homeowners understand the offer and make contact.</p>
                <ArrowRight className="project-arrow" />
              </div>
            </article>
            <article className="project project-blue" data-spotlight>
              <div className="project-screen"><span>SUMMIT ELECTRIC</span><strong>Reliable electrical work. Done right.</strong><i>Schedule service</i></div>
              <div className="project-copy">
                <small>Sample redesign · Electrical</small><h3>Summit Electric</h3>
                <p><b>Problem:</b> An outdated layout that is difficult to scan on a phone.</p>
                <p><b>Approach:</b> Mobile-first service paths, credibility details, and direct scheduling options.</p>
                <p><b>Intended outcome:</b> Make it easier for homeowners to choose a service and reach the business.</p>
                <ArrowRight className="project-arrow" />
              </div>
            </article>
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
