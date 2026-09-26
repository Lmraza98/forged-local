import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Contact ForgedLocal for IT Help",
  "Tell ForgedLocal about your small business IT issue or technology project.",
  "/contact",
);

export default function ContactPage() {
  return (
    <main>
      <PageHero eyebrow="Get in touch">Tell us what’s going on with your technology.</PageHero>
      <section className="content-section contact-section">
        <div className="container contact-form-container">
          <div data-reveal><ContactForm /></div>
        </div>
      </section>
    </main>
  );
}
