import Image from "next/image"
import Link from "next/link"
import MenuButton from "./menu-button"

import LinkButton from "../ui-elements/buttons/link-button"

import { cn } from "@/lib/tailwind-helper"

export function NavLink({
  href,
  children
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={cn("text-xs px-4 py-2 sm:text-base border-2 font-bold border-navy bg-white rounded text-navy hover:bg-blue-50")}
    >
      {children}
    </Link>
  )
}

export default function Header() {
  return (
    <nav className="bg-white fixed h-22 z-10 w-full" role="navigation">
      <div className="container mx-auto py-2 px-2 sm:py-4 flex flex-wrap items-center">
        <div className="mr-12 w-full sm:w-max flex justify-center">
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
        <MenuButton />
        <div className="w-full sm:w-max">
          <ul className="w-full flex justify-center mt-4 pt-0 sm:mt-0">
            <li className="pr-2 sm:pr-8">
              <NavLink href="/news">News</NavLink>
            </li>
            <li className="pr-2 sm:pr-8">
              <NavLink href="/committee">Making it Possible</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
