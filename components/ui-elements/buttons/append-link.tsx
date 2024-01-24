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
}) {
  const currentPath = usePathname()

  return (
    <Link href={`${currentPath}/${href}`} {...props}>
      {children}
    </Link>
  )
}
