"use client";

import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import { Testimonials } from "@/components/sections/Testimonials";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { 
  Shield, 
  Stethoscope,
  Eye,
  Heart,
  Globe,
  Users,
  Zap,
  CheckCircle2,
  ArrowRight,
  PlayCircle
} from "lucide-react";

export default function HomePage() {
  const testimonials = [
    {
      name: "Healthcare IT Director",
      role: "Director of IT",
      company: "Healthcare Industry",
      content: "After seeing the Privexa demo, I was impressed by how it enables AI for patient data analysis with HIPAA-friendly architecture. The on-premise deployment approach addresses our key compliance concerns.",
    },
    {
      name: "Financial Services CTO",
      role: "Chief Technology Officer",
      company: "Financial Services Industry",
      content: "The multi-layer PII detection demonstrated in the Privexa demo was impressive. The complete data sovereignty model gives us confidence for our future AI initiatives in the financial sector.",
    },
    {
      name: "Government Security Architect",
      role: "Security Architect",
      company: "Government Sector",
      content: "Privexa's on-premise architecture showcased in the demo ensures data never leaves our infrastructure. The comprehensive audit logging capabilities align well with our compliance requirements.",
    },
  ];

  return (
    <>
      <Hero
        headline="Delivering Innovative AI Solutions Across Industries"
        description="We build specialized AI solutions for healthcare, finance, accessibility, and enterprise—each designed to solve real-world challenges while maintaining the highest standards of privacy and compliance."
        primaryCTA={{
          label: "Explore Our Products",
          href: "/products",
        }}
        secondaryCTA={{
          label: "Learn About Us",
          href: "/about",
        }}
        badge={{
          text: "Multi-Product AI Company",
          icon: <Zap className="w-4 h-4" />,
        }}
        className="bg-slate-950 dark:bg-slate-950 text-white"
      />

      {/* Company Overview Section */}
      <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gradient">About {siteConfig.companyName}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {siteConfig.companyName} is a technology company dedicated to delivering cutting-edge AI solutions 
              that transform industries while maintaining the highest standards of privacy, security, and compliance. 
              We combine top-tier talent with deep domain expertise to build a diverse portfolio of specialized AI products, 
              each designed to address specific industry challenges—from healthcare and finance to accessibility and enterprise solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <Card variant="default" className="p-6 lg:p-8 text-center group hover:shadow-colored transition-all duration-300 h-full">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <CardTitle className="text-lg lg:text-xl mb-2 lg:mb-3">Privacy-First</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                We build every solution with privacy and data sovereignty as foundational principles, 
                ensuring organizations maintain complete control over their sensitive data.
              </CardDescription>
            </Card>

            <Card variant="default" className="p-6 lg:p-8 text-center group hover:shadow-colored transition-all duration-300 h-full">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <CardTitle className="text-lg lg:text-xl mb-2 lg:mb-3">Innovation-Driven</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                Our team of top 1% talent in AI and full stack development brings cutting-edge 
                technology and innovative approaches to solve complex industry challenges.
              </CardDescription>
            </Card>

            <Card variant="default" className="p-6 lg:p-8 text-center group hover:shadow-colored transition-all duration-300 h-full sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <CardTitle className="text-lg lg:text-xl mb-2 lg:mb-3">Compliance-Focused</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                We understand regulatory requirements and build compliance into every aspect of our 
                solutions, from audit logging to data handling procedures.
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gradient">Our Products & Solutions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {siteConfig.companyName} delivers a portfolio of specialized AI solutions across multiple industries. 
              Each product is designed to address specific challenges while maintaining the highest standards of security and compliance. 
              Our flagship product, <span className="font-semibold text-gray-900 dark:text-gray-100">Privexa</span>, is one of several solutions we&apos;ve built to serve different market needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
            {siteConfig.products.map((product, index) => {
              const iconMap: Record<string, typeof Shield> = {
                Shield,
                Stethoscope,
                Eye,
                Heart,
              };
              const IconComponent = iconMap[product.icon] || Shield;

              return (
                <Card
                  key={index}
                  variant="default"
                  className="p-5 sm:p-6 group hover:shadow-colored-lg transition-all duration-300 h-full flex flex-col"
                >
                  <CardHeader className="flex-1 pb-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="mb-3">
                      <CardTitle className="text-base sm:text-lg font-bold mb-2 line-clamp-2 min-h-[3rem]">{product.name}</CardTitle>
                      <div className="mt-2">
                        {product.status === "coming-soon" && (
                          <span className="inline-block text-xs px-2.5 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full font-medium">
                            Coming Soon
                          </span>
                        )}
                        {product.status === "available" && (
                          <span className="inline-block text-xs px-2.5 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full font-medium">
                            Available
                          </span>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col pt-0">
                    <CardDescription className="text-xs sm:text-sm leading-relaxed mb-4 flex-1">
                      {product.description}
                    </CardDescription>
                    {product.status === "available" && (
                      <div className="mt-auto pt-2">
                        {product.name === "Privexa" ? (
                          <div className="flex flex-col items-center gap-2 sm:gap-3">
                            <div className="relative w-8 h-8 sm:w-10 sm:h-10 opacity-50 mb-1 sm:mb-2">
                              <Image
                                src={siteConfig.logo.src}
                                alt={siteConfig.logo.alt}
                                width={48}
                                height={48}
                                className="object-contain"
                              />
                            </div>
                            <Link href="/products#demo" className="w-full">
                              <Button variant="outline" size="sm" className="w-full group min-h-[44px] text-xs sm:text-sm">
                                <PlayCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                                Watch Demo
                              </Button>
                            </Link>
                          </div>
                        ) : (
                          <Link 
                            href={
                              product.name === "Gynecology Referral Grading System"
                                ? "/products/gynecology-referral"
                                : product.name === "AI Vision Assistant"
                                ? "/products/ai-vision-assistant"
                                : "/products"
                            }
                            className="w-full"
                          >
                            <Button variant="outline" size="sm" className="w-full group min-h-[44px] text-xs sm:text-sm">
                              Learn More
                              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Link href="/products">
              <Button variant="gradient" size="lg" className="group">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Global Presence & Expertise Section */}
      <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Global Presence */}
            <Card variant="gradient-border" className="p-8">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Global Presence</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 mb-6">
                  {siteConfig.companyName} has a state-of-the-art team and strategic partners across key regions, 
                  enabling us to deliver world-class AI solutions with local expertise and global reach.
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  {siteConfig.globalPresence.regions.map((region, index) => (
                    <div
                      key={index}
                      className="px-3 py-2.5 bg-gradient-to-br from-primary-50 to-cyan-50 dark:from-primary-900/20 dark:to-cyan-900/20 rounded-lg border border-primary-200 dark:border-primary-800 text-center hover:shadow-md transition-shadow"
                    >
                      <p className="font-semibold text-xs sm:text-sm text-gray-900 dark:text-gray-100">{region}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Expertise */}
            <Card variant="gradient-border" className="p-8">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Our Expertise</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 mb-4">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">{siteConfig.expertise.talent}</span>
                </p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">Domain Expertise:</p>
                  <div className="flex flex-wrap gap-2">
                    {siteConfig.expertise.domains.map((domain, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white dark:bg-gray-800 border border-primary-300 dark:border-primary-700 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                      >
                        {domain}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">Specialties:</p>
                  <div className="flex flex-wrap gap-2">
                    {siteConfig.expertise.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-br from-primary-500 to-cyan-500 text-white rounded-full text-xs font-medium shadow-lg"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Testimonials
        title="What Industry Professionals Say"
        testimonials={testimonials}
      />

      <CTA
        title="Ready to Transform Your Industry with AI?"
        description="Explore our products or get in touch to learn how Privexa Limited can help solve your unique challenges."
        primaryCTA={{
          label: "View Products",
          href: "/products",
        }}
        secondaryCTA={{
          label: "Contact Us",
          href: "/contact",
        }}
      />
    </>
  );
}
