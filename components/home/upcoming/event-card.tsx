import Event from "@/lib/model/event";
import LinkButton from "../../ui-elements/buttons/link-button";
import DateComponent from "@/components/ui-elements/date-component";
import MarkdownContent from "@/components/ui-elements/markdown-content";
import InteractiveCard from "@/components/ui-elements/interactive-card";

export default function EventCard({ event }: { event: Event }) {
    const eventHref = `/events/${event.slug}`
    return <InteractiveCard href={eventHref}
        className="p-2 sm:p-6 bg-slate-50 rounded-lg border border-gray-200 shadow-md mx-2 sm:mx-12 mt-4 mb-8 sm:my-12 hover:bg-slate-100 transition-colors cursor-pointer"
    >
        <div className="flex justify-center">
            <h1 className="text-2xl sm:text-4xl font-semibold text-navy">{event.title}</h1>
        </div>
        <div className="flex justify-center">
            <DateComponent className="text-slate-800 italic text-lg sm:text-xl" dateString={event.date}/>
        </div>
        <div className="lg:mx-16 my-8 text-navy max-h-96 overflow-y-auto sm:max-h-screen">
            <MarkdownContent markdownContent={event.description} />
        </div>
        <div className="flex justify-center">
            <LinkButton href={eventHref} className="px-8 py-4 text-lg">Find out more</LinkButton>
        </div>
    </InteractiveCard>
}