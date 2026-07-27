import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="cta-section" data-spotlight>
      <div className="cta-grid" aria-hidden="true" />
      <div className="container cta-inner" data-reveal>
        <div>
          <p className="eyebrow light">A useful place to start</p>
          <h2>Find out what your website could improve.</h2>
          <p>Get a practical review of your mobile experience, messaging, speed, calls to action, credibility, and local search fundamentals.</p>
        </div>
        <Link className="button button-light animated-cta" href="/contact">
          <span>Request a free website review</span><ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
