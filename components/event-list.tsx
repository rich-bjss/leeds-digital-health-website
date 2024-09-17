import { Suspense } from "react"
import Link from "next/link"

import { format } from "date-fns"
import Event from "../lib/model/event"

import Image from "next/image"

import LoadingMessage from "./ui-elements/loading-message"

import { getPreviousEvents, getUpcomingEvents, getAllEvents } from "@/lib/api/events"
import LinkButton from "./ui-elements/buttons/link-button"

// When we build a list of events we can specify whether we want events relative to today.
// "upcoming" and "previous" show upcoming and previous events
// "dynamic" tries to find  upcoming events, and if it can't it'll use previous instead.
export type EventListState = "upcoming" | "previous" | "all" | "dynamic";

async function getEventsByState(state: EventListState): Promise<Event[]> {
  if (state == "upcoming") {
    return await getUpcomingEvents()
  } else if (state == "previous") {
    return await getPreviousEvents()
  } else if (state == "dynamic") {
    let checkUpcoming = await getUpcomingEvents();
    if (checkUpcoming.length == 0) {
      return await getPreviousEvents()
    } else {
      return checkUpcoming;
    }
  } else {
    return await getAllEvents(5);
  }
}

function getTitleByState(state: EventListState): string {
  if (state == "upcoming") {
    return "Upcoming events";
  } else if (state == "previous") {
    return "Previous events";
  } else {
    return "Events";
  }
}

async function DisplayEvents({
  forFooter,
  state
}: {
  forFooter?: boolean,
  state: EventListState
}) {
  // todo add a proper catch for this
  let previousEvents = await getEventsByState(state);

  if (forFooter) {
    previousEvents = previousEvents.slice(0, 3)
  }

  console.log(previousEvents);
  return (
    <>
      {previousEvents.map((event) => (
        <div
          key={event.slug}
          className="border border-pink rounded p-4 pb-8 mb-4 mx-4 flex justify-between"
        >
          <div>
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
          {event?.image?.url && <div>
            <Image alt={event.image.description || ""} src={`${event.image.url}?w=400&h=300`} width={200} height={150} />
          </div>}
        </div>
      ))}
      {forFooter && (
        <LinkButton className="py-2 text-center" href="/all-events">
          View More...
        </LinkButton>
      )}
    </>
  )
}

export default async function EventList({
  forFooter,
  state
}: {
  forFooter?: boolean
  state: EventListState
}) {
  return (
    <div className="bg-navy text-white" id="events">
      <div className="container grid grid-cols-1 mx-auto py-8">
        <h2 className="text-4xl font-bold mb-8 text-pink text-center sm:text-left">
          {getTitleByState(state)}
        </h2>
        <Suspense fallback={<LoadingMessage>Loading events...</LoadingMessage>}>
          <DisplayEvents forFooter={forFooter} state={state} />
        </Suspense>
      </div>
    </div>
  )
}
