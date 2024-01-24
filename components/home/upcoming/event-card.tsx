import Event from "@/lib/model/event";
import LinkButton from "../../ui-elements/buttons/link-button";
import DateComponent from "@/components/ui-elements/date-component";
import MarkdownContent from "@/components/ui-elements/markdown-content";

export default function EventCard({ event }: { event: Event }) {

    return <article
        className="p-6 bg-slate-50 rounded-lg border border-gray-200 shadow-md mx-48 my-12 hover:bg-slate-100 cursor-pointer"
    >
        <div className="flex justify-center">
            <h1 className="text-4xl font-semibold">{event.title}</h1>
        </div>
        <div className="flex justify-center">
            <DateComponent className="text-slate-800 italic text-xl" dateString={event.date}/>
        </div>
        <div className="mx-48 my-8">
            <MarkdownContent markdownContent={event.description} />
        </div>
        <div className="flex justify-center">
            <LinkButton href={`/events/${event.slug}`}>Find out more</LinkButton>
        </div>
    </article>
}