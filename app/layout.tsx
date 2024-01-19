import "./globals.css"

import { Inter } from "next/font/google"

import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export const metadata = {
  title: `Leeds Digital Health`,
  description: `Leeds Digital Health is a community initiative to bring together healthcare and technical professionals, recognising Leeds as a hub for healthcare and technology innovation.`
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <section className="min-h-screen pt-24">
          <main>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  )
}
