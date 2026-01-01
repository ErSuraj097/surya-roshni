import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Suryaroshni Professional Lighting | Premium Lighting Solutions",
  description:
    "Leading manufacturer of professional lighting solutions for commercial, industrial, and architectural applications. Energy-efficient LED lighting and smart lighting systems.",
  generator: "v0.app",
  keywords: [
    "professional lighting",
    "LED lighting",
    "commercial lighting",
    "industrial lighting",
    "smart lighting",
    "energy efficient",
  ],
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3B5BDB" },
    { media: "(prefers-color-scheme: dark)", color: "#5C7CFA" },
  ],
  width: "device-width",
  initialScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
