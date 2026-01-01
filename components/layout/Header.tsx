"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Navigation } from "./Navigation";
import { navigation, headerCTA } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b transition-all duration-300",
      scrolled 
        ? "glass-strong border-white/10 dark:border-gray-800/50 shadow-lg backdrop-blur-xl" 
        : "border-gray-200/50 dark:border-gray-800/50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Logo href="/" size="md" />
          </div>

          {/* Desktop Navigation */}
          <Navigation />

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button asChild variant="gradient" size="sm">
              <Link href={headerCTA.href}>{headerCTA.label}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden -m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200/50 dark:border-gray-800/50 glass-strong animate-slide-in">
          <div className="space-y-1 px-4 pb-4 pt-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block rounded-lg px-3 py-2 text-base font-medium transition-colors",
                  "text-gray-900 hover:bg-primary-50 hover:text-primary-700 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-primary-400"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button asChild variant="gradient" className="w-full">
                <Link href={headerCTA.href} onClick={() => setMobileMenuOpen(false)}>
                  {headerCTA.label}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
