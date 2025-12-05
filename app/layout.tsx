import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { WeatherProvider } from "@/components/weather-provider"
import { WeatherOverlay } from "@/components/weather-overlay"
import { Chatbot } from "@/components/chatbot"
import { ThemeProvider } from "@/components/theme-provider"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Godfred Osei - Full-Stack Developer & AI Engineer",
  description:
    "Premium portfolio of Godfred Osei. Full-Stack Developer specializing in React, Next.js, Supabase, and AI Automation.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        <WeatherProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <WeatherOverlay />
            <Navigation />
            {children}
            <Chatbot />
            <Footer />
            <Analytics />
          </ThemeProvider>
        </WeatherProvider>
      </body>
    </html>
  )
}
