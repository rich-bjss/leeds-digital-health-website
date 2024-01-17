import Image from "next/image"
import Link from "next/link"

import LinkButton from "./ui-elements/link-button"

export default function Header() {
    return (
      <nav className="bg-white" role="navigation">
        <div className="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">
          <div className="mr-4 md:mr-8">
            <Link href="/">
              <Image
                priority
                className="w-40 h-auto"
                width="160"
                height="120"
                src="/logo.svg"
                alt="Leeds Digital Health Logo"
              />
            </Link>
          </div>
          <div className="mx-16">
            <LinkButton href="/#upcoming-events">Upcoming Events</LinkButton>
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