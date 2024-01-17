import { Suspense } from "react";

import EventCard from "@/components/event/event-card";
import LoadingMessage from "@/components/ui-elements/loading-message";

import Event from "@/lib/model/event";
import { getUpcomingEvents } from "@/lib/api/events"

async function DisplayEvents() {
    const events: Event[] = await getUpcomingEvents();

    if (!events || events.length === 0) {
        return //display nothing if no events are upcoming
    }

    return <section id="upcoming-events" className="mt-24 container mx-auto">
        <h1 className="text-6xl font-bold ">Other Upcoming Events</h1>
        <div className="flex justify-center">
            <div>
                {events.map(event => <EventCard key={event.key} event={event} />)}
            </div>
        </div>
    </section>
}

export default function UpcomingEvents() {
    return <Suspense
        fallback={<LoadingMessage>Loading upcoming events...</LoadingMessage>}
    >
        <DisplayEvents />
    </Suspense>

}