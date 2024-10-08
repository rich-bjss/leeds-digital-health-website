import Image from "next/image"
import Link from "next/link"
import MenuButton from "./menu-button"

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
      className={cn(
        "text-xs px-4 py-2 sm:text-lg font-bold bg-white text-navy",
        "hover:text-pink hover:border-b-2 border-pink"
      )}
    >
      {children}
    </Link>
  )
}

export default function Header() {
  return (
    <nav className="bg-white fixed h-22 z-50 w-full" role="navigation">
      <div className="py-2 px-2 sm:py-4 items-center flex justify-between ml-8">
        <div className="">
          <div className="mr-12 w-full ml-4 sm:w-max">
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
        </div>
        <ul className="w-full mt-4 pt-0 sm:mt-0 text-left sm:text-right sm:py-2">
          <li className="inline-block px-1">
            <NavLink href="/all-events">Events</NavLink>
          </li>
          <li className="inline-block px-1">
            <NavLink href="/committee">LDH Committee</NavLink>
          </li>
          <li className="inline-block px-1">
            <NavLink href="/contact-us">Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
