import { Dispatch, SetStateAction } from "react"

import { cn } from "@/lib/tailwind-helper"

export default function TabButton({
  children,
  tabNumber,
  currentTabNumber,
  setTabPage
}: {
  children: React.ReactNode
  tabNumber: number
  currentTabNumber: number
  setTabPage: Dispatch<SetStateAction<number>>
}) {
  const active = currentTabNumber === tabNumber
  
  return (
    <button
      className={cn(
        "border-0 sm:py-2  w-36 sm:rounded-t-xl",
        active ? "bg-slate-200" : "hover:bg-white active:bg-white bg-slate-300",
        "font-bold border-1"
      )}
      onClick={() => setTabPage(tabNumber)}
    >
      {children}
    </button>
  )
}
