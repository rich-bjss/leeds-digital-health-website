import Link from "next/link";

import Event from "@/lib/model/event";
import LinkButton from "../ui-elements/link-button";

export default function EventCard({ event }: { event: Event }) {

    const eventDate = new Date(event.date)
    const readableDate = eventDate.toLocaleDateString('en-uk', { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" })
    return <article
        className="p-6 bg-slate-50 rounded-lg border border-gray-200 shadow-md mx-48 my-12 hover:bg-slate-100 cursor-pointer"
    >
        <div className="flex justify-center">
            <h1 className="text-4xl font-semibold">{event.title}</h1>
        </div>
        <div className="flex justify-center">
            <h2 className="text-slate-800 italic text-xl">{readableDate}</h2>
        </div>
        <div className="mx-48 my-8">
            <p>{event.description}</p>
        </div>
        <div className="flex justify-center">
            <LinkButton href={`/events/${event.slug}`}>Find out more</LinkButton>
        </div>
    </article>
}