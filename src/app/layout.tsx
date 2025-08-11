import type { Metadata } from "next"
import "./globals.css"
import { Inter, Playfair_Display } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" })

export const metadata: Metadata = {
  title: { default: "SIGNS", template: "%s · SIGNS" },
  description: "There will be signs.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
