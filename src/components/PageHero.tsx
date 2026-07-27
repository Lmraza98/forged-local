import type { ReactNode } from "react";

export function PageHero({ eyebrow, children }: { eyebrow: string; children: ReactNode }) {
  return (
    <section className="page-hero">
      <div className="page-hero-grid" aria-hidden="true" />
      <div className="page-hero-glow" aria-hidden="true" />
      <div className="container narrow" data-reveal>
        <p className="eyebrow"><span className="eyebrow-pulse" />{eyebrow}</p>
        <h1>{children}</h1>
        <span className="page-hero-rule" aria-hidden="true" />
      </div>
    </section>
  );
}
