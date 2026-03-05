import Image from "next/image"
import Link from "next/link"
import { ArrowRight, TrendingUp, Code, Zap, Handshake, Star, Users, Lightbulb, Phone } from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-12">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] hero-glow pointer-events-none" />
        <div className="art-noise" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-black font-display mb-6 tracking-tight dark:text-white leading-tight text-balance">
                Digital <span className="gradient-text">Solutions</span> To Help You Grow
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Align your technology, amplify your impact, articulate your vision. We empower Salt
                Lake City businesses with transformative digital solutions, custom software, and
                cutting-edge automation strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-secondary to-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 cursor-pointer cta-button"
                >
                  Schedule a Call
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="bg-muted border-2 border-border text-foreground px-8 py-4 rounded-full font-bold text-lg hover:border-primary transition-all inline-flex items-center justify-center gap-2 cursor-pointer btn-secondary"
                >
                  Explore Services
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
              <div className="flex gap-8 pt-8">
                <div>
                  <div className="text-3xl font-black text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-secondary">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-accent">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-border/20">
                <Image
                  alt="Digital solutions and software development visualization"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5w1dOJiTdoggx8SaVeluZUPJG6s3yQd4sYwx4-MpA-C6KHs-0B7FDaPA4F5xacRvb_Hk0jHNhv1IIlQRFAjPFnb3V195Kjqc-vfxjLiA_szXJb5nhfEUSLBrew2PDQnCMVoUy1SE0cLyxWffQZeAnqjk8ta8_8Skfao0qbguH9-IeiZt75PfYgxKjXzt3z93FS_4JaLVhD9aITXNfgGMDz3UftxiUxAkaEt7AKrqCwiUJpim1aTzzNQSJX8GK8O6hhImjv8NO-qg"
                  width={600}
                  height={400}
                  className="relative w-full shadow-2xl"
                />
                <div className="art-overlay" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6 dark:text-white">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to transform your business operations and
              drive sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Digital Marketing */}
            <div className="bg-card border border-border rounded-2xl p-8 service-card group">
              <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors">
                <TrendingUp className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold dark:text-white mb-4">Digital Marketing</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                SEO, social media, email campaigns, and PPC strategies that drive measurable results
                and sustainable growth.
              </p>
              <Link
                href="/services/digital-marketing"
                className="text-primary font-semibold flex items-center gap-2 group/link cursor-pointer hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Custom Software */}
            <div className="bg-card border border-border rounded-2xl p-8 service-card group">
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <Code className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold dark:text-white mb-4">Custom Software</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Scalable, secure applications built from the ground up to align perfectly with your
                business workflows.
              </p>
              <Link
                href="/services/custom-software"
                className="text-primary font-semibold flex items-center gap-2 group/link cursor-pointer hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Workflow Automation */}
            <div className="bg-card border border-border rounded-2xl p-8 service-card group">
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                <Zap className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold dark:text-white mb-4">Workflow Automation</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Intelligent automation solutions that eliminate repetitive tasks and streamline
                complex business processes.
              </p>
              <Link
                href="/services/workflow-automation"
                className="text-primary font-semibold flex items-center gap-2 group/link cursor-pointer hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Unlock Your Potential */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black font-display mb-6 dark:text-white text-center">
            Unlock Your Potential with
          </h2>
          <h3 className="text-3xl md:text-4xl font-black font-display mb-12 dark:text-white text-center gradient-text">
            Custom Digital Solutions
          </h3>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At our core, we are dedicated to empowering Salt Lake City businesses. Our expert
                team provides tailored digital solutions from software solutions, smart workflow
                automation, and strategic digital consulting. By putting your needs first, we want
                to help you enhance revenue and improve internal processes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our commitment to excellence and innovation ensures that every project we undertake
                delivers measurable results and long-term value for your business.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              <Image
                src="https://articulatevision.net/wp-content/uploads/2025/09/photo-1700427296131-0cc4c4610fc6-1024x678.jpeg"
                alt="Computer components for digital tech solutions"
                width={600}
                height={400}
                className="relative rounded-2xl w-full shadow-xl border border-border/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Digital Solutions Path */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black font-display mb-6 dark:text-white text-center">
            Digital Solutions Path
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            From consultation to delivery, we guide you through every step of your digital
            transformation journey.
          </p>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { num: 1, title: "Consultation", desc: "Understanding your vision, project scope, and needs", color: "primary" },
              { num: 2, title: "Design & Planning", desc: "Craft a personalized strategy for your requirements", color: "secondary" },
              { num: 3, title: "Deliver", desc: "Deliver first draft, review, and receive feedback", color: "accent" },
              { num: 4, title: "Finalize & Publish", desc: "Create finalized product that integrates seamlessly", color: "primary" },
              { num: 5, title: "Handover & Monitor", desc: "Ensure access while we monitor performance", color: "secondary" },
            ].map((step, idx) => (
              <div key={step.num} className="relative">
                <div className={`bg-card border-2 border-${step.color} rounded-2xl p-6 text-center mb-4`}>
                  <div className={`w-16 h-16 bg-${step.color}/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className={`text-3xl font-black text-${step.color}`}>{step.num}</span>
                  </div>
                  <h4 className="font-bold dark:text-white mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
                {idx < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black font-display mb-16 dark:text-white text-center">
            Why Choose Articulate Vision
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-muted/50 border border-border rounded-2xl p-8">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <Handshake className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-bold text-lg dark:text-white mb-2">Integrity</h4>
              <p className="text-muted-foreground text-sm">
                Honest communication and transparent processes in every project we undertake.
              </p>
            </div>

            <div className="bg-muted/50 border border-border rounded-2xl p-8">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-6">
                <Star className="h-6 w-6 text-secondary" />
              </div>
              <h4 className="font-bold text-lg dark:text-white mb-2">Excellence</h4>
              <p className="text-muted-foreground text-sm">
                Commitment to delivering high-quality solutions that exceed expectations.
              </p>
            </div>

            <div className="bg-muted/50 border border-border rounded-2xl p-8">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-bold text-lg dark:text-white mb-2">Client-Centric</h4>
              <p className="text-muted-foreground text-sm">
                Your success is our priority. We tailor solutions to your unique needs.
              </p>
            </div>

            <div className="bg-muted/50 border border-border rounded-2xl p-8">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-bold text-lg dark:text-white mb-2">Innovation</h4>
              <p className="text-muted-foreground text-sm">
                Cutting-edge technologies and creative solutions to stay ahead of competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black font-display mb-16 dark:text-white text-center">
            Serving Utah & Beyond
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold dark:text-white mb-6">Local Service Areas</h3>
              <p className="text-muted-foreground mb-6">
                We proudly serve communities across Utah&apos;s Wasatch Front and surrounding areas
                with on-site and remote services.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Salt Lake City", "Park City", "Sandy", "West Jordan", "Provo", "Orem"].map(
                  (city) => (
                    <div key={city} className="text-sm text-muted-foreground">
                      &bull; {city}
                    </div>
                  )
                )}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold dark:text-white mb-6">Remote Service Areas</h3>
              <p className="text-muted-foreground mb-6">
                We work with clients across the United States, providing seamless virtual
                collaboration and support.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Colorado", "Idaho", "Wyoming", "Arizona", "Nevada", "West Coast"].map(
                  (state) => (
                    <div key={state} className="text-sm text-muted-foreground">
                      &bull; {state}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Insights */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-display mb-4 dark:text-white">
              Latest Insights from Our Blog
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore valuable strategies and tips to enhance your business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Optimize for Profit: Campaign Automation Best Practices Guide",
                date: "February 17, 2026",
                desc: "Master campaign automation with our best practices guide. Discover strategies to optimize your marketing efforts.",
                img: "https://articulatevision.net/wp-content/uploads/2026/02/featured-2952-1024x559.webp",
                href: "https://articulatevision.net/optimize-for-profit-campaign-automation-best-practices-guide/",
              },
              {
                title: "Strategic Campaign Automation: Best Practices for Growth",
                date: "February 3, 2026",
                desc: "Unlock business growth with strategic campaign automation. Discover best practices and actionable tips.",
                img: "https://articulatevision.net/wp-content/uploads/2026/01/featured-2892-1024x559.jpg",
                href: "https://articulatevision.net/strategic-campaign-automation-best-practices-for-growth/",
              },
              {
                title: "Expert Guide: Best Practices for Profitable Campaign Automation",
                date: "February 3, 2026",
                desc: "Unlock maximum ROI with our expert guide to profitable campaign automation. Discover best practices.",
                img: "https://articulatevision.net/wp-content/uploads/2026/02/featured-2900-1024x572.webp",
                href: "https://articulatevision.net/expert-guide-best-practices-for-profitable-campaign-automation/",
              },
            ].map((post) => (
              <article
                key={post.title}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="aspect-video bg-gradient-to-br from-secondary/20 to-primary/20 overflow-hidden">
                  <Image
                    src={post.img}
                    alt={post.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <span>{post.date}</span>
                    <span>&bull;</span>
                    <span>Featured</span>
                  </div>
                  <h3 className="font-bold text-lg dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.desc}</p>
                  <a
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://articulatevision.net/blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              View All Posts
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-muted/50">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/30 to-secondary/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black font-display mb-6 dark:text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let&apos;s work together to enhance your efficiency and drive growth. Our custom
            solutions can help you navigate challenges and seize opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-secondary to-primary text-white px-12 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 cursor-pointer cta-button"
            >
              Get Started Today
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:385-501-3212"
              className="bg-muted border-2 border-border text-foreground px-12 py-4 rounded-full font-bold text-lg hover:border-primary transition-all inline-flex items-center justify-center gap-2 cursor-pointer btn-secondary"
            >
              Call Us: 385-501-3212
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
