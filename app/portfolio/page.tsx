import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Articulate Vision",
  description:
    "Articulate Vision Portfolio - Case studies and successful projects in digital marketing, custom software, and workflow automation.",
}

const projects = [
  {
    title: "Park City Luxury Retail Campaign",
    category: "Digital Marketing",
    color: "secondary",
    desc: "Comprehensive digital marketing strategy including SEO, social media, and paid advertising that increased foot traffic by 85%.",
    results: "200% increase in online inquiries, $1.2M revenue impact",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCm4nCDXqaQ9lXbTpZB7TKp6d-5hf6VGUVSazTiB9jXJpb23zUMiKU4rk1gdk_G8tbHWPfwNTcJ9h5gx0WIC3Ybdc8lN6kJGyD8YiLPGrBCXOZvEEvDaH3xWX9d9QTlGP79LXAuQab0hOdpkvdG9wr21myX5plTJVbSEdveFpIqx_FOL7InQXWqkWRuveUqUVBAJFATaiZHWClGn7h0",
  },
  {
    title: "Manufacturing ERP Solution",
    category: "Custom Software",
    color: "primary",
    desc: "Custom ERP system integrating inventory, finance, and production management for a Utah manufacturing company.",
    results: "40% reduction in operational costs, 60% faster order processing",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-8ejfXFjEh-Tv1UG11RPoxnqqrvjgY3XZGtkylf-aXUV0hIns4wFbC3anYWCE-a4DAR_RA-mGjSvB_rKI-ZuFnbHJbYUzK0vTgKdFqCEFcvmHohHrLy16i5xYcVx_sW5q7gO5L8H8Yw5rr3kjKWXr8Grm8Itv6LR3NPvY41nTHV5mhUqTiPVNBvQbgfjm2KRfRXC-UcTDqEt1bgo1MtlmbvOQRjRriaTOubvDAmGJMZJxnwejAA_gUnBa_AcpmkF-HUSEAn7G-NM",
  },
  {
    title: "Healthcare Intake Automation",
    category: "Workflow Automation",
    color: "accent",
    desc: "Automated patient intake system with HIPAA-compliant workflows reducing manual processing by 90%.",
    results: "12 hours/week saved, 100% HIPAA compliant, 95% patient satisfaction",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx-D-e_bGhl9sRRW6INgUwsLqST1iK2o3PBu2a9KLYTL7HJQ_7YbP94ApgI7nim7ByCaaemrdPiwj0umIZ_Kv4E_LIM9RjW8JW9BB0KBLcBj57V_B3cXF0JXA3KEaZAVhzomIKSD0fXA66-EjTiFBjQDmCYVdJyZs-yg8eVyVKSxsplgj80YMrXWNMDJ7W-pRQ_M-GEb9VOgyHlBqxf0I2o9jduGB-RVeMPR_ICKpz-VbXV3rdsreHw-5i4LkgpQptru6cL3h2W94",
  },
  {
    title: "Real Estate Management Platform",
    category: "Custom Software",
    color: "accent",
    desc: "Full-stack web application for property management enabling remote portfolio oversight and client communication.",
    results: "300+ properties managed, $500K annual value",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkxq4Q_mbdqMZizhlJlPihbLPVtjU-XOclrYSUvLPd14OeCMNSs1iKus_JNm0gbGGX_OqB7w_pHzSYX-16hw0VznhZcoxwh_5BUCn2sXnRiDYTl3H_103BEBrCOkNDViX7nFuFvh1GfwXCm22kXtMhClPH4Ga12r2D4xehFFZOUXoK1J3c7CHqbf81SZFFGyPiX0SsAxj5i8OWbmcoKhNVqNJuqnlZ3fr0VXziCz05I2klRG9h7utWlzXrw1Sn3CxeVe_J_O8-JOc",
  },
  {
    title: "B2B Email Marketing Automation",
    category: "Digital Marketing",
    color: "primary",
    desc: "Multi-tier email nurture campaigns generating quality leads for a SaaS company serving construction industry.",
    results: "35% open rate, $2.1M pipeline generated annually",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5w1dOJiTdoggx8SaVeluZUPJG6s3yQd4sYwx4-MpA-C6KHs-0B7FDaPA4F5xacRvb_Hk0jHNhv1IIlQRFAjPFnb3V195Kjqc-vfxjLiA_szXJb5nhfEUSLBrew2PDQnCMVoUy1SE0cLyxWffQZeAnqjk8ta8_8Skfao0qbguH9-IeiZt75PfYgxKjXzt3z93FS_4JaLVhD9aITXNfgGMDz3UftxiUxAkaEt7AKrqCwiUJpim1aTzzNQSJX8GK8O6hhImjv8NO-qg",
  },
  {
    title: "Field Service Mobile App",
    category: "Custom Software",
    color: "secondary",
    desc: "Real-time field service tracking app for HVAC contractor improving job scheduling and customer communication.",
    results: "25% faster job completion, 40% improved scheduling efficiency",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDu4gRTJUvj52P-pJ9ok0x2YITB3uNhBn8ud7hCMnDNSq5YpAKV0NfPQECo4I6Ly7A4bIYngI_dDLez5Jep7TDKs7mNPRTUlt6OzQctm_LORxvPUIwxlptSrje64YlJK-Z7XctQyGpdEyNwhPsQcs3RvSQZDTYVkcHNVk6oPsE_MGL-w8L5CmW2-2fGpYJVp_RvAa0N4rASdrfJcryDOwpOsqgemUeUBkr-wF9kLgjzXotH31yfTZ-d7WGashD93vNsvBoPhwi-4jU",
  },
]

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden mb-20 pt-12">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] hero-glow pointer-events-none" />
        <div className="art-dots" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center py-20">
          <h1 className="text-5xl md:text-6xl font-black font-display mb-6 tracking-tight dark:text-white">
            Our <span className="gradient-text">Impact</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore real-world projects where we&apos;ve delivered transformative digital
            solutions, driving measurable results and sustainable growth for our clients.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-muted/50 border border-border rounded-2xl overflow-hidden transition-all duration-300 portfolio-card"
            >
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                <Image
                  alt={project.title}
                  src={project.img}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <span
                  className={`text-[10px] uppercase tracking-widest font-bold text-${project.color} mb-2 block`}
                >
                  {project.category}
                </span>
                <h3 className="text-xl font-bold dark:text-white mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.desc}</p>
                <div className="mb-4 space-y-2 text-xs text-muted-foreground">
                  <div>
                    <strong>Results:</strong> {project.results}
                  </div>
                </div>
                <a
                  className="text-primary text-sm font-semibold flex items-center gap-1 group/link cursor-pointer hover:gap-2 transition-all"
                  href="#"
                >
                  View Case Study
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black font-display mb-16 dark:text-white text-center">
            Our Track Record
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "50+", label: "Projects Delivered", color: "primary" },
              { stat: "$15M+", label: "Client Revenue Impact", color: "secondary" },
              { stat: "100%", label: "Client Satisfaction", color: "accent" },
              { stat: "10+", label: "Years Experience", color: "primary" },
            ].map((item) => (
              <div key={item.label}>
                <div className={`text-5xl font-black text-${item.color} mb-2`}>{item.stat}</div>
                <div className="text-lg font-semibold text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black font-display mb-12 dark:text-white text-center">
            Industries We Serve
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              "Healthcare",
              "Manufacturing",
              "Real Estate",
              "Retail & E-commerce",
              "Financial Services",
              "Construction",
              "Professional Services",
              "Technology",
            ].map((industry) => (
              <div
                key={industry}
                className="bg-muted/50 border border-border rounded-xl p-4 text-center"
              >
                <span className="text-sm font-semibold text-muted-foreground">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black font-display mb-6 dark:text-white">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Let&apos;s discuss how we can deliver similar results for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-primary text-white px-12 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg cursor-pointer"
          >
            Start Your Project
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
