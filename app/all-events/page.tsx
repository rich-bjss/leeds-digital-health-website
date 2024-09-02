import EventList from "@/components/event-list";

export default function PreviousEventsPage(){
    return (
        <>
            <EventList state="upcoming"/>
            <EventList state="previous"/>
        </>
    )
}