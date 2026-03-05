import Image from "next/image"
import Link from "next/link"
import { ArrowRight, TrendingUp, Mail, Users, FileText, Check, Phone } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Marketing Services | SEO & Social Media | Articulate Vision",
  description:
    "Digital Marketing Services - SEO, social media, email campaigns, and PPC strategies to grow your business. Serving Salt Lake City and nationwide.",
}

export default function DigitalMarketingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] hero-glow-pink pointer-events-none" />
        <div className="art-grid opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-3xl">
            <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-4 block">
              Digital Solutions
            </span>
            <h1 className="text-5xl md:text-6xl font-black font-display mb-6 tracking-tight dark:text-white leading-tight">
              Digital Marketing That Grows Your Business
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Master every digital channel - SEO, social media, email, PPC, and content marketing -
              with strategies backed by data and driven by results. We help Salt Lake City and
              beyond businesses dominate their market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-secondary to-primary text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                Start Your Strategy
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:385-501-3212"
                className="bg-muted border-2 border-border text-foreground px-8 py-4 rounded-full font-bold hover:border-secondary transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                Call: 385-501-3212
              </a>
            </div>
          </div>
          <div className="mt-12 relative max-w-4xl">
            <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 via-primary/20 to-accent/20 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
              <Image
                src="https://articulatevision.net/wp-content/uploads/2025/11/73e86364-d13e-4104-8c5e-9510ffb38df5-1024x586.png"
                alt="Digital marketing campaign performance visualization"
                width={1024}
                height={586}
                className="w-full h-auto"
              />
              <div className="image-aura" />
            </div>
          </div>
        </div>
      </section>

      {/* The Digital Marketing Landscape */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black font-display dark:text-white mb-12">
            The Digital Marketing Landscape
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: TrendingUp,
                stat: "75%",
                label: "Never scroll past page one",
                desc: "Ranking on the first page of search results is critical. SEO isn't optional - it's essential for visibility.",
              },
              {
                icon: Mail,
                stat: "$36",
                label: "ROI per $1 spent",
                desc: "Email marketing delivers the highest ROI of any digital channel. It's owned, not rented.",
              },
              {
                icon: Users,
                stat: "4.9B",
                label: "Social media users globally",
                desc: "Your customers are on social media. That's where you build community and drive conversions.",
              },
              {
                icon: FileText,
                stat: "67%",
                label: "More leads with blogging",
                desc: "Content marketing builds authority, attracts organic traffic, and nurtures leads throughout the funnel.",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <item.icon className="h-10 w-10 text-secondary" />
                  <div>
                    <div className="text-3xl font-black text-secondary">{item.stat}</div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black font-display dark:text-white mb-12">Our Services</h2>

          <div className="space-y-16">
            {/* SEO */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-black font-display dark:text-white mb-4">
                  Search Engine Optimization
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Get found by customers actively searching for your products and services. Our SEO
                  strategy includes keyword research, on-page optimization, technical SEO, and
                  strategic link building.
                </p>
                <ul className="space-y-3">
                  {[
                    "Keyword research and strategy",
                    "On-page and technical optimization",
                    "Content optimization for search",
                    "Link building and authority development",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-secondary mt-1" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mt-6">
                  <strong>Timeline:</strong> Initial results in 3-6 months, significant growth by
                  6-12 months
                </p>
              </div>
              <div className="bg-muted/50 border border-border rounded-2xl p-8">
                <div className="text-5xl font-black text-secondary mb-4">75%</div>
                <p className="text-muted-foreground mb-6">
                  of users never scroll past the first page of search results. Being found means
                  staying visible.
                </p>
                <div className="bg-card rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Pro Tip:</strong> SEO is a long-term investment that compounds over
                    time, delivering increasing value year after year.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-muted/50 border border-border rounded-2xl p-8 lg:order-2">
                <div className="text-5xl font-black text-secondary mb-4">4.9B</div>
                <p className="text-muted-foreground mb-6">
                  people use social media globally. Your customers are waiting for you to engage
                  with them where they spend their time.
                </p>
                <div className="bg-card rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Strategy:</strong> Organic builds community, paid drives conversions. We
                    leverage both for maximum impact.
                  </p>
                </div>
              </div>
              <div className="lg:order-1">
                <h3 className="text-3xl font-black font-display dark:text-white mb-4">
                  Social Media Marketing
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Build engaged communities and drive conversions across Facebook, Instagram,
                  LinkedIn, TikTok, and more. We combine organic content with paid advertising for
                  maximum reach.
                </p>
                <ul className="space-y-3">
                  {[
                    "Content calendar and posting strategy",
                    "Community management and engagement",
                    "Paid social advertising and targeting",
                    "Analytics and performance optimization",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-secondary mt-1" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Email Marketing */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-black font-display dark:text-white mb-4">
                  Email Marketing
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  The highest ROI marketing channel. We create segmented, personalized email
                  campaigns that nurture leads, drive conversions, and build customer loyalty.
                </p>
                <ul className="space-y-3">
                  {[
                    "Welcome sequences for new subscribers",
                    "Nurture campaigns to build relationships",
                    "Promotional campaigns and offers",
                    "Automation and behavioral triggers",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-secondary mt-1" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-muted/50 border border-border rounded-2xl p-8">
                <div className="text-5xl font-black text-secondary mb-4">$36</div>
                <p className="text-muted-foreground mb-6">
                  return for every $1 spent. Email marketing remains the king of ROI - and we know
                  how to maximize it.
                </p>
                <div className="bg-card rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Key insight:</strong> Segmented campaigns see 14% higher open rates and
                    100% higher click rates than non-segmented.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black font-display mb-6 dark:text-white">
            Ready to Dominate Your Market?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Let&apos;s build a digital marketing strategy that drives real results for your
            business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-secondary to-primary text-white px-12 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg inline-flex items-center justify-center gap-2"
            >
              Start Your Strategy
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
