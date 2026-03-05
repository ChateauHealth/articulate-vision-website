import type { Metadata, Viewport } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Digital Solutions - Articulate Vision | Custom Software & Automation",
  description:
    "Articulate Vision - Digital Solutions for Salt Lake City & Beyond. Custom software, workflow automation, and digital marketing strategies to transform your business.",
  keywords:
    "digital solutions, custom software, workflow automation, digital marketing, Salt Lake City, Utah, SaaS, software development",
  authors: [{ name: "Articulate Vision" }],
  openGraph: {
    title: "Articulate Vision - Digital Solutions to Help You Grow",
    description:
      "Leading digital agency in Salt Lake City with custom software, workflow automation, and digital marketing solutions.",
    type: "website",
    url: "https://articulatevision.net",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdfdfd" },
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          <main className="pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
