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
                ForgedLocal builds fast, professional websites for contractors and service businesses across New Hampshire.
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

            <svg
              className="nh-outline"
              viewBox="0 0 228 300"
              fill="none"
              aria-hidden="true"
            >
              <path
                pathLength="1"
                d="M197.6 237.0L200.0 237.8L201.0 239.3L199.9 243.0L198.8 243.6L199.4 245.1L198.2 248.4L199.0 250.5L207.1 255.9L212.9 256.5L213.4 260.0L221.6 266.8L223.8 267.6L226.5 271.0L228.0 274.7L223.9 275.2L218.7 274.1L215.8 272.4L214.2 270.1L210.6 273.4L209.6 279.6L199.8 279.9L196.6 281.2L192.2 278.6L188.9 278.2L182.9 280.2L175.5 281.4L173.9 282.6L171.7 287.4L163.8 285.7L159.9 287.1L157.7 289.2L158.2 295.4L153.3 294.3L150.9 294.8L145.2 300.0L11.3 296.6L7.7 291.3L4.8 292.1L5.6 290.5L1.8 287.3L0.0 282.1L0.5 278.4L2.7 277.2L3.7 274.9L2.7 270.6L4.5 269.4L9.6 268.4L11.0 267.1L10.9 265.4L13.1 264.3L10.9 262.2L11.1 260.4L10.3 259.1L14.0 255.8L13.1 253.3L14.3 251.5L13.4 249.4L11.5 248.2L12.0 245.3L13.0 244.5L12.3 243.0L13.7 241.8L13.6 236.1L16.2 234.1L18.6 229.2L16.9 227.1L19.2 224.1L16.6 223.5L16.2 221.8L17.7 220.1L18.9 211.5L20.2 209.9L20.2 208.3L18.2 206.2L20.3 203.0L20.3 199.2L26.3 196.0L25.6 194.1L29.2 188.3L29.6 183.9L32.9 180.7L37.1 179.4L40.5 176.5L40.4 174.9L42.9 172.4L42.8 165.8L44.8 165.2L44.3 163.4L50.2 159.4L50.5 156.3L53.6 154.1L50.9 153.8L50.6 150.8L52.1 149.9L52.3 148.5L53.7 149.0L53.1 147.6L54.6 147.6L55.5 146.4L55.1 145.2L57.0 144.4L56.2 143.5L58.5 142.1L58.0 141.4L60.4 141.1L58.9 140.1L60.2 139.7L60.5 138.6L58.6 139.0L57.7 137.4L60.2 135.0L59.2 134.4L59.6 132.1L56.5 128.3L58.6 122.7L57.0 120.1L57.4 119.1L56.3 118.7L60.3 115.4L60.7 113.1L63.0 113.1L66.2 111.3L71.7 111.5L74.4 110.1L78.9 111.4L85.4 109.4L85.4 106.2L87.0 106.0L86.7 105.1L87.7 104.3L91.4 103.3L93.5 104.0L94.5 103.0L98.3 102.6L101.2 101.1L101.1 100.1L103.1 99.5L103.8 97.4L105.6 96.7L104.7 95.7L106.3 94.5L107.2 94.7L106.1 95.4L107.1 95.6L108.0 94.3L110.2 94.2L110.8 92.5L111.7 92.7L111.4 91.9L112.7 92.4L110.8 90.2L112.3 89.8L113.3 88.3L110.4 85.8L111.3 85.1L114.7 85.3L116.1 84.4L115.6 82.9L116.3 83.7L117.6 82.5L114.4 81.0L115.4 80.4L115.2 78.2L116.2 78.5L115.0 77.7L116.2 77.7L114.2 76.9L114.9 76.3L114.4 75.1L112.7 75.3L112.9 74.7L111.5 74.3L112.2 72.7L110.5 72.2L110.8 70.0L107.9 67.1L108.1 66.3L107.1 66.4L106.4 63.6L113.2 59.2L113.7 57.3L112.7 56.4L115.7 53.9L115.2 52.5L115.9 51.0L122.2 46.1L122.4 45.3L118.9 42.0L119.9 41.6L119.7 39.2L118.8 39.2L119.5 38.9L116.8 36.9L118.1 35.2L120.6 34.2L122.9 35.0L125.6 33.6L121.5 33.6L122.6 30.2L120.8 29.6L121.9 28.7L121.8 27.1L125.3 25.5L127.5 22.2L129.8 20.9L128.8 18.8L133.4 11.7L132.7 10.4L128.2 7.7L130.7 8.4L132.8 7.2L134.9 8.3L138.1 5.9L137.6 4.0L140.4 3.8L146.4 0.4L146.8 1.3L148.6 1.3L149.2 3.8L150.8 4.2L152.6 6.4L156.5 5.9L158.4 7.5L160.4 6.3L162.1 7.6L164.8 5.8L166.8 2.9L167.0 1.2L169.4 0.0L175.2 69.9L182.2 199.5L184.8 201.7L184.4 203.0L183.2 203.1L184.3 206.6L182.8 209.8L181.8 210.1L183.6 211.2L182.9 213.3L183.6 214.7L180.6 217.6L181.1 219.3L180.5 220.3L182.2 225.0L184.2 226.7L187.0 226.5L187.8 227.9L189.3 228.4L189.1 229.8L191.0 230.8L189.8 231.6L192.5 232.6L192.5 233.7L197.2 235.9L197.6 237.0Z"
              />
            </svg>

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
