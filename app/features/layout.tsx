import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description: "This page redirects to our Products page. Explore all of Privexa Limited's AI solutions and their features.",
  keywords: ["AI features", "product features", "AI solutions"],
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

