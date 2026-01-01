"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface CTAProps {
  title: string;
  description?: string;
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  className?: string;
}

export function CTA({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  className,
}: CTAProps) {
  return (
    <section className={cn("relative py-16 lg:py-24 overflow-hidden", className)}>
      {/* Enhanced gradient background with better colors */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient - deeper, richer blues */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-900 to-slate-950" />
        
        {/* Animated gradient orbs */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-3xl animate-float" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        {/* Radial gradient for depth */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-primary-800/10 to-primary-950/40" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Content Card with glassmorphism */}
          <div className="glass-strong rounded-2xl p-8 lg:p-12 border border-white/10 shadow-2xl backdrop-blur-xl">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 lg:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                  {title}
                </span>
              </h2>
              {description && (
                <p className="text-base sm:text-lg lg:text-xl text-slate-200 mb-8 lg:mb-10 leading-relaxed max-w-2xl mx-auto">
                  {description}
                </p>
              )}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild variant="gradient" size="lg" className="group text-base sm:text-lg px-8 py-6 shadow-xl hover:shadow-2xl">
                  <Link href={primaryCTA.href}>
                    {primaryCTA.label}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                {secondaryCTA && (
                  <Button asChild variant="outline" size="lg" className="border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 backdrop-blur-sm text-base sm:text-lg px-8 py-6">
                    <Link href={secondaryCTA.href}>{secondaryCTA.label}</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
