import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Get a Free Website Review",
  "Request a practical website review from ForgedLocal for your New Hampshire contractor or local service business.",
  "/contact",
);

export default function ContactPage() {
  return (
    <main>
      <PageHero eyebrow="Free website review">A practical look at what your website could do better.</PageHero>
      <section className="content-section contact-section">
        <div className="container contact-form-container">
          <div data-reveal><ContactForm /></div>
        </div>
      </section>
    </main>
  );
}
