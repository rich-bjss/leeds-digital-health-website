import { Suspense } from "react"

import TalkVideoPageContent from "./talk-video-page-content"
import LoadingMessage from "@/components/ui-elements/loading-message"
import TalkNav from "./talk-nav"

import Event from "@/lib/model/event"
import { getEvent } from "@/lib/api/events"

async function DisplayTalkVideo({
  eventSlug,
  talkId
}: {
  eventSlug: string
  talkId: string
}) {
  //looks inefficient, but Next.js should cache this fetch, so this is more efficient
  //than selecting the talk directly
  const { event }: { event: Event } = await getEvent(eventSlug)
  const talk = event.talksCollection.items.find(
    (talk) => talk.sys.id === talkId
  )

  return (
    <div>
      <TalkNav
        eventSlug={eventSlug}
        talkId={talkId}
        currentPage="video"
        videoExists={talk?.video ? true : false}
      />
      <TalkVideoPageContent talk={talk} eventSlug={eventSlug} talkId={talkId} />
    </div>
  )
}

export default function TalkVideoSuspense({
  talkId,
  eventSlug
}: {
  talkId: string
  eventSlug: string
}) {
  return (
    <Suspense
      fallback={<LoadingMessage>Loading talk details...</LoadingMessage>}
    >
      <DisplayTalkVideo eventSlug={eventSlug} talkId={talkId} />
    </Suspense>
  )
}
