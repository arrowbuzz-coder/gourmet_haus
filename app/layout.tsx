import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Geist, Great_Vibes } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cursive",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Bistro Alpen - Fine German Dining in Garmisch-Partenkirchen",
  description:
    "Experience the finest German cuisine crafted with passion and served with elegance at Bistro Alpen in Garmisch-Partenkirchen. Book your table today.",
  keywords: [
    "restaurant",
    "German cuisine",
    "fine dining",
    "Garmisch-Partenkirchen",
    "Alpine",
    "gourmet",
    "reservations",
    "Bistro Alpen",
  ],
  icons: {
    icon: [
      {
        url: "/logo_bistro.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo_bistro.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo_bistro.png",
        type: "image/png",
      },
    ],
    apple: "/logo_bistro.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${geist.variable} ${greatVibes.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
