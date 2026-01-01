import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "AI Vision Assistant",
  description: "AI-based help app for blind and visually impaired people, serving as their eyes for daily life chores and activities. Empowering independence through advanced computer vision technology.",
  keywords: [
    "AI vision assistant",
    "accessibility AI",
    "blind assistance",
    "visual impairment",
    "computer vision",
    "accessibility technology",
    "assistive technology",
    "vision AI",
  ],
};

export default function AIVisionAssistantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

