import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/sections/CTA";
import Link from "next/link";
import { ArrowRight, Users, Database, Server, Shield, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Pricing",
  description: `${siteConfig.companyName} offers custom enterprise pricing for our AI solutions. Pricing varies by product and is tailored to your organization's specific needs. Contact us for a quote.`,
  keywords: ["pricing", "enterprise pricing", "AI solutions pricing", "custom licensing", "enterprise AI pricing"],
};

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gradient">Enterprise Solutions Pricing</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {siteConfig.companyName} offers custom enterprise pricing for our AI solutions. Pricing varies by product 
            and is tailored to your organization&apos;s specific needs. Contact us for a tailored quote that fits your requirements.
          </p>
        </div>

        {/* Main Pricing Message */}
        <Card variant="gradient-border" className="mb-12 p-8 text-center hover:shadow-colored-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-3xl mb-4">Custom Enterprise Licensing</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base leading-relaxed mb-6">
              Every organization has unique requirements for AI deployment. {siteConfig.companyName} offers custom 
              licensing tailored to your specific needs. Pricing varies by product and may include factors such as 
              deployment size, user count, data volume, and compliance requirements.
            </CardDescription>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="gradient" size="lg">
                <Link href="/contact">
                  Request Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="mailto:info@privexa.co">
                  Contact info@privexa.co
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Pricing Factors */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gradient">Pricing Factors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="default" className="p-6 group hover:shadow-colored transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="w-7 h-7 text-white" />
              </div>
              <CardTitle className="text-lg mb-2">User Count</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                Licensing scales with the number of users accessing the platform. 
                Volume discounts available for large deployments.
              </CardDescription>
            </Card>

            <Card variant="default" className="p-6 group hover:shadow-colored transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Database className="w-7 h-7 text-white" />
              </div>
              <CardTitle className="text-lg mb-2">Data Volume</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                Pricing considers the volume of data processed through the platform, 
                ensuring cost-effective scaling as your usage grows.
              </CardDescription>
            </Card>

            <Card variant="default" className="p-6 group hover:shadow-colored transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Server className="w-7 h-7 text-white" />
              </div>
              <CardTitle className="text-lg mb-2">Deployment Size</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                On-premise deployment options range from single-server installations 
                to distributed Kubernetes clusters.
              </CardDescription>
            </Card>

            <Card variant="default" className="p-6 group hover:shadow-colored transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <CardTitle className="text-lg mb-2">Compliance Requirements</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                Additional features and support for specific compliance frameworks 
                (HIPAA, GDPR, etc.) can be supported based on your needs.
              </CardDescription>
            </Card>

            <Card variant="default" className="p-6 group hover:shadow-colored transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-7 h-7 text-white" />
              </div>
              <CardTitle className="text-lg mb-2">Support & Training</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                Custom support packages and training programs available to ensure 
                successful deployment and adoption.
              </CardDescription>
            </Card>

            <Card variant="default" className="p-6 group hover:shadow-colored transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <ArrowRight className="w-7 h-7 text-white" />
              </div>
              <CardTitle className="text-lg mb-2">Integration Services</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                Professional services available for custom integrations with your 
                existing systems and workflows.
              </CardDescription>
            </Card>
          </div>
        </div>

        {/* What's Included - Privexa Product */}
        <Card variant="default" className="mb-12 hover:shadow-colored transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl">Privexa Product - What&apos;s Included</CardTitle>
            <CardDescription className="text-sm mt-2">
              The following features are included with Privexa (Privacy-First AI Platform) licensing. 
              Other products may have different feature sets and pricing models.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>On-premise deployment with complete data sovereignty</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>Multi-layer PII detection and tokenization</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>Document processing (PDF, DOCX, PNG, JPEG)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>LLM integration (OpenAI, Anthropic, Google, Azure, self-hosted)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>API access with comprehensive documentation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>Audit logging and compliance reporting</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>Multi-tenancy with RBAC</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>Docker Compose and Kubernetes/Helm deployment options</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <CTA
          title="Ready to Get Started?"
          description="Contact us today to discuss your requirements and receive a custom quote."
          primaryCTA={{
            label: "Contact Us",
            href: "/contact",
          }}
          secondaryCTA={{
            label: "Request Demo",
            href: "/contact",
          }}
        />
      </div>
    </div>
  );
}

