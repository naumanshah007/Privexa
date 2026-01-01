"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { 
  Shield, 
  Stethoscope,
  Eye,
  Heart,
  ArrowRight,
  CheckCircle2,
  Lock,
  Database,
  FileText,
  Image as ImageIcon,
  Zap,
  Code,
  Upload,
  Search,
  Send,
  RotateCcw,
  Building2,
  Stethoscope as StethoscopeIcon,
  Eye as EyeIcon
} from "lucide-react";

export default function ProductsPage() {
  const iconMap: Record<string, typeof Shield> = {
    Shield,
    Stethoscope,
    Eye,
    Heart,
  };

  // Privexa product features (detailed)
  const privexaFeatures = [
    {
      title: "Multi-Layer PII Detection",
      description: "Custom knowledge base + pattern matching + NLP + AI models for comprehensive entity detection.",
      icon: Eye,
    },
    {
      title: "On-Premise Deployment",
      description: "100% on-premise deployment ensures all sensitive data remains within your infrastructure.",
      icon: Database,
    },
    {
      title: "HIPAA/GDPR Friendly",
      description: "Designed with compliance frameworks in mind. Built-in audit logging and data protection features.",
      icon: Shield,
    },
    {
      title: "Document Processing",
      description: "PDF, DOCX, PNG, JPEG support with automatic PII detection and tokenization.",
      icon: FileText,
    },
    {
      title: "Image Redaction",
      description: "OCR-based text detection with blur/blackout/whiteout options for sensitive images.",
      icon: ImageIcon,
    },
    {
      title: "LLM Integration",
      description: "Supports OpenAI, Anthropic, Google, Azure OpenAI, and self-hosted models.",
      icon: Zap,
    },
    {
      title: "API Access",
      description: "Developer-friendly API with rate limiting for seamless integration.",
      icon: Code,
    },
    {
      title: "Audit Logging",
      description: "Complete audit trails for compliance and security monitoring.",
      icon: CheckCircle2,
    },
  ];

  // Privexa use cases
  const privexaUseCases = [
    {
      title: "Healthcare",
      description: "Secure patient data analysis with HIPAA-friendly architecture. Enable AI-powered clinical insights without exposing PHI.",
      icon: StethoscopeIcon,
    },
    {
      title: "Finance",
      description: "Compliant document processing for financial institutions. Process sensitive financial data with AI while meeting regulatory requirements.",
      icon: Building2,
    },
    {
      title: "Legal",
      description: "Confidential document review and analysis. Leverage AI for legal research and document analysis without compromising client confidentiality.",
      icon: FileText,
    },
    {
      title: "Government",
      description: "Sovereign AI deployment for government agencies. Maintain complete data sovereignty while benefiting from advanced AI capabilities.",
      icon: Building2,
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 text-gradient">Our Products & Solutions</h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.companyName} delivers innovative AI solutions across multiple industries. 
            Each product is designed to address specific challenges while maintaining the highest standards 
            of privacy, security, and compliance.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-20">
          {siteConfig.products.map((product, index) => {
            const IconComponent = iconMap[product.icon] || Shield;

            return (
              <Card
                key={index}
                variant={product.status === "available" ? "gradient-border" : "default"}
                className="p-5 sm:p-6 lg:p-8 group hover:shadow-colored-lg transition-all duration-300 h-full flex flex-col"
              >
                <CardHeader className="flex-1 pb-3 sm:pb-4">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    {product.status === "coming-soon" && (
                      <span className="text-xs px-2 sm:px-2.5 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full font-medium">
                        Coming Soon
                      </span>
                    )}
                    {product.status === "available" && (
                      <span className="text-xs px-2 sm:px-2.5 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full font-medium">
                        Available
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">{product.name}</CardTitle>
                  {product.name === "Privexa" && (
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                      <div className="relative w-6 h-6 sm:w-7 sm:h-7">
                        <Image
                          src={siteConfig.logo.src}
                          alt={siteConfig.logo.alt}
                          width={28}
                          height={28}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Privacy-First AI Platform</span>
                    </div>
                  )}
                </CardHeader>
                <CardContent className="flex-1 flex flex-col pt-0">
                  <CardDescription className="text-xs sm:text-sm lg:text-base leading-relaxed mb-4 sm:mb-6 flex-1">
                    {product.description}
                  </CardDescription>
                  {product.status === "available" && (
                    <Link 
                      href={
                        product.name === "Privexa" 
                          ? "/products#demo" 
                          : product.name === "Referral Grading"
                          ? "/products/gynecology-referral"
                          : product.name === "AI Vision Assistant"
                          ? "/products/ai-vision-assistant"
                          : "/contact"
                      } 
                      className="mt-auto"
                    >
                      <Button 
                        variant={product.name === "Privexa" ? "gradient" : "outline"} 
                        className="w-full group min-h-[44px] sm:min-h-[48px]" 
                        size="lg"
                      >
                        {product.name === "Privexa" ? "Watch Demo" : "Learn More"}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Privexa Product Details */}
        <div className="mb-12 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                <Image
                  src={siteConfig.logo.src}
                  alt={siteConfig.logo.alt}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient">Privexa - Privacy-First AI Platform</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Enterprise AI that never exposes your data. Deploy ChatGPT, Claude, and Gemini on-premise 
              with complete data sovereignty.
            </p>
          </div>

          {/* Demo Video Section */}
          <div id="demo" className="mb-12 sm:mb-16 scroll-mt-20">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 text-gradient px-4">Watch Demo</h3>
            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative w-full rounded-lg overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full border-0"
                  src="https://www.youtube.com/embed/qpm91fq1XQ0"
                  title="Privexa Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 sm:mb-10 text-gradient px-4">How It Works</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto px-4 sm:px-6">
              <div className="text-center group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Upload className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-600 to-cyan-600 bg-clip-text text-transparent mb-2">1</div>
                <h4 className="font-bold text-base sm:text-lg mb-2 text-gray-900 dark:text-gray-100">Upload Document</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Users upload documents or initiate conversations
                </p>
              </div>

              <div className="text-center group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Search className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-600 to-cyan-600 bg-clip-text text-transparent mb-2">2</div>
                <h4 className="font-bold text-base sm:text-lg mb-2 text-gray-900 dark:text-gray-100">Detect & Tokenize</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Privexa detects PII and replaces it with secure tokens
                </p>
              </div>

              <div className="text-center group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Send className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-600 to-cyan-600 bg-clip-text text-transparent mb-2">3</div>
                <h4 className="font-bold text-base sm:text-lg mb-2 text-gray-900 dark:text-gray-100">Send to LLM</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Only sanitized content is sent to LLM providers
                </p>
              </div>

              <div className="text-center group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <RotateCcw className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-600 to-cyan-600 bg-clip-text text-transparent mb-2">4</div>
                <h4 className="font-bold text-base sm:text-lg mb-2 text-gray-900 dark:text-gray-100">Reconstruct</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Original PII values are restored in the response
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 sm:mb-10 text-gradient px-4">Key Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto px-4 sm:px-6">
              {privexaFeatures.map((feature, index) => (
                <Card key={index} variant="default" className="p-4 sm:p-6 group hover:shadow-colored transition-all duration-300 h-full">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <CardTitle className="text-base sm:text-lg mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </Card>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 sm:mb-10 text-gradient px-4">Use Cases</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto px-4 sm:px-6">
              {privexaUseCases.map((useCase, index) => (
                <Card key={index} variant="default" className="p-4 sm:p-6 group hover:shadow-colored transition-all duration-300 h-full">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <CardTitle className="text-base sm:text-lg mb-2">{useCase.title}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm leading-relaxed">
                    {useCase.description}
                  </CardDescription>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center px-4 sm:px-6">
          <Card variant="gradient-border" className="p-6 sm:p-8">
            <CardContent>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-gradient">Ready to Get Started?</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
                Contact us to learn more about our products or request a demo to see how we can help solve your unique challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button asChild variant="gradient" size="lg" className="min-h-[44px] sm:min-h-[48px] w-full sm:w-auto">
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="min-h-[44px] sm:min-h-[48px] w-full sm:w-auto">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

