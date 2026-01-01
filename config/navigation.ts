/**
 * Navigation Configuration
 * 
 * Define your site's navigation menu structure here.
 * Add, remove, or reorder items as needed.
 */

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const navigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
    description: "Return to homepage",
  },
  {
    label: "Products",
    href: "/products",
    description: "Explore our products and solutions",
  },
  {
    label: "About",
    href: "/about",
    description: "Learn about us",
  },
  {
    label: "Pricing",
    href: "/pricing",
    description: "View pricing information",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Get in touch",
  },
];

// CTA Button in Header
export const headerCTA = {
  label: "Request Demo",
  href: "/contact",
};

