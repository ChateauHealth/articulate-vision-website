import Link from "next/link"
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Articulate Vision",
  description:
    "Contact Articulate Vision - Get in touch with our digital solutions team. Call, email, or schedule a consultation today.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[300px] flex items-center overflow-hidden mb-20 pt-12">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] hero-glow pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center py-20">
          <h1 className="text-5xl md:text-6xl font-black font-display mb-6 tracking-tight dark:text-white">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Our team is here to discuss how we can help you
            achieve your digital goals.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-black font-display dark:text-white mb-8">
                Contact Information
              </h2>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold dark:text-white mb-1">Call Us</h3>
                <p className="text-muted-foreground mb-2">Mon-Fri, 9am-5pm MST</p>
                <a
                  href="tel:385-501-3212"
                  className="text-primary font-semibold cursor-pointer hover:underline"
                >
                  385-501-3212
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-bold dark:text-white mb-1">Email</h3>
                <p className="text-muted-foreground mb-2">We&apos;ll respond within 24 hours</p>
                <a
                  href="mailto:contact@articulatevisionco.com"
                  className="text-primary font-semibold cursor-pointer hover:underline"
                >
                  contact@articulatevisionco.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-bold dark:text-white mb-1">Location</h3>
                <p className="text-muted-foreground mb-2">Serving Utah & Remote Nationally</p>
                <p className="text-primary font-semibold">Salt Lake City, Utah</p>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-muted/50 border border-border rounded-2xl p-6 mt-8">
              <h3 className="font-bold dark:text-white mb-4">Service Areas</h3>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  <strong>Local:</strong> Salt Lake City, Park City, Provo, and surrounding Utah
                  communities
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Remote:</strong> Colorado, Idaho, Wyoming, Arizona, Nevada, and nationwide
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              className="bg-muted/50 border border-border rounded-2xl p-8"
              action="https://formspree.io/f/myzyvdlr"
              method="POST"
            >
              <h2 className="text-2xl font-bold dark:text-white mb-8">Send us a Message</h2>

              {/* Name */}
              <div className="mb-6">
                <label className="block text-sm font-semibold dark:text-white mb-2" htmlFor="name">
                  Full Name *
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background dark:text-white focus:border-primary focus:outline-none transition-colors"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  type="text"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label className="block text-sm font-semibold dark:text-white mb-2" htmlFor="email">
                  Email Address *
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background dark:text-white focus:border-primary focus:outline-none transition-colors"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  type="email"
                />
              </div>

              {/* Phone */}
              <div className="mb-6">
                <label className="block text-sm font-semibold dark:text-white mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background dark:text-white focus:border-primary focus:outline-none transition-colors"
                  id="phone"
                  name="phone"
                  placeholder="(801) 555-0000"
                  type="tel"
                />
              </div>

              {/* Service Interest */}
              <div className="mb-6">
                <label
                  className="block text-sm font-semibold dark:text-white mb-2"
                  htmlFor="service"
                >
                  Service of Interest
                </label>
                <select
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background dark:text-white focus:border-primary focus:outline-none transition-colors cursor-pointer"
                  id="service"
                  name="service"
                >
                  <option>Select a service...</option>
                  <option>Digital Marketing</option>
                  <option>Custom Software Development</option>
                  <option>Workflow Automation</option>
                  <option>Not Sure - Need Consultation</option>
                </select>
              </div>

              {/* Budget */}
              <div className="mb-6">
                <label
                  className="block text-sm font-semibold dark:text-white mb-2"
                  htmlFor="budget"
                >
                  Project Budget (Optional)
                </label>
                <select
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background dark:text-white focus:border-primary focus:outline-none transition-colors cursor-pointer"
                  id="budget"
                  name="budget"
                >
                  <option>Select budget range...</option>
                  <option>Under $5,000</option>
                  <option>$5,000 - $25,000</option>
                  <option>$25,000 - $50,000</option>
                  <option>$50,000 - $100,000+</option>
                </select>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label
                  className="block text-sm font-semibold dark:text-white mb-2"
                  htmlFor="message"
                >
                  Message *
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background dark:text-white focus:border-primary focus:outline-none transition-colors resize-none"
                  id="message"
                  name="message"
                  placeholder="Tell us about your project and goals..."
                  required
                  rows={6}
                />
              </div>

              {/* Submit Button */}
              <button
                className="w-full bg-gradient-to-r from-secondary to-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg cursor-pointer"
                type="submit"
              >
                Send Message
              </button>

              <p className="text-xs text-muted-foreground mt-4">
                We&apos;ll respond within 24 business hours. For urgent matters, please call us
                directly.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black font-display mb-16 dark:text-white text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "How does your consultation process work?",
                a: "We start with a free consultation to understand your business, challenges, and goals. This helps us develop a tailored proposal for your specific needs.",
              },
              {
                q: "What does a typical project timeline look like?",
                a: "Timelines vary based on project scope. Small projects take 4-8 weeks, while larger custom solutions may take 3-6 months. We'll provide a detailed timeline during consultation.",
              },
              {
                q: "Do you offer ongoing support after project completion?",
                a: "Yes! We provide comprehensive ongoing support, maintenance, and optimization to ensure your solution continues to deliver value long-term.",
              },
              {
                q: "How is pricing structured?",
                a: "We offer flexible pricing models including fixed-price projects, time & materials, and retainer agreements. We'll discuss options during your consultation.",
              },
              {
                q: "Can you work with remote clients?",
                a: "Absolutely! We serve clients across the United States. We leverage modern tools for seamless communication and collaboration regardless of location.",
              },
              {
                q: "What's your refund policy?",
                a: "We stand behind our work. If you're not satisfied with the initial deliverables, we'll make revisions until we get it right. Let's discuss specifics in your proposal.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <h3 className="font-bold text-lg dark:text-white mb-3">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black font-display mb-6 dark:text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Let&apos;s have a conversation about how we can help you achieve your digital goals and
            drive measurable results.
          </p>
          <a
            href="tel:385-501-3212"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-primary text-white px-12 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg cursor-pointer"
          >
            Call Now: 385-501-3212
            <Phone className="h-5 w-5" />
          </a>
        </div>
      </section>
    </>
  )
}
