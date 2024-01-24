'use client'

import { usePathname, redirect } from "next/navigation"

export default function Default(){
    redirect(usePathname().replace(/talk\/.*$/i, ''))
}