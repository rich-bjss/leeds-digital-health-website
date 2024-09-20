import Link from "next/link"

import { cn } from "@/lib/tailwind-helper"

export default function LinkButton({
  children,
  href,
  className
}: {
  children: React.ReactNode
  href: string
  className?: string
}) {
  return (
    <Link
      className={cn(
        "bg-pink rounded text-white",
        className ? className : ""
      )}
      href={href}
    >
      {children}
    </Link>
  )
}
