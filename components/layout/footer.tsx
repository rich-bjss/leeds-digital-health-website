import EventList, { EventListState } from "../event-list";

function FooterText() {
    return (
        <p>test</p>
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
