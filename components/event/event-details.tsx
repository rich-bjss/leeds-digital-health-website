import { Suspense } from "react"

import formatDistance from "date-fns/formatDistance"

import Talks from "./talk-card/talks"
import LinkButton from "../ui-elements/buttons/link-button"
import MarkdownContent from "../ui-elements/markdown-content"
import LoadingMessage from "../ui-elements/loading-message"
import VideoPlayer from "../ui-elements/video/video-player"
import DateComponent from "../ui-elements/date-component"

import Event from "@/lib/model/event"

import { cn, dark } from "@/lib/tailwind-helper"
import { getEvent } from "@/lib/api/events"
import { isFuture } from "../ui-elements/date-component"
import Carousel from "../ui-elements/carousel"

async function DisplayEvent({ slug }: { slug: string }) {
  const { event }: { event: Event } = await getEvent(slug)

  if (!event) {
    return <p>No event found</p>
  }

  const eventIsFuture = isFuture(event.date)

  const displayMeetupButton = event.meetupEventId !== null && eventIsFuture

  const dateDistance = formatDistance(new Date(event.date), new Date(), {
    addSuffix: true
  })

  return (
    <>
      <div className="sm:px-4 mx-auto max-w-screen-xl lg:my-16 lg:px-6">
        <div className="flex flex-wrap justify-center sm:min-h-1/2">
          <div className="bg-white w-5/12 mb-4 text-right">
            <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl text-navy">
              {event.title}
            </h1>
          </div>
          <div className="w-1/12"></div>
          <div className="w-5/12 min-h-1/2 text-left">
            <div className="flex font-light text-gray-500 ">
              <div className="text-sm sm:text-lg pt-4">
                <span className="uppercase">
                  {!eventIsFuture && "PREVIOUSLY HOSTED"}
                </span>
                <p className="text-sm sm:text-2xl text-navy font-semibold">
                  <DateComponent dateString={event.date} />
                </p>
                <p className="text-right">{dateDistance}</p>
                <p>{event.venue?.address}</p>
              </div>
            </div>
          </div>
        </div>
        {event.video && <VideoPlayer videoUrl={event.video.url} />}
      </div>
      {event.description && (
        <div className="my-8 lg:px-32 md:px-16 sm:px-4 lg:my-16">
          <MarkdownContent
            className="w-full p-4 text-navy bg-gray-50 content text-center rounded"
            markdownContent={event.description}
          />
        </div>
      )}
      <div className="px-1 sm:px-8">
        <Talks talkList={event.talksCollection.items} />
      </div>
      <Carousel images={event.galleryCollection.items} / >
      {displayMeetupButton && (
        <div className="flex justify-center pt-8">
          <LinkButton
            className="font-bold px-8 py-4 text-xl"
            href={`https://www.meetup.com/leeds-digital-health/events/${event.meetupEventId}/`}
          >
            Sign up for free →
          </LinkButton>
        </div>
      )}
    </>
  )
}

export default function EventDetails({ slug }: { slug: string }) {
  return (
    <Suspense fallback={<LoadingMessage>Loading event data...</LoadingMessage>}>
      <DisplayEvent slug={slug} />
    </Suspense>
  )
}
