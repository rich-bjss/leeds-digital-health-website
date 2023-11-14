import "./globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"
import { getPreviousEvents } from "@/lib/api/events"
import { format } from "date-fns"
import Image from "next/image"

export const metadata = {
  title: `Leeds Digital Health`,
  description: `Leeds Digital Health is a community initiative to bring together healthcare and technical professionals, recognising Leeds as a hub for healthcare and technology innovation.`
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
})

function Header() {
  return (
    <nav className="bg-white" role="navigation">
      <div className="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">
        <div className="mr-4 md:mr-8">
          <Link href="/home">
            <Image
              className="w-40"
              src="/logo.svg"
              alt="Leeds Digital Health Logo"
            />
          </Link>
        </div>
        <div className="ml-auto hidden">
          <button
            className="flex items-center px-3 py-2 border rounded"
            type="button"
          >
            <svg
              className="h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full md:w-auto md:flex-grow md:flex md:items-center">
          <ul className="flex flex-col mt-4 -mx-4 pt-4 md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 border-0"></ul>
          <ul className="flex flex-col mt-4 -mx-4 pt-4 md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 border-0"></ul>
        </div>
      </div>
    </nav>
  )
}

async function Footer() {
  const previousEvents = await getPreviousEvents()

  if (previousEvents[0].errors) {
    return ""
  }
  return (
    <div className="bg-navy text-white" id="events">
      <div className="container grid grid-cols-1 mx-auto py-10">
        <h2 className="text-4xl font-bold mt-8 mb-8 text-pink">
          Previous events
        </h2>
        {previousEvents.map((event) => (
          <div
            key={event.slug}
            className="border border-pink rounded p-4 pb-8 mb-4"
          >
            <h3 className="text-xl font-bold">
              <p>{format(new Date(event.date), "do MMMM y")}</p>
            </h3>
            <div className="mb-8">
              <p>{event.title}</p>
            </div>
            <Link
              href={`/events/${event.slug}`}
              className="bg-pink p-4 top-0 rounded"
            >
              Details here
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <section className="min-h-screen">
          <main>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  )
}
