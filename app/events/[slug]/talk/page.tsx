'use client'

import { redirect } from "next/navigation"
import { usePathname } from "next/navigation"

export default function NotModal (){
  redirect(usePathname()?.replace(/talk$/i, '') || "/")
}