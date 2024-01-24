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
        "bg-pink px-8 py-4 rounded text-lg text-white",
        className ? className : ""
      )}
      href={href}
    >
      {children}
    </Link>
  )
}
