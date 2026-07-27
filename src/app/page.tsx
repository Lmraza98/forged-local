import Link from "next/link";
import {
  ArrowRight,
  Check,
  Gauge,
  MapPin,
  MessageSquare,
  Smartphone,
  Wrench,
} from "lucide-react";
import { CTASection } from "@/components/CTASection";

const services = [
  ["New business websites", "A credible, clear website that makes it easy for customers to understand your work and ask for a quote."],
  ["Website redesigns", "Replace an outdated or confusing site with one that works well on phones and gives visitors a next step."],
  ["Local SEO foundations", "Build the page structure, service messaging, metadata, and technical basics that help search engines understand your business."],
  ["Google Business Profile help", "Make your profile more complete, consistent, and useful to nearby customers searching for your services."],
  ["Hosting and maintenance", "Keep your website secure, updated, backed up, and supported without having to manage it yourself."],
] as const;

const process = [
  ["Review", "We look at your current site, goals, customers, and what is getting in the way."],
  ["Plan", "You get a focused recommendation, clear scope, and straightforward starting price."],
  ["Build", "We write, design, and build the site around the questions your customers need answered."],
  ["Launch", "We test the details, connect the essentials, and put the new site live."],
  ["Support", "You have a direct contact for updates, maintenance, and practical next steps."],
] as const;

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ForgedLocal",
    url: "https://forgedlocal.com",
    areaServed: { "@type": "State", name: "New Hampshire" },
    description: "Web design and website redesign for contractors and local service businesses in New Hampshire.",
    serviceType: ["Web design", "Website redesign", "Local SEO foundations", "Website maintenance"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main>
        <section className="hero" data-spotlight>
          <div className="hero-grid-pattern" aria-hidden="true" />
          <div className="hero-orbit" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy" data-reveal>
              <p className="eyebrow hero-eyebrow">
                <span className="eyebrow-pulse" />
                <MapPin size={15} /> New Hampshire web design
              </p>
              <h1>
                <span className="hero-line">Websites built to</span>
                <span className="hero-line">bring local businesses</span>
                <span className="hero-line accent-line">more calls.</span>
              </h1>
              <p className="lead">
                ForgedLocal builds fast, professional websites for contractors and service businesses across New Hampshire—so the right customers can find you, trust you, and get in touch.
              </p>
              <div className="button-row">
                <Link className="button animated-cta" href="/contact">
                  <span>Get a free website review</span><ArrowRight size={18} />
                </Link>
                <Link className="text-link" href="/work">View our work <ArrowRight size={17} /></Link>
              </div>
              <div className="hero-note">
                <span className="status-dot" />
                Straightforward advice. Clear scope. No pressure.
              </div>
            </div>

            <div className="hero-visual" aria-label="Example of a well-structured contractor website" data-reveal data-spotlight>
              <div className="visual-aura" aria-hidden="true" />
              <div className="browser">
                <div className="browser-bar">
                  <div><i /><i /><i /></div>
                  <span>yourbusiness.com</span>
                  <b>Live</b>
                </div>
                <div className="mock-site">
                  <div className="mock-nav"><b>Ridge & Pine</b><span>Services&nbsp;&nbsp; Work&nbsp;&nbsp; Contact</span></div>
                  <p>LOCAL LANDSCAPE DESIGN &amp; BUILD</p>
                  <h2>Outdoor spaces built for New England.</h2>
                  <div className="mock-button">Request an estimate <ArrowRight size={10} /></div>
                  <div className="mock-photo">
                    <div className="mock-landscape" aria-hidden="true"><i /><i /><i /></div>
                    <span>Clear message</span><span>Strong next step</span>
                  </div>
                </div>
              </div>
              <div className="visual-tag"><Check size={17} /> Built to work on every screen</div>
              <div className="visual-system-card" aria-hidden="true">
                <span>Website system</span>
                <b>Message → Trust → Action</b>
              </div>
            </div>
          </div>
          <div className="hero-scroll-cue" aria-hidden="true"><span />Explore</div>
        </section>

        <section className="benefit-bar">
          <div className="container benefit-grid" data-reveal>
            <span><Smartphone />Built for mobile</span>
            <span><MessageSquare />Designed for inquiries</span>
            <span><MapPin />Local SEO foundations</span>
            <span><Wrench />Dependable support</span>
          </div>
        </section>

        <section className="section problem-section">
          <div className="section-index" aria-hidden="true">01 / 05</div>
          <div className="container split">
            <div data-reveal>
              <p className="eyebrow">Your website has a job to do</p>
              <h2>A weak website quietly costs you opportunities.</h2>
            </div>
            <div data-reveal>
              <p className="lead-small">When someone finds your business, they make a quick judgment. An outdated, slow, or confusing site can send a good customer back to Google—even when your actual work is excellent.</p>
              <ul className="check-list">
                {[
                  "Looks poor or is hard to use on a phone",
                  "Does not clearly explain your services or service area",
                  "Makes it difficult to call or request a quote",
                  "Feels less established than the business behind it",
                  "Is slow, outdated, or difficult to get updated",
                ].map((item) => <li key={item}><Check />{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="section section-tint services-section">
          <div className="section-index" aria-hidden="true">02 / 05</div>
          <div className="container">
            <div className="section-heading" data-reveal>
              <div><p className="eyebrow">Practical website services</p><h2>Everything you need for a stronger local presence.</h2></div>
              <Link className="text-link" href="/services">Explore services <ArrowRight size={17} /></Link>
            </div>
            <div className="card-grid services-grid" data-reveal>
              {services.map(([title, text], index) => (
                <Link className="card interactive-card" href="/services" key={title} data-spotlight>
                  <span className="card-number">0{index + 1}</span>
                  <span className="card-arrow"><ArrowRight /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section">
          <div className="section-index" aria-hidden="true">03 / 05</div>
          <div className="container">
            <div className="section-heading" data-reveal>
              <div><p className="eyebrow">A manageable process</p><h2>From first review to launch, without the runaround.</h2></div>
            </div>
            <ol className="process" data-reveal>
              {process.map(([title, description], index) => (
                <li key={title}>
                  <span><b>{index + 1}</b><i /></span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section work-preview">
          <div className="section-index" aria-hidden="true">04 / 05</div>
          <div className="container">
            <div className="section-heading" data-reveal>
              <div><p className="eyebrow">Example work</p><h2>Clear, credible websites for service businesses.</h2></div>
              <Link className="text-link" href="/work">See all work <ArrowRight size={17} /></Link>
            </div>
            <div className="work-grid" data-reveal>
              <article className="project project-green" data-spotlight>
                <div className="project-screen"><span>RIDGE &amp; PINE</span><strong>Outdoor spaces, built to last.</strong><i>Request an estimate</i></div>
                <div className="project-copy"><small>Concept website · Landscaping</small><h3>Ridge &amp; Pine Landscaping</h3><p>A demonstration of clearer service messaging, strong project imagery, and a direct estimate path.</p><ArrowRight className="project-arrow" /></div>
              </article>
              <article className="project project-blue" data-spotlight>
                <div className="project-screen"><span>SUMMIT ELECTRIC</span><strong>Reliable electrical work. Done right.</strong><i>Schedule service</i></div>
                <div className="project-copy"><small>Sample redesign · Electrical</small><h3>Summit Electric</h3><p>A sample redesign focused on mobile usability, trust, and helping homeowners choose the right service.</p><ArrowRight className="project-arrow" /></div>
              </article>
            </div>
          </div>
        </section>

        <section className="section why">
          <div className="section-index" aria-hidden="true">05 / 05</div>
          <div className="container split">
            <div data-reveal>
              <p className="eyebrow">Why ForgedLocal</p>
              <h2>A practical partner, not another layer of complexity.</h2>
              <p className="lead-small">ForgedLocal is built for owners who want a professional website without agency theater or a technical project to manage.</p>
            </div>
            <div className="why-grid" data-reveal>
              {[
                [MessageSquare, "Direct communication", "Work directly with the person planning, writing, and building your website."],
                [Gauge, "Fast by default", "Lean, carefully built pages that load quickly and stay easy to use."],
                [Wrench, "Clear scope", "Know what is included, what it costs, and what happens next."],
                [MapPin, "Local understanding", "Messaging shaped around how New Hampshire customers choose local services."],
              ].map(([Icon, title, description]) => (
                <div className="why-item" key={String(title)} data-spotlight>
                  {typeof Icon !== "string" && <Icon />}
                  <h3>{String(title)}</h3><p>{String(description)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CTASection />
      </main>
    </>
  );
}
