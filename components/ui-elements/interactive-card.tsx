"use client"

import { useRouter, usePathname } from "next/navigation"

import { cn } from "@/lib/tailwind-helper"

export default function InteractiveCard({
  children,
  className,
  href,
  appendHref
}: {
  children: React.ReactNode
  className?: string
  href: string
  appendHref?: boolean
}) {
  const router = useRouter()

  const path = usePathname()

  const newUrl = appendHref ? `${path}/${href}` : href

  return (
    <article
      className={cn("cursor-pointer", className ? className : "")}
      onClick={() => router.push(newUrl)}
    >
      {children}
    </article>
  )
}
