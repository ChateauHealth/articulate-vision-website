import Image from "next/image"
import Link from "next/link"
import { ArrowRight, TrendingUp, Code, Zap, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Solutions Services | Articulate Vision",
  description:
    "Articulate Vision Services - Digital Marketing, Custom Software Solutions, and Workflow Automation for Salt Lake City businesses.",
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden pt-12">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] hero-glow pointer-events-none" />
        <div className="art-grid" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center py-20">
          <h1 className="text-5xl md:text-6xl font-black font-display mb-6 tracking-tight dark:text-white">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to transform your business operations, enhance
            efficiency, and drive sustainable growth.
          </p>
        </div>
      </section>

      {/* Digital Marketing Service */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-border/20">
                <Image
                  alt="Digital marketing strategies and analytics"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm4nCDXqaQ9lXbTpZB7TKp6d-5hf6VGUVSazTiB9jXJpb23zUMiKU4rk1gdk_G8tbHWPfwNTcJ9h5gx0WIC3Ybdc8lN6kJGyD8YiLPGrBCXOZvEEvDaH3xWX9d9QTlGP79LXAuQab0hOdpkvdG9wr21myX5plTJVbSEdveFpIqx_FOL7InQXWqkWRuveUqUVBAJFATaiZHWClGn7h0kYrTGZ9ittbFgGRmZC9NR5YSm1fN5FxOrsWYelYkVD1e6PCI6ReZ8KPkjiM"
                  width={600}
                  height={400}
                  className="relative w-full shadow-2xl"
                />
                <div className="image-aura" />
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-3 block">
                  01 / Marketing
                </span>
                <h2 className="text-4xl font-black font-display dark:text-white mb-6">
                  Digital Marketing
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Master digital channels to reach your audience, drive conversions, and maximize
                  ROI. From SEO to social media, email campaigns to PPC advertising, we deliver
                  comprehensive strategies backed by data.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  75% of users never scroll past page one of search results. Meanwhile, email
                  delivers $36 ROI for every $1 spent. We leverage these insights to build
                  sustainable growth for your business.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold dark:text-white">What We Offer:</h3>
                <ul className="space-y-3">
                  {[
                    {
                      title: "SEO & Search Rankings",
                      desc: "Get found by customers actively searching for your services",
                    },
                    {
                      title: "Social Media Marketing",
                      desc: "Build community, drive engagement, and scale conversions across platforms",
                    },
                    {
                      title: "Email Campaigns",
                      desc: "Nurture leads and secure the highest ROI of any marketing channel",
                    },
                    {
                      title: "Conversion Rate Optimization",
                      desc: "Turn more visitors into customers through A/B testing and data analysis",
                    },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold dark:text-white">{item.title}</div>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/services/digital-marketing"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-primary text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all shadow-lg cursor-pointer"
              >
                Explore Digital Marketing
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Software Service */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 lg:order-2">
              <div>
                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
                  02 / Engineering
                </span>
                <h2 className="text-4xl font-black font-display dark:text-white mb-6">
                  Custom Software Development
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Off-the-shelf software doesn&apos;t fit your unique business. We build scalable,
                  secure applications that align perfectly with your workflows and drive measurable
                  results.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From concept to deployment, we follow proven agile methodologies ensuring
                  transparency, quality, and your complete satisfaction at every stage.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold dark:text-white">What We Build:</h3>
                <ul className="space-y-3">
                  {[
                    {
                      title: "Web Applications",
                      desc: "Full-stack web apps that scale with your business",
                    },
                    {
                      title: "Mobile Applications",
                      desc: "Native and cross-platform apps for iOS and Android",
                    },
                    {
                      title: "Enterprise Systems",
                      desc: "ERP, CRM, and business intelligence platforms",
                    },
                    {
                      title: "API Integration",
                      desc: "Seamless connections between your software systems",
                    },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold dark:text-white">{item.title}</div>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/services/custom-software"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-primary text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all shadow-lg cursor-pointer"
              >
                Explore Custom Software
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="relative hidden lg:block lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl" />
              <Image
                alt="Custom software development and coding"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-8ejfXFjEh-Tv1UG11RPoxnqqrvjgY3XZGtkylf-aXUV0hIns4wFbC3anYWCE-a4DAR_RA-mGjSvB_rKI-ZuFnbHJbYUzK0vTgKdFqCEFcvmHohHrLy16i5xYcVx_sW5q7gO5L8H8Yw5rr3kjKWXr8Grm8Itv6LR3NPvY41nTHV5mhUqTiPVNBvQbgfjm2KRfRXC-UcTDqEt1bgo1MtlmbvOQRjRriaTOubvDAmGJMZJxnwejAA_gUnBa_AcpmkF-HUSEAn7G-NM"
                width={600}
                height={400}
                className="relative rounded-3xl w-full shadow-2xl border border-border/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Automation Service */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-3xl" />
              <Image
                alt="Workflow automation and business process optimization"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx-D-e_bGhl9sRRW6INgUwsLqST1iK2o3PBu2a9KLYTL7HJQ_7YbP94ApgI7nim7ByCaaemrdPiwj0umIZ_Kv4E_LIM9RjW8JW9BB0KBLcBj57V_B3cXF0JXA3KEaZAVhzomIKSD0fXA66-EjTiFBjQDmCYVdJyZs-yg8eVyVKSxsplgj80YMrXWNMDJ7W-pRQ_M-GEb9VOgyHlBqxf0I2o9jduGB-RVeMPR_ICKpz-VbXV3rdsreHw-5i4LkgpQptru6cL3h2W94"
                width={600}
                height={400}
                className="relative rounded-3xl w-full shadow-2xl border border-border/20"
              />
            </div>
            <div className="space-y-8">
              <div>
                <span className="text-accent font-bold tracking-widest text-xs uppercase mb-3 block">
                  03 / Automation
                </span>
                <h2 className="text-4xl font-black font-display dark:text-white mb-6">
                  Workflow Automation
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Stop wasting hours on repetitive tasks. Our intelligent automation solutions
                  eliminate manual work, reduce errors, and free your team to focus on high-value
                  activities that drive growth.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From lead routing to invoice processing, intake forms to marketing campaigns, we
                  design custom workflows that perfectly match your business processes.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold dark:text-white">Automation Solutions:</h3>
                <ul className="space-y-3">
                  {[
                    {
                      title: "Lead Routing & CRM Updates",
                      desc: "Automatically assign and nurture leads through your sales pipeline",
                    },
                    {
                      title: "Employee Onboarding",
                      desc: "Streamline new hire processes and improve time-to-productivity",
                    },
                    {
                      title: "Invoice Processing",
                      desc: "Eliminate manual data entry and accelerate payment cycles",
                    },
                    {
                      title: "Custom Workflows",
                      desc: "Build tailored automations for any business process",
                    },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold dark:text-white">{item.title}</div>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/services/workflow-automation"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-primary text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all shadow-lg cursor-pointer"
              >
                Explore Workflow Automation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black font-display mb-6 dark:text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Let&apos;s discuss how our services can transform your business operations and drive
            growth.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-primary text-white px-12 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg cursor-pointer"
          >
            Schedule a Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
