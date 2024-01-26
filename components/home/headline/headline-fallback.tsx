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
      <div className="flex justify-center py-8">
        <div className="w-96 align-middle mx-16">
          <p className="text-3xl text-white font-bold text-right ">
            At the heart of Digital Healthcare Technology in Leeds
          </p>
        </div>
        <div className="">
          <div className="container mx-auto mb-2">
            <p className="text-white text-2xl font-bold border-b pb-2">
              Keep up-to-date with our latest events
            </p>
          </div>
          <div className="container mx-auto pt-4">
            <LinkButton
              href="https://www.meetup.com/leeds-digital-health/join/"
              className="px-8 py-4 text-lg"
            >
              Sign up for free →
            </LinkButton>
          </div>
        </div>
      </div>
    </>
  )
}
