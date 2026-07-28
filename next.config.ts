import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/how-it-works", destination: "/services", permanent: true },
      { source: "/hvac-answering-service", destination: "/services", permanent: true },
      { source: "/plumber-answering-service", destination: "/services", permanent: true },
      { source: "/electrician-answering-service", destination: "/services", permanent: true },
      { source: "/roofing-answering-service", destination: "/services", permanent: true },
      { source: "/landscaping-answering-service", destination: "/services", permanent: true },
      { source: "/sms-signup", destination: "/contact", permanent: true },
      { source: "/sms-consent", destination: "/privacy", permanent: true },
      { source: "/terms", destination: "/privacy", permanent: true },
      { source: "/thank-you", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
