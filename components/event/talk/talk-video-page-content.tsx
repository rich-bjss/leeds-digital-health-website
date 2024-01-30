"use client"

import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

import EmbeddedVideo from "@/components/ui-elements/embedded-video"

import Talk from "@/lib/model/talk"

export default function TalkVideoPageContent({
  talk,
  eventSlug,
  talkId
}: {
  talk: Talk | undefined
  eventSlug: string
  talkId: string
}) {
  if (!talk?.video && !talk?.slides) {
    return redirect(`/events/${eventSlug}/talk/${talkId}`)
  }

  return (
    <div className="p-2 bg-white">
      <h1 className="text-center font-bold text-2xl sm:text-4xl mb-4 text-navy">
        {talk.title}
      </h1>
      {talk?.video && <EmbeddedVideo url={talk.video} />}
      {talk?.slides?.url && (
        <div className="w-full mx-auto my-8">
          <Link className="text-lg" href={talk.slides.url}>
            <div className="flex justify-center align-middle text-navy ">
              <div className="bg-white inline-flex hover:bg-slate-100 p-2 rounded">
                <Image
                  className="w-6 mr-4"
                  src="/slideshow.svg"
                  alt="Loading pulse"
                  width="5"
                  height="5"
                />
                Download slides &rarr;
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  )
}
