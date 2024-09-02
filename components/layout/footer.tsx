import EventList, { EventListState } from "../event-list";
import LinkButton from "../ui-elements/buttons/link-button";

function FooterText() {
    return (
        <div className="bg-navy p-3 flex justify-center">
            <LinkButton className="bg-pink p-4 top-0 rounded" href="/all-events">
                <span>Show all events</span>
            </LinkButton>
        </div>
    )
}

export default function Footer({state, showEventList}: {state?: EventListState, showEventList?: boolean}){
    if (state == undefined) {
        state = "upcoming"
    }
    if (showEventList == undefined) {
        showEventList = true;
    }
    if (showEventList) {
        return (
            <>
            <FooterText />
            <EventList forFooter state={state} />
            </>
        )
    } else {
        return (
            <FooterText />
        )
    }
}
