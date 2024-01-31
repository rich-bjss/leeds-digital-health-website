import Image from "next/image"

import { PT_Sans_Narrow } from "next/font/google"

import LinkButton from "@/components/ui-elements/buttons/link-button"

import imageSource from "@/public/roundtable.jpg"

import { cn } from "@/lib/tailwind-helper"

const headlineFont = PT_Sans_Narrow({
  subsets: ["latin"],
  weight: "700"
})

export default function HeadlineFallback() {
  return (
    <>
      <div className="w-full h-96 flex justify-center relative">
        <Image
          src={imageSource}
          alt="Round table event"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute z-10 w-full h-full left-0 top-0 bg-white opacity-60" />
        <div className="absolute z-20 w-full h-full left-0 top-0 flex justify-end p-2 sm:pt-2 md:pr-8 lg:pt-4">
          <div className="text-right w-full sm:w-4/12 text">
            <h2
              className={cn(
                "text-pink leading-none font-bold text-3xl lg:text-5xl sm:leading-tight md:leading-tight md:text-4xl",
                headlineFont.className
              )}
            >
              Connecting digital health leaders and innovators in the Leeds City
              Region to share ideas, innovations, and best practice.
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-fit py-6">
          <div className="mx-auto">
            <p className="text-white text-base sm:text-3xl font-bold pb-2 text-center">
              Keep up-to-date with our latest events
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <LinkButton
          href="https://www.meetup.com/leeds-digital-health/join/"
          className="px-4 py-2 sm:px-8 sm:py-4 text-sm sm:text-lg"
        >
          Join us on Meetup &rarr;
        </LinkButton>
      </div>
    </>
  )
}
