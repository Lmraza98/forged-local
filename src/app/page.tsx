import Navigation from "@/components/Navigation";
// import { LocalBusinessHero } from "@/components/LocalBusinessHero";
import ScrollButton from "@/components/ScrollButton";
import Test from "@/components/Test";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navigation />
      <main className="w-full">
        {/* <LocalBusinessHero /> */}
        <Test />
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center p-8 sm:p-20">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">Welcome to Forged</h1>
            <p className="text-xl text-gray-600 mb-8">Crafting excellence in every detail</p>
            <ScrollButton />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center p-8 sm:p-20 bg-gray-50">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-5xl font-bold mb-8 text-center">About Us</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-4">
                  We are a team of passionate craftsmen dedicated to creating exceptional experiences.
                  Our commitment to quality and innovation drives everything we do.
                </p>
                <p className="text-lg text-gray-600">
                  With years of experience and a deep understanding of our craft,
                  we deliver solutions that exceed expectations.
                </p>
              </div>
              <div className="relative h-64 md:h-96">
                <Image
                  src="/hammer.png"
                  alt="About us illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="min-h-screen flex items-center justify-center p-8 sm:p-20">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-5xl font-bold mb-12 text-center">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {['Design', 'Development', 'Consulting'].map((service, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold mb-4">{service}</h3>
                  <p className="text-gray-600">
                    Comprehensive {service.toLowerCase()} solutions tailored to your needs.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center p-8 sm:p-20 bg-gray-50">
          <div className="max-w-2xl w-full">
            <h2 className="text-3xl sm:text-5xl font-bold mb-8 text-center">Contact Us</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="py-8 px-6 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
