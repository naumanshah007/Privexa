import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Products & Solutions",
  description: `Explore ${siteConfig.companyName}'s innovative AI solutions including Privexa, healthcare systems, and accessibility solutions. Each product is designed to address specific industry challenges while maintaining the highest standards of privacy, security, and compliance.`,
  keywords: [
    "AI products",
    "enterprise AI",
    "healthcare AI",
    "accessibility AI",
    "privacy-first AI",
    "AI solutions",
    "Privexa",
    "Gynecology Referral System",
    "AI Vision Assistant",
    "enterprise AI platform",
  ],
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

