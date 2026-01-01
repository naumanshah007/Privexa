"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

interface HeroProps {
  headline: string;
  subheadline?: string;
  description: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  badge?: {
    text: string;
    icon?: React.ReactNode;
  };
  className?: string;
}

export function Hero({
  headline,
  subheadline,
  description,
  primaryCTA,
  secondaryCTA,
  badge,
  className,
}: HeroProps) {
  return (
    <section className={cn("relative py-12 lg:py-16 xl:py-20 overflow-hidden", className)}>
      {/* Enhanced animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mesh gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-primary-950 to-slate-950" />
        
        {/* Animated gradient orbs - enhanced */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-cyan-500/25 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-purple-500/25 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/15 rounded-full blur-3xl animate-float" />
        
        {/* Additional depth layers */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-400/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-400/10 rounded-full blur-2xl" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-primary-900/5 to-primary-950/30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Compact Logo + Name + Tagline */}
          <div className="text-center mb-4 lg:mb-6 animate-fade-in-up">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex-shrink-0">
                <Image
                  src={siteConfig.logo.src}
                  alt={siteConfig.logo.alt}
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
                {/* Enhanced glow effect */}
                <div className="absolute inset-0 bg-primary-500/30 blur-3xl -z-10 rounded-full animate-pulse-slow" />
                <div className="absolute inset-0 bg-cyan-500/20 blur-2xl -z-10 rounded-full" />
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-1 tracking-tight">
                  {siteConfig.companyName}
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-cyan-300 font-semibold">
                  {siteConfig.companyTagline || siteConfig.tagline}
                </p>
              </div>
            </div>
          </div>

          {/* Badge - subtle, compact */}
          {badge && (
            <div className="flex justify-center mb-4 lg:mb-5 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-xs sm:text-sm font-medium text-cyan-200 shadow-glow">
                {badge.icon}
                <span>{badge.text}</span>
              </div>
            </div>
          )}

          {/* Powerful Headline - single line, gradient */}
          <div className="text-center mb-4 lg:mb-5 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight">
              <span className="text-gradient bg-clip-text text-transparent">
                {headline}
              </span>
            </h1>
          </div>

          {/* Clear Description - more concise */}
          <div className="text-center mb-5 lg:mb-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>
          
          {/* Key Benefit Line */}
          <div className="text-center mb-5 lg:mb-6 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
            <p className="text-sm sm:text-base text-cyan-300/90 font-medium">
              Multiple AI Products • Privacy-First Approach • Industry-Specific Solutions
            </p>
          </div>
          
          {/* Product Count Indicator */}
          <div className="flex justify-center mb-6 lg:mb-7 animate-fade-in-up" style={{ animationDelay: "0.38s" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-lg text-xs sm:text-sm font-medium text-cyan-200/80 backdrop-blur-md border border-cyan-500/20">
              <span className="text-cyan-300 font-semibold">Many Specialized Solutions</span>
              <span className="text-cyan-400/60">•</span>
              <span className="text-cyan-200/70">Available Now</span>
            </div>
          </div>
          
          {/* Value Props - compact horizontal row */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 lg:mb-7 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="px-3 py-1.5 sm:px-4 sm:py-2 glass rounded-full text-xs sm:text-sm font-medium text-cyan-200 backdrop-blur-md border border-cyan-500/30 shadow-glow hover:border-cyan-400/50 transition-all duration-300">
              ✓ Healthcare AI
            </div>
            <div className="px-3 py-1.5 sm:px-4 sm:py-2 glass rounded-full text-xs sm:text-sm font-medium text-cyan-200 backdrop-blur-md border border-cyan-500/30 shadow-glow hover:border-cyan-400/50 transition-all duration-300">
              ✓ Financial AI
            </div>
            <div className="px-3 py-1.5 sm:px-4 sm:py-2 glass rounded-full text-xs sm:text-sm font-medium text-cyan-200 backdrop-blur-md border border-cyan-500/30 shadow-glow hover:border-cyan-400/50 transition-all duration-300">
              ✓ Accessibility AI
            </div>
            <div className="px-3 py-1.5 sm:px-4 sm:py-2 glass rounded-full text-xs sm:text-sm font-medium text-cyan-200 backdrop-blur-md border border-cyan-500/30 shadow-glow hover:border-cyan-400/50 transition-all duration-300">
              ✓ Enterprise Solutions
            </div>
          </div>

          {/* Prominent CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              {primaryCTA && (
                <Button asChild variant="gradient" size="lg" className="group text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-5">
                  <Link href={primaryCTA.href}>
                    {primaryCTA.label}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              )}
              {secondaryCTA && (
                <Button asChild variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-5">
                  <Link href={secondaryCTA.href}>{secondaryCTA.label}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
