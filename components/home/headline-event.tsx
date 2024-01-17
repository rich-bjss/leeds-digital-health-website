import { Suspense } from "react"

import LoadingMessage from "../ui-elements/loading-message";
import MarkdownContent from "../ui-elements/markdown-content";
import LinkButton from "../ui-elements/link-button";
import FeatureSection from "../ui-elements/feature-section";
import DateComponent from "../ui-elements/date-component";

import { getHeadlineEvent } from "@/lib/api/events"


async function DisplayHeadlineEvent() {
    const headlineEvent = await getHeadlineEvent();

    console.log('headlineEvent:', headlineEvent);

    if (!headlineEvent) {
        return //display nothing if no headline event is set
    }

    return <FeatureSection
        sectionId="headline-event"
        className="bg-navy pt-16 pb-8"
        imageUrl={headlineEvent.image.url}
    >
        <div className="flex align-middle py-8">
            <div className="align-middle h-max mr-6">
                <span className="text-4xl text-pink font-bold md:pt-8 w-96">Upcoming:</span>
            </div>
            <div className="">
                <span className="text-4xl text-center text-white font-semibold md:pt-8">{headlineEvent.title}</span>
            </div>
        </div>
        <DateComponent className="text-white italic text-lg text-right w-max" dateString={headlineEvent.date} />
        <MarkdownContent markdownContent={headlineEvent.description} />
        <div className="flex justify-center">
            <LinkButton href={`/events/${headlineEvent.slug}`}><span className="text-2xl font-semibold">Find out more</span></LinkButton>
        </div>
    </FeatureSection>
}

export default function HeadlineEvent() {
    return (
        <Suspense fallback={<LoadingMessage>Loading headline events...</LoadingMessage>}>
            <DisplayHeadlineEvent />
        </Suspense>
    )
}