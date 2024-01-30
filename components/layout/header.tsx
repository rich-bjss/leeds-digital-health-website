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
        "hover:text-blue-700 hover:border-b-2 border-blue-700"
      )}
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
            <li className="">
              <NavLink href="/news">News</NavLink>
            </li>
            <li className="">
              <NavLink href="/committee">LDH Committee</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
