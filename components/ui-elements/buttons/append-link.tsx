"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function AppendLink({
  href,
  children,
  ...props
}: {
  href: string
  children: React.ReactNode
  [key: string]: any
}) {
  const currentPath = usePathname()

  return (
    <Link
      href={`${currentPath}/${href}`}
      onClick={(e) => e.stopPropagation()}
      {...props}
    >
      {children}
    </Link>
  )
}
