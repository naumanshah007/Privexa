import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Referral Grading System",
  description: "AI-powered system that analyzes thousands of GP referral requests and suggests best-fit referral paths per hospital policies. Streamline healthcare workflows and improve patient care outcomes.",
  keywords: [
    "referral grading system",
    "healthcare AI",
    "referral management",
    "hospital AI solutions",
    "healthcare automation",
    "AI healthcare",
    "referral grading",
    "healthcare workflow",
    "medical referral system",
  ],
};

export default function GynecologyReferralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

