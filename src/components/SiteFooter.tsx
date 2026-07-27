import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navItems, siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p>Fast, professional websites for contractors and local service businesses across New Hampshire.</p>
          <p className="service-area">{siteConfig.serviceArea}</p>
        </div>
        <div>
          <h2>Explore</h2>
          {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href="/privacy">Privacy policy</Link>
        </div>
        <div>
          <h2>Contact</h2>
          <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <p>Serving New Hampshire</p>
        </div>
      </div>
      <div className="container footer-bottom">&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</div>
    </footer>
  );
}
