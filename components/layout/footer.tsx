import EventList, { EventListState } from "../event-list";

function FooterText() {
    return (
        <div className="bg-navy text-white font-bold text-center p-7">
            <a href="/all-events" className="p-5">
              <span>For all events, <span className="text-pink">click here</span></span>
            </a>
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
