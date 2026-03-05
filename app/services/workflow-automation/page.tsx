import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Clock,
  CheckCircle,
  Link2,
  Phone,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Workflow Automation | Business Process Automation | Articulate Vision",
  description:
    "Workflow Automation Services - Intelligent automation solutions that eliminate repetitive tasks and streamline business processes. Save time, reduce errors.",
}

export default function WorkflowAutomationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] hero-glow-cyan pointer-events-none" />
        <div className="art-dots opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-3xl">
            <span className="text-accent font-bold tracking-widest text-sm uppercase mb-4 block">
              Smart Automation
            </span>
            <h1 className="text-5xl md:text-6xl font-black font-display mb-6 tracking-tight dark:text-white leading-tight">
              Stop Doing Busy Work. Start Automating.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Eliminate repetitive tasks, reduce manual errors, and free your team to focus on
              high-value work. Our intelligent automation solutions save time and drive measurable
              efficiency gains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-secondary to-primary text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                Explore Automation
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:385-501-3212"
                className="bg-muted border-2 border-border text-foreground px-8 py-4 rounded-full font-bold hover:border-accent transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                Call: 385-501-3212
              </a>
            </div>
          </div>
          <div className="mt-12 relative max-w-4xl">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
              <Image
                src="https://articulatevision.net/wp-content/uploads/2025/09/photo-1700427296131-0cc4c4610fc6-1024x678.jpeg"
                alt="Workflow technology visualization"
                width={1024}
                height={678}
                className="w-full h-auto"
              />
              <div className="image-aura" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black font-display dark:text-white mb-12">
            Why Automation Matters
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Save Hours Every Week",
                desc: "Automation eliminates routine tasks, freeing your team for strategic initiatives. The average organization saves 100+ hours per month.",
              },
              {
                icon: CheckCircle,
                title: "Zero Mistakes",
                desc: "Computers don't get tired. Ensure your customer data and financial records are perfect every time, eliminating costly human errors.",
              },
              {
                icon: Link2,
                title: "Connect Your Tools",
                desc: "Integrate your existing software to create seamless workflows. Cut out manual data entry and spreadsheets for good.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <item.icon className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-bold dark:text-white mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Solutions */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black font-display dark:text-white mb-12">
            What We Can Automate
          </h2>

          <div className="space-y-12">
            {/* Lead Routing */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-black font-display dark:text-white mb-4">
                  Lead Routing & CRM Updates
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Automatically assign leads to representatives based on territory, skill, or
                  availability. Nurture sequences trigger automatically, and leads advance through
                  your pipeline without manual input.
                </p>
                <ul className="space-y-3">
                  {[
                    "Intelligent lead assignment based on rules",
                    "Automated follow-up email sequences",
                    "Sales pipeline updates and notifications",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-accent mt-1" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-muted/50 border border-border rounded-2xl p-8">
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Result:</strong> Sales teams spend less time on admin, more time closing
                  deals. Average improvement: 30-40% faster pipeline progression.
                </p>
                <div className="bg-accent/10 rounded-lg p-4 text-sm">
                  <p className="text-muted-foreground">
                    Lead assignments that used to take hours are now instant. Your best reps get the
                    best leads automatically.
                  </p>
                </div>
              </div>
            </div>

            {/* Employee Onboarding */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-muted/50 border border-border rounded-2xl p-8 lg:order-2">
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Result:</strong> New hires are ready on day one. HR overhead drops by 60%,
                  and employee satisfaction increases significantly.
                </p>
                <div className="bg-accent/10 rounded-lg p-4 text-sm">
                  <p className="text-muted-foreground">
                    Onboarding workflow runs automatically from day one: IT access, training
                    modules, manager notifications, equipment setup - all without interrupting HR.
                  </p>
                </div>
              </div>
              <div className="lg:order-1">
                <h3 className="text-3xl font-black font-display dark:text-white mb-4">
                  Automated Employee Onboarding
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  New hires complete onboarding forms once. Workflows automatically create email
                  accounts, assign training modules, notify departments, and ensure nothing falls
                  through the cracks.
                </p>
                <ul className="space-y-3">
                  {[
                    "Create IT accounts and access permissions automatically",
                    "Assign and track training completion",
                    "Notify teams of new hire arrivals",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-accent mt-1" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Invoice Automation */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-black font-display dark:text-white mb-4">
                  Invoice & Payment Automation
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Eliminate invoice processing bottlenecks. Automate invoicing, payment reminders,
                  compliance checks, and ledger posting to improve cash flow and reduce payment
                  delays.
                </p>
                <ul className="space-y-3">
                  {[
                    "Automated invoice generation and sending",
                    "Payment reminders before due dates",
                    "Automatic ledger posting and reconciliation",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-accent mt-1" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-muted/50 border border-border rounded-2xl p-8">
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Result:</strong> Invoicing that used to take days now takes minutes.
                  Average improvement: 35% faster payment collection and 15% reduction in late
                  payments.
                </p>
                <div className="bg-accent/10 rounded-lg p-4 text-sm">
                  <p className="text-muted-foreground">
                    Every invoice is accurate. Late payments decrease significantly. Your cash flow
                    improves measurably.
                  </p>
                </div>
              </div>
            </div>

            {/* Custom Workflows */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-muted/50 border border-border rounded-2xl p-8 lg:order-2">
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Common Examples:</strong> Healthcare intake forms, insurance claims
                  processing, expense approvals, document routing, approval workflows, data
                  synchronization between systems.
                </p>
                <div className="bg-accent/10 rounded-lg p-4 text-sm">
                  <p className="text-muted-foreground">
                    Whatever your bottleneck is, automation can solve it. We design custom workflows
                    that fit your exact process.
                  </p>
                </div>
              </div>
              <div className="lg:order-1">
                <h3 className="text-3xl font-black font-display dark:text-white mb-4">
                  Custom Workflow Solutions
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Every business has unique processes. We design custom workflows that automate your
                  specific bottlenecks, whether that&apos;s healthcare intake, insurance claims,
                  expense approvals, or anything in between.
                </p>
                <ul className="space-y-3">
                  {[
                    "Fully customized to your exact workflow",
                    "Integrates with your existing systems",
                    "Scales as your business grows",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-accent mt-1" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black font-display mb-6 dark:text-white">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Let&apos;s identify your biggest time-wasters and build automation solutions that give
            you hours back every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-secondary to-primary text-white px-12 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg inline-flex items-center justify-center gap-2"
            >
              Start Automating
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
