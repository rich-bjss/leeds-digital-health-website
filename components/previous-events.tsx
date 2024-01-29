import { Suspense } from "react"
import Link from "next/link"

import { format } from "date-fns"

import LoadingMessage from "./ui-elements/loading-message"

import { getPreviousEvents } from "@/lib/api/events"
import LinkButton from "./ui-elements/buttons/link-button"

async function DisplayPreviousEvents({ forFooter }: { forFooter?: boolean }) {
  let previousEvents = await getPreviousEvents()
  if (previousEvents[0].errors) {
    return (
      <div className="pl-8">
        <p className="font-semibold pb-8">
          There was an error fetching previous events. Please try again later.
        </p>
      </div>
    )
  }

  if (forFooter) {
    previousEvents = previousEvents.slice(0, 3)
  }

  return (
    <>
      {previousEvents.map((event) => (
        <div
          key={event.slug}
          className="border border-pink rounded p-4 pb-8 mb-4 mx-4"
        >
          <h3 className="text-xl font-bold">
            <p>{format(new Date(event.date), "do MMMM y")}</p>
          </h3>
          <div className="mb-8">
            <p>{event.title}</p>
          </div>
          <Link
            href={`/events/${event.slug}`}
            className="bg-pink p-4 top-0 rounded"
          >
            Details here
          </Link>
        </div>
      ))}
      {forFooter && (
        <LinkButton className="py-2 text-center" href="/previous-events">
          View More...
        </LinkButton>
      )}
    </>
  )
}

export default async function PreviousEvents({
  forFooter
}: {
  forFooter?: boolean
}) {
  return (
    <div className="bg-navy text-white" id="events">
      <div className="container grid grid-cols-1 mx-auto py-8">
        <h2 className="text-4xl font-bold mb-8 text-pink text-center sm:text-left">
          Previous events
        </h2>
        <Suspense fallback={<LoadingMessage>Loading events...</LoadingMessage>}>
          <DisplayPreviousEvents forFooter={forFooter} />
        </Suspense>
      </div>
    </div>
  )
}
