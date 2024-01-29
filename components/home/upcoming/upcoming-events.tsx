import { Suspense } from "react";

import EventCard from "@/components/home/upcoming/event-card";
import LoadingMessage from "@/components/ui-elements/loading-message";

import Event from "@/lib/model/event";
import { getUpcomingEvents } from "@/lib/api/events"

async function DisplayEvents() {
    const events: Event[] = await getUpcomingEvents();

    if (!events || events.length === 0) {
        return //display nothing if no events are upcoming
    }

    return <section id="other-upcoming-events" className="mt-8 sm:mt-12 lg:mt-24 container mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-right mr-2 sm:mr-0 sm:text-left text-navy">Other Upcoming Events</h1>
        <div className="flex justify-center">
            <div>
                {events.map(event => <EventCard key={event.slug} event={event} />)}
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