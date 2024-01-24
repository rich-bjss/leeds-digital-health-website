import { Suspense } from "react"
import { getEvent } from "@/lib/api/events"
import Event from "@/lib/model/event"
import LoadingMessage from "../../ui-elements/loading-message"
import EmbeddedVideo from "../../ui-elements/embedded-video"
import TabbedSection from "../../ui-elements/tabs/tabbed-section"
import { TabPage } from "../../ui-elements/tabs/tabbed-section"
import TalkMainPage from "./talk-main-page"

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

  const tabPages: TabPage[] = []

  tabPages[0] = {
    tabName: "Talk Details",
    page: <TalkMainPage talk={talk} />
  }

  if (talk.video)
    tabPages.push({
      tabName: "Video",
      page: <EmbeddedVideo url={talk.video} />
    })

  return <TabbedSection pages={tabPages} />
}

export default function TalkDetails({
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
      <DisplayTalk eventSlug={eventSlug} talkId={talkId} />
    </Suspense>
  )
}
