import { Suspense } from "react"

import Talks from "./talks"
import LinkButton from "../ui-elements/buttons/link-button"
import MarkdownContent from "../ui-elements/markdown-content"
import Event from "@/lib/model/event"
import LoadingMessage from "../ui-elements/loading-message"

import { cn, dark } from "@/lib/tailwind-helper"
import { getEvent } from "@/lib/api/events"

function eventIsFuture(dateString: string) {
  const eventDate = new Date(dateString)
  return eventDate > new Date()
}

async function DisplayEvent({ slug }: { slug: string }) {
  const { event }: { event: Event } = await getEvent(slug)

  if (!event) {
    return <p>No event found</p>
  }

  const displayMeetupButton =
    event.meetupEventId !== null && eventIsFuture(event.date)

  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto ">
        <h2
          className={cn(
            "mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900",
            // dark("text-white")
          )}
        >
          {event.title}
        </h2>
        <MarkdownContent markdownContent={event.description} />
      </div>
      <Talks talkList={event.talksCollection.items} />
      {displayMeetupButton && (
        <div className="flex justify-center">
          <LinkButton
            className="font-bold"
            href={`https://www.meetup.com/leeds-digital-health/events/${event.meetupEventId}/`}
          >
            Sign up for free →
          </LinkButton>
        </div>
      )}
    </div>
  )
}

export default function EventDetails({ slug }: { slug: string }) {
  return (
    <Suspense fallback={<LoadingMessage>Loading event data...</LoadingMessage>}>
      <DisplayEvent slug={slug} />
    </Suspense>
  )
}
