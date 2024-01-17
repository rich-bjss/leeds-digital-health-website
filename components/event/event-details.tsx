import { Suspense } from "react"

import EventTitle from "./event-title"
import Talks from "./talks"
import LinkButton from "../ui-elements/link-button"

import Event from "@/lib/model/event"
import { getEvent } from "@/lib/api/events"
import LoadingMessage from "../ui-elements/loading-message"

function eventIsFuture(dateString: string) {
    const eventDate = new Date(dateString)
    return eventDate > new Date();
}


async function DisplayEvent({ slug }: { slug: string }) {
    const { event }: { event: Event } = await getEvent(slug)

    if (!event) {
        return <p>No event found</p>
    }

    const displayMeetupButton = (
        event.meetupEventId !== null && (eventIsFuture(event.date))
    )

    return <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <EventTitle title={event.title} description={event.description} />
        <Talks talkList={event.talksCollection.items} />
        {displayMeetupButton && (
            <div className="flex justify-center">
                <LinkButton href={`https://www.meetup.com/leeds-digital-health/events/${event.meetupEventId}/`}>
                    <span className="font-bold">Sign up for free here →</span>
                </LinkButton>
            </div>
        )}
    </div>
}

export default function EventDetails({ slug }: { slug: string }) {
    return <Suspense fallback={<LoadingMessage>Loading event data...</LoadingMessage>}>
        <DisplayEvent slug={slug} />
    </Suspense>
}
