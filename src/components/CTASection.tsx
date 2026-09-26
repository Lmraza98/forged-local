import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="cta-section" data-spotlight>
      <div className="cta-grid" aria-hidden="true" />
      <div className="container cta-inner" data-reveal>
        <div>
          <p className="eyebrow light">A useful place to start</p>
          <h2>What’s getting in the way of your work?</h2>
          <p>Tell us what is happening with your technology. We’ll help you figure out the next step.</p>
        </div>
        <Link className="button button-light animated-cta" href="/contact">
          <span>Get in touch</span><ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
