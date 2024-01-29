"use client"

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
  if (!talk?.video) {
    return redirect(`/events/${eventSlug}/talk/${talkId}`)
  }

  return (
    <div className="p-2 bg-white">
      <h1 className="text-center font-bold text-2xl sm:text-4xl mb-4 text-navy">
        {talk.title}
      </h1>
      <EmbeddedVideo url={talk.video} />
    </div>
  )
}
