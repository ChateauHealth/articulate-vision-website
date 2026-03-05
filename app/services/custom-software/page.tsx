import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Shield,
  Gauge,
  Trophy,
  PiggyBank,
  Globe,
  Smartphone,
  Server,
  Plug,
  BarChart3,
  RefreshCcw,
  Phone,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Custom Software Development | Scalable Applications | Articulate Vision",
  description:
    "Custom Software Development Services - Scalable, secure applications built for your unique business needs. Web apps, mobile, ERP, CRM, APIs, and more.",
}

export default function CustomSoftwarePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] hero-glow pointer-events-none" />
        <div className="art-grid opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-3xl">
            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">
              Engineering Excellence
            </span>
            <h1 className="text-5xl md:text-6xl font-black font-display mb-6 tracking-tight dark:text-white leading-tight">
              Custom Software Built for Your Business
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Off-the-shelf software doesn&apos;t fit your unique workflows. We build scalable,
              secure applications that align perfectly with how your business operates and drive
              measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-secondary to-primary text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                Request Proposal
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:385-501-3212"
                className="bg-muted border-2 border-border text-foreground px-8 py-4 rounded-full font-bold hover:border-primary transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                Call: 385-501-3212
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="https://articulatevision.net/wp-content/uploads/2025/09/photo-1697952431907-8542919a16b3-1024x640.jpeg"
                alt="Advanced Technology Infrastructure"
                width={1024}
                height={640}
                className="w-full h-auto rounded-2xl shadow-2xl border border-border"
              />
              <div className="image-aura" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Custom Software */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black font-display dark:text-white mb-12">
            Why Custom Software?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Perfect Alignment",
                desc: "Custom software aligns perfectly with your unique workflows, eliminating the need to adapt your business to software.",
              },
              {
                icon: TrendingUp,
                title: "Scalability",
                desc: "Your software grows with your business. Add features, users, and functionality without limitations.",
              },
              {
                icon: Shield,
                title: "Security & Control",
                desc: "You own your code and data. Implement security measures tailored to your specific requirements.",
              },
              {
                icon: Gauge,
                title: "Maximum Efficiency",
                desc: "Streamline operations with automation and optimized workflows designed for your specific business processes.",
              },
              {
                icon: Trophy,
                title: "Competitive Advantage",
                desc: "Stand out from competitors with unique features and capabilities that off-the-shelf solutions can't provide.",
              },
              {
                icon: PiggyBank,
                title: "Long-Term Savings",
                desc: "Eliminate recurring licensing fees. Custom software costs less over time, especially for growing organizations.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <item.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold dark:text-white mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Software We Build */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black font-display dark:text-white mb-12">What We Build</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: Globe,
                title: "Web Applications",
                desc: "Full-stack web apps using modern frameworks. From customer portals to internal dashboards, we build responsive, scalable solutions.",
                list: [
                  "React, Vue, Next.js, Angular",
                  "Node.js, Python, C#/.NET backends",
                  "Cloud infrastructure (AWS, Azure, GCP)",
                  "Real-time data and analytics",
                ],
              },
              {
                icon: Smartphone,
                title: "Mobile Applications",
                desc: "Native and cross-platform mobile apps for iOS and Android. We build experiences your customers will love.",
                list: [
                  "Native iOS and Android development",
                  "Cross-platform solutions (React Native, Flutter)",
                  "Field service and productivity apps",
                  "Offline-first mobile solutions",
                ],
              },
              {
                icon: Server,
                title: "Enterprise Systems",
                desc: "Centralize operations with custom ERP, CRM, and business intelligence platforms.",
                list: [
                  "Enterprise Resource Planning (ERP)",
                  "Customer Relationship Management (CRM)",
                  "Business Intelligence dashboards",
                  "Inventory and supply chain systems",
                ],
              },
              {
                icon: Plug,
                title: "APIs & Integrations",
                desc: "Seamlessly connect your systems. Custom APIs that ensure smooth data flow across your entire ecosystem.",
                list: [
                  "RESTful and GraphQL APIs",
                  "Third-party integrations",
                  "Data migration services",
                  "Legacy system modernization",
                ],
              },
              {
                icon: BarChart3,
                title: "Data Analytics & BI",
                desc: "Transform data into actionable insights with custom analytics platforms and business intelligence dashboards.",
                list: [
                  "Real-time analytics dashboards",
                  "Custom reporting systems",
                  "Data warehouse solutions",
                  "Predictive analytics and ML",
                ],
              },
              {
                icon: RefreshCcw,
                title: "Legacy Modernization",
                desc: "Breathe new life into outdated systems. Migrate to modern architectures while preserving critical business logic.",
                list: [
                  "Cloud migration strategies",
                  "Monolith to microservices",
                  "UI/UX modernization",
                  "Database optimization and migration",
                ],
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-muted/50 border border-border rounded-2xl p-8"
              >
                <item.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-2xl font-bold dark:text-white mb-4">{item.title}</h3>
                <p className="text-muted-foreground mb-6">{item.desc}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {item.list.map((listItem) => (
                    <li key={listItem}>&bull; {listItem}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black font-display dark:text-white mb-12 text-center">
            Our Development Process
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                num: 1,
                title: "Discovery & Requirements",
                desc: "We dive deep into understanding your business, challenges, and goals through stakeholder interviews and requirements gathering.",
              },
              {
                num: 2,
                title: "Architecture & Design",
                desc: "Our architects design scalable system architecture, select optimal technology stacks, and create detailed wireframes.",
              },
              {
                num: 3,
                title: "Agile Development",
                desc: "We build using sprints, delivering working software every 2-3 weeks for your review and feedback.",
              },
              {
                num: 4,
                title: "Testing & QA",
                desc: "Rigorous automated and manual testing ensures your software is secure, performant, and bug-free.",
              },
              {
                num: 5,
                title: "Deployment & Support",
                desc: "We handle deployment to your infrastructure and provide ongoing maintenance and support.",
              },
            ].map((step) => (
              <div key={step.num} className="flex gap-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-primary">{step.num}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold dark:text-white mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black font-display mb-6 dark:text-white">
            Ready to Build Something Great?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Let&apos;s discuss your project and create a custom solution that perfectly fits your
            business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-secondary to-primary text-white px-12 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg inline-flex items-center justify-center gap-2"
            >
              Request a Proposal
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:385-501-3212"
              className="bg-muted border-2 border-border text-foreground px-12 py-4 rounded-full font-bold text-lg hover:border-primary transition-all inline-flex items-center justify-center gap-2"
            >
              Call: 385-501-3212
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
