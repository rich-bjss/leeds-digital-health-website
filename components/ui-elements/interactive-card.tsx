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

  console.log(usePathname())

  const newUrl = appendHref ? `${usePathname()}/${href}` : href

  console.log(newUrl)

  return (
    <article
      className={cn("cursor-pointer", className ? className : "")}
      onClick={() => router.push(newUrl)}
    >
      {children}
    </article>
  )
}
