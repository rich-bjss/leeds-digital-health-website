import Image from "next/image"
import Link from "next/link"
import MenuButton from "./menu-button"

import LinkButton from "../ui-elements/link-button"

export default function Header() {
    return (
      <nav className="bg-white fixed w-full h-22 z-50" role="navigation">
        <div className="container mx-auto px-4 py-5 flex flex-wrap items-center md:flex-no-wrap">
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
            <LinkButton href="/#upcoming">Upcoming Events</LinkButton>
          </div>
          <MenuButton />
          <div className="w-full md:w-auto md:flex-grow md:flex md:items-center">
            <ul className="flex flex-col mt-4 -mx-4 pt-4 md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 border-0"></ul>
            <ul className="flex flex-col mt-4 -mx-4 pt-4 md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 border-0"></ul>
          </div>
        </div>
      </nav>
    )
  }