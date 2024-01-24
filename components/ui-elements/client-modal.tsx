"use client"

import { useRouter } from "next/navigation"
import { MouseEventHandler, useCallback, useEffect, useRef } from "react"

import { motion } from "framer-motion"
import BackButton from "./buttons/back-button"

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const backdropRef = useRef(null)
  const dialogContainerRef = useRef(null)

  const onCloseModal = useCallback(() => {
    router.back()
  }, [router])

  const handleMouseClick: MouseEventHandler = useCallback(
    (event) => {
      if (
        event.target === backdropRef.current ||
        event.target === dialogContainerRef.current
      ) {
        if (onCloseModal) onCloseModal()
      }
    },
    [onCloseModal, backdropRef, dialogContainerRef]
  )

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onCloseModal()
    },
    [onCloseModal]
  )

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown)

    return () => {
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [onKeyDown])

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full z-20 flex align-middle justify-center bg-black/80 p-4 sm:p-16 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.35 } }}
      exit={{ opacity: 0 }}
      ref={backdropRef}
      onClick={handleMouseClick}
    >
      <div
        className="block w-full rounded-lg h-full"
        onClick={(e) => e.stopPropagation()}
        ref={dialogContainerRef}
      >
        <div className="fixed">
          <BackButton className="rounded-t-2xl"/>
        </div>
        <div className="h-full">{children}</div>
      </div>
    </motion.div>
  )
}
