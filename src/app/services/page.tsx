import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Small Business IT Services", "IT support, Microsoft 365, office networks, security basics, and technology projects for small businesses in Southern New Hampshire and Greater Boston.", "/services");
const items = [
  ["IT support & troubleshooting", "When work stops, find the cause.", "Help with computers, printers, accounts, email, file access, and the everyday issues that leave people stuck. Remote or on-site support depends on the issue and location."],
  ["Microsoft 365 & business accounts", "Keep the team set up and access under control.", "Set up users, email, shared files, permissions, MFA, and practical onboarding and offboarding processes. Make the tools your team pays for easier to use."],
  ["Networks, Wi-Fi & office setup", "A connection should be dependable.", "Troubleshoot connectivity, plan small-office Wi-Fi improvements, and coordinate the moving parts when devices or an office need setting up."],
  ["Security & backup basics", "Reduce the preventable problems.", "Review account access, MFA, software updates, and backup practices. Get a prioritized list of improvements and help putting them in place."],
  ["Software & workflow improvements", "Make the tools fit the work.", "Look at how information moves between your team, spreadsheets, and business software. Improve the process, configure what you own, connect systems, or build a focused internal tool when needed."],
  ["Ongoing IT help", "A familiar contact as your business changes.", "After an initial conversation, we can discuss a support arrangement suited to your systems and needs. Scope, availability, and pricing are agreed in writing."],
] as const;
export default function ServicesPage(){return <main><PageHero eyebrow="What ForgedLocal does">IT help for the problems that interrupt your work—and the systems behind them.</PageHero><section className="content-section"><div className="container"><p className="lead-small service-intro">Bring the actual issue. You don’t have to decide which service it belongs to before reaching out.</p><div className="it-service-grid">{items.map(([title,kicker,description],i)=><article className="it-service" key={title}><span className="it-service-top"><small>0{i+1}</small></span><h2>{title}</h2><strong>{kicker}</strong><p>{description}</p></article>)}</div><div className="service-note"><h2>Have something outside this list?</h2><p>Describe it. If I can help, I’ll explain how. If it needs a different specialist, I’ll be direct about that.</p><Link className="text-link" href="/contact">Talk through the problem <ArrowRight size={17}/></Link></div></div></section><CTASection/></main>}
