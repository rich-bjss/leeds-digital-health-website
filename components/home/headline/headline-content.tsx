import { Suspense } from "react"

import LoadingMessage from "../../ui-elements/loading-message";
import HeadlineEvent from "./headline-event";

import { getHeadlineEvent } from "@/lib/api/events"
import HeadlineFallback from "./headline-fallback";

async function DisplayHeadlineContent() {
    const headlineEvent = await getHeadlineEvent();

    const imageUrl = headlineEvent?.image.url

    return <section id="headline" className="bg-navy py-8">
        {
            headlineEvent
                ? <HeadlineEvent event={headlineEvent} />
                : <HeadlineFallback />
        }
    </section>
}

export default function HeadlineContent() {
    return (
        <Suspense fallback={<LoadingMessage>Loading headline events...</LoadingMessage>}>
            <DisplayHeadlineContent />
        </Suspense>
    )
}