import { format } from "date-fns"

import Link from "next/link"

import { getPreviousEvents } from "@/lib/api/events"
import { Suspense } from "react"
import LoadingMessage from "./ui-elements/loading-message"

async function PreviousEvents() {
    const previousEvents = await getPreviousEvents()
    if (previousEvents[0].errors) {
        return <div className="pl-8">
            <p className="font-semibold pb-8">There was an error fetching previous events. Please try again later.</p>
        </div>
    }
    return (<>
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
    </>
    )
}

export default async function Footer() {

    return (
        <div className="bg-navy text-white" id="events">
            <div className="container grid grid-cols-1 mx-auto py-10">
                <h2 className="text-4xl font-bold mt-8 mb-8 text-pink">
                    Previous events
                </h2>
                <Suspense fallback={<LoadingMessage>Loading events...</LoadingMessage>}>
                    <PreviousEvents />
                </Suspense>
            </div>
        </div>
    )
}