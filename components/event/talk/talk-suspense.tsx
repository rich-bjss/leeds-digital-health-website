import { Suspense } from "react"
import { getEvent } from "@/lib/api/events"
import Event from "@/lib/model/event"
import LoadingMessage from "../../ui-elements/loading-message"
import TalkMainPage from "./talk-main-page"
import TalkNav from "./talk-nav"

async function DisplayTalk({
  talkId,
  eventSlug
}: {
  talkId: string
  eventSlug: string
}) {
  //looks inefficient, but Next.js should cache this fetch, so this is more efficient
  //than selecting the talk directly
  const { event }: { event: Event } = await getEvent(eventSlug)
  const talk = event.talksCollection.items.find(
    (talk) => talk.sys.id === talkId
  )

  if (!talk) {
    return <h1>No talk details to display</h1>
  }

  return (
    <div>
      <TalkNav
        eventSlug={eventSlug}
        talkId={talkId}
        currentPage="details"
        videoExists={talk?.video ? true : false}
      />
      <h1 className="text-center font-bold text-2xl sm:text-4xl">
        {talk.title}
      </h1>
      <TalkMainPage talk={talk} />
    </div>
  )
}

export default function TalkSuspense({
  talkId,
  eventSlug
}: {
  talkId: string
  eventSlug: string
}) {
  return (
    <div className="pys-8">
      <Suspense
        fallback={<LoadingMessage>Loading talk details...</LoadingMessage>}
      >
        <DisplayTalk eventSlug={eventSlug} talkId={talkId} />
      </Suspense>
    </div>
  )
}
