import EventList, { EventListState } from "../event-list";

export default function Footer({state}: {state: EventListState}){
    return <EventList forFooter state={state}/>
}
