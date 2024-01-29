import Image from "next/image"
import LinkButton from "@/components/ui-elements/buttons/link-button"

import imageSource from "@/public/TMP_FALLBACK_GRAPHIC.jpg"

export default function HeadlineFallback() {
  return (
    <>
      <div className="w-full h-96 flex justify-center relative">
        <Image
          src={imageSource}
          alt="Abstract Blue Tech Image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex justify-center">
        <div className="w-10/12 sm:w-8/12">
          <div className="grid grid-cols-2 gap-8 sm:gap-16 py-8">
            <div>
              <h1 className="text-base sm:text-3xl text-white font-bold text-right ">
                At the heart of Digital Healthcare Technology in Leeds
              </h1>
            </div>
            <div className="">
              <div className="mx-auto mb-2">
                <p className="text-white text-base sm:text-3xl font-bold pb-2 text-left">
                  Keep up-to-date with our latest events
                </p>
              </div>
            </div>
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
