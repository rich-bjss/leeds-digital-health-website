"use client"

import { useRouter, usePathname } from "next/navigation"

import { cn } from "@/lib/tailwind-helper"

export default function InteractiveCard({
  children,
  className,
  appendHref
}: {
  children: React.ReactNode
  className?: string
  appendHref: string
}) {
  const router = useRouter()

  const newUrl = `${usePathname()}/${appendHref}`

  return (
    <article className={cn("cursor-pointer",className ? className : "")} onClick={() => router.push(newUrl)}>
        {children}
    </article>
  )
}
