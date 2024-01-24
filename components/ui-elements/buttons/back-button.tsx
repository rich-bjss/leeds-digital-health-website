"use client"

import { useRouter } from "next/navigation"

import { cn, active, hover } from "@/lib/tailwind-helper"
export default function BackButton({
  className,
  ...props
}: {
  className?: string
}) {
  const router = useRouter()

  return (
    <div
      className={cn(
        "bg-slate-200 px-4 py-2 w-fit cursor-pointer",
        className ? className : ""
      )}
      onClick={router.back}
    >
      <p className="text-2xl">&larr;</p>
    </div>
  )
}
