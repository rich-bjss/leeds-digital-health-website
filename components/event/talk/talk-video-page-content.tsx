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
      <EmbeddedVideo url={talk.video} />
    </div>
  )
}
