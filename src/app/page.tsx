import Link from "next/link";
import { ArrowRight, Cable, Cloud, Laptop, LifeBuoy, ShieldCheck, Workflow } from "lucide-react";
import { CTASection } from "@/components/CTASection";

const services = [
  { icon: LifeBuoy, title: "Everyday IT support", text: "A computer stops working, an account is locked, a printer disappears. Get someone who can trace the problem and help fix it." },
  { icon: Cloud, title: "Microsoft 365 & accounts", text: "Email, shared files, permissions, new hires, and departures set up so your team can get on with work." },
  { icon: Cable, title: "Wi-Fi & connected offices", text: "Help with unreliable connections, office moves, devices, and the network basics your business depends on." },
  { icon: ShieldCheck, title: "Security essentials", text: "Practical steps around MFA, backups, access, and updates to reduce avoidable risk." },
  { icon: Workflow, title: "Software & workflows", text: "Untangle disconnected tools, repeated data entry, and spreadsheets that have become a second job." },
  { icon: Laptop, title: "Setup & projects", text: "A new office, new employees, or a tool that needs rolling out? Get a clear plan and hands-on help." },
];

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org", "@type": "ProfessionalService", name: "ForgedLocal",
    url: "https://forgedlocal.com", areaServed: ["Southern New Hampshire", "Greater Boston"],
    description: "Practical IT support and technology projects for small businesses.",
    serviceType: ["Small business IT support", "Microsoft 365 setup", "Network troubleshooting", "Business software integration"],
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <main>
      <section className="it-hero"><div className="container it-hero-grid">
        <div><p className="eyebrow light">Small business IT · Southern New Hampshire</p>
          <h1>Technology should help you run the business. <em>Not slow it down.</em></h1>
          <p className="lead">ForgedLocal helps small businesses solve everyday IT problems, get their systems organized, and make better use of the tools they already have.</p>
          <div className="button-row"><Link className="button button-light" href="/contact">Tell me what you need <ArrowRight size={18}/></Link><Link className="text-link light-link" href="/services">Explore services <ArrowRight size={17}/></Link></div>
          <p className="hero-fine">Work directly with Lucas. On-site in Southern NH and the Greater Boston area; remote help where it fits.</p>
        </div>
        <div className="it-panel" aria-label="Examples of business IT issues"><div className="panel-top"><span>THE WORK BEHIND THE WORK</span><span>FORGEDLOCAL / IT</span></div>
          <div className="panel-row"><span>01</span><strong>“Our Wi-Fi drops during the day.”</strong><small>Network troubleshooting</small></div>
          <div className="panel-row"><span>02</span><strong>“New hires take forever to set up.”</strong><small>Accounts & devices</small></div>
          <div className="panel-row"><span>03</span><strong>“Nobody knows where that file lives.”</strong><small>Microsoft 365 & process</small></div>
          <div className="panel-row"><span>04</span><strong>“We copy the same info into three tools.”</strong><small>Workflow improvement</small></div>
          <div className="panel-bottom">One point of contact. A clear next step.</div>
        </div>
      </div></section>
      <div className="it-strip"><div className="container">SUPPORT WHEN SOMETHING BREAKS <span/> HELP BEFORE THE NEXT PROBLEM <span/> PROJECTS THAT MAKE WORK EASIER</div></div>
      <section className="section"><div className="container section-heading"><div><p className="eyebrow">Where I can help</p><h2>From the laptop to the larger problem.</h2><p className="lead-small">Sometimes the fix is a setting. Sometimes the way the whole team works needs attention. We start with the actual problem.</p></div></div><div className="container it-service-grid">{services.map(({icon: Icon,title,text},i)=><Link href="/services" className="it-service" key={title}><span className="it-service-top"><Icon size={25}/><small>0{i+1}</small></span><h3>{title}</h3><p>{text}</p><ArrowRight className="it-service-arrow" size={18}/></Link>)}</div></section>
      <section className="section it-approach" id="how-it-works"><div className="container it-approach-grid"><div><p className="eyebrow">How it works</p><h2>Start with the problem in front of you.</h2><p className="lead-small">You don’t need to know which product to buy or how to describe the issue in technical terms.</p><Link href="/contact" className="text-link">Start a conversation <ArrowRight size={17}/></Link></div><ol><li><b>01</b><div><h3>Tell me what is happening</h3><p>Describe what’s broken, unreliable, or taking too much time. I’ll ask a few questions to understand the impact.</p></div></li><li><b>02</b><div><h3>Get a clear recommendation</h3><p>We agree on the next step and scope before work begins. If a specialist or existing product is the better fit, I’ll say so.</p></div></li><li><b>03</b><div><h3>Fix it and document it</h3><p>From troubleshooting to setup or a larger project, the goal is a useful result your team can actually maintain.</p></div></li></ol></div></section>
      <section className="section it-plain"><div className="container it-plain-grid"><p className="eyebrow">The idea behind ForgedLocal</p><div><h2>One person who understands how the pieces fit together.</h2><p>Small businesses often have a website person, an internet provider, several software subscriptions, and no one looking at how it all works together. ForgedLocal is a direct point of contact for the day-to-day IT issues and the practical improvements that follow.</p><p>I’ll work with what you already have when it makes sense. The goal is to solve the problem, not add another tool for its own sake.</p><Link href="/about" className="text-link">Meet Lucas <ArrowRight size={17}/></Link></div></div></section>
      <CTASection/>
    </main>
  </>;
}
