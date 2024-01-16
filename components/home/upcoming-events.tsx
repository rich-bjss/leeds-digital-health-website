import EventCard from "@/components/event/event-card";
import LoadingMessage from "@/components/loading-message";
import { getUpcomingEvents } from "@/lib/api/events"
import Event from "@/lib/model/event";
import { Suspense } from "react";

async function DisplayEvents() {
    const events: Event[] = await getUpcomingEvents();

    if (!events || events.length === 0) {
        return <h1>No events to display</h1>
    }

    return <div>
        {events.map(event => <EventCard key={event.key} event={event} />)}
    </div>
}

export default function UpcomingEvents() {
    return <section id="upcoming-events" className="mt-32 container mx-auto">
        <h1 className="text-6xl font-bold ">Our Upcoming Events</h1>
        <div className="flex justify-center">
            <Suspense
                fallback={<LoadingMessage>Loading upcoming events...</LoadingMessage>}
            >
                <DisplayEvents />
            </Suspense>
        </div>
    </section>
}