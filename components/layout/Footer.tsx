import Link from "next/link";
import { siteConfig } from "@/config/site";
import { navigation } from "@/config/navigation";
import { socialLinks } from "@/config/social";
import { Logo } from "@/components/ui/Logo";
import * as LucideIcons from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200/50 dark:border-gray-800/50 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Logo href="/" size="md" />
            <p className="mt-6 text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks
                .filter((link) => link.href)
                .map((link) => {
                  const IconComponent = (LucideIcons as any)[link.icon] as React.ComponentType<{ className?: string }>;
                  if (!IconComponent) return null;
                  
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 hover:scale-110 transform"
                      aria-label={link.name}
                    >
                      <IconComponent className="h-5 w-5" />
                    </Link>
                  );
                })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a 
                  href={`mailto:${siteConfig.company.email}`}
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                >
                  {siteConfig.company.email}
                </a>
              </li>
              <li>{siteConfig.company.address}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with gradient accent */}
        <div className="mt-12 pt-8 border-t border-gray-200/50 dark:border-gray-800/50 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} {siteConfig.companyName}. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 flex items-center gap-2">
            <span className="text-xs text-gray-400">Built with</span>
            <span className="text-primary-600 dark:text-primary-400">❤️</span>
            <span className="text-xs text-gray-400">in Auckland, New Zealand</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
