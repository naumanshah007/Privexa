/**
 * Site Configuration
 * 
 * Customize this file to match your brand identity.
 * All site-wide settings are defined here for easy updates.
 */

export const siteConfig = {
  // Basic Information
  name: "Privexa",
  companyName: "Privexa Limited",
  companyTagline: "Innovative AI Solutions Across Industries",
  companyDescription: "Delivering cutting-edge AI solutions that transform industries while maintaining the highest standards of privacy, security, and compliance.",
  tagline: "Privacy-First AI Platform", // Product tagline
  description: "Enabling Safe Enterprise AI Without Data Exposure", // Product description
  
  // Domain & URLs
  domain: "privexa.io",
  url: "https://privexa.io",
  
  // Company Details
  company: {
    name: "Privexa Limited",
    location: "Auckland, New Zealand",
    email: "info@privexa.io",
    phone: "+64 (0) X XXX XXXX",
    address: "Auckland, New Zealand",
  },
  
  // Team Contact Information
  team: {
    nauman: {
      name: "Nauman Shah",
      phone: "+642108608617",
      email: "info@privexa.io",
    },
    ehsan: {
      name: "Ehsan Ullah",
      phone: "+64220141390",
      email: "info@privexa.io",
    },
  },
  
  // SEO Defaults
  seo: {
    defaultTitle: "Privexa Limited - Innovative AI Solutions Across Industries",
    defaultDescription: "Delivering cutting-edge AI solutions that transform industries while maintaining the highest standards of privacy, security, and compliance.",
    keywords: [
      // Company-level
      "AI solutions company", "enterprise AI solutions", "AI consulting", 
      "healthcare AI solutions", "financial AI solutions", "accessibility AI",
      "Privexa Limited", "AI innovation", "secure AI automation",
      "AI solutions provider", "enterprise AI consulting",
      // Product-level
      "privacy AI", "on-premise AI", "HIPAA-friendly AI", "GDPR-friendly AI", 
      "PII protection", "enterprise AI security", "data sovereignty", 
      "privacy-first AI", "enterprise AI platform",
    ],
    author: "Privexa Limited",
    ogImage: "/og-image.png",
  },
  
  // Logo Configuration
  logo: {
    src: "/logo.png",
    alt: "Privexa Limited Logo",
    width: 48,
    height: 48,
  },

  // Product Information
  product: {
    name: "Privexa",
    description: "Privacy-First AI Platform",
    logo: {
      src: "/logo.png",
      alt: "Privexa Logo",
    },
  },

  // Products Portfolio
  products: [
    {
      name: "Privexa",
      description: "Privacy-First AI Platform enabling safe enterprise AI without data exposure",
      status: "available",
      icon: "Shield",
    },
    {
      name: "Referral Grading",
      description: "AI-powered system that analyzes thousands of GP requests and suggests best-fit referral paths per hospital policies",
      status: "available",
      icon: "Stethoscope",
    },
    {
      name: "AI Vision Assistant",
      description: "AI-based help app for blind people, serving as their eyes for daily life chores and activities",
      status: "available",
      icon: "Eye",
    },
    {
      name: "Accessibility Solutions",
      description: "Comprehensive AI solutions for disabled persons, designed to enhance independence and quality of life",
      status: "coming-soon",
      icon: "Heart",
    },
  ],

  // Global Presence
  globalPresence: {
    regions: [
      "South Asia",
      "Middle East",
      "USA",
      "EU",
      "Canada",
      "Australia",
      "New Zealand",
    ],
  },

  // Team Expertise
  expertise: {
    talent: "Top 1% in AI and Full Stack Development",
    domains: [
      "Healthcare",
      "Compliance",
      "Cyber Security",
      "Infrastructure",
      "CFT/AML",
      "Banking",
    ],
    specialties: [
      "Agentic AI",
      "Secure AI Automation",
      "Enterprise AI Solutions",
    ],
  },
};

