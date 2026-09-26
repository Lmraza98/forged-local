export const siteConfig = {
  name: "ForgedLocal",
  domain: "https://forgedlocal.com",
  email: "hello@forgedlocal.com",
  serviceArea: "Based in Nashua, NH · On-site in Southern NH and Greater Boston · Remote projects",
  founder: {
    name: "Lucas Raza",
    bio: "Founder of ForgedLocal",
  },
  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
  },
  analyticsId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  contactFormRecipient: process.env.CONTACT_FORM_RECIPIENT ?? "",
  addressVisible: false,
  googleBusinessProfile: "",
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
