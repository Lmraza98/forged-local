export const siteConfig = {
  name: "ForgedLocal",
  domain: "https://forgedlocal.com",
  email: "hello@forgedlocal.com",
  phone: "(603) 555-0147",
  phoneHref: "+16035550147",
  serviceArea: "Nashua, Southern New Hampshire, and businesses across New Hampshire",
  founder: {
    name: "Founder name",
    bio: "Add a short founder biography, local connection, and relevant web-development experience before launch.",
  },
  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
  },
  pricing: {
    starter: "$1,500",
    business: "$2,500",
    care: "$99/month",
  },
  analyticsId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  contactFormRecipient: process.env.CONTACT_FORM_RECIPIENT ?? "",
  addressVisible: false,
  googleBusinessProfile: "",
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
