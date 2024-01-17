import { Suspense } from "react"

import LoadingMessage from "../ui-elements/loading-message";
import MarkdownContent from "../ui-elements/markdown-content";

import { getHeadlineEvent } from "@/lib/api/events"
import LinkButton from "../ui-elements/link-button";


async function DisplayHeadlineEvent() {
    const headlineEvent = await getHeadlineEvent();

    console.log('headlineEvent:', headlineEvent);

    if (!headlineEvent) {
        return //display nothing if no headline event is set
    }

    return <section id="headline-event" className="bg-navy pt-16 pb-8">
        <div
            className="w-full bg-center bg-cover h-96 "
            style={{
                backgroundImage: `url(${headlineEvent.image.url}?w=1050&q=75)`,
                backgroundPosition: `center 75%`
            }}
        >
            <div className="flex items-center justify-center w-full h-full bg-white bg-opacity-30">
                <div className="text-center"></div>
            </div>
        </div>
        <div className="container mx-auto">
            <div className="flex align-middle py-8">
                <div className="align-middle h-max mr-6">
                    <span className="text-4xl text-pink font-bold md:pt-8 w-96">Upcoming:</span>
                </div>
                <div className="">
                    <span className="text-4xl text-center text-white font-semibold md:pt-8">{headlineEvent.title}</span>
                </div>
            </div>
            <MarkdownContent markdownString={headlineEvent.description} />
            <div className="flex justify-center">
                <LinkButton href={`/events/${headlineEvent.slug}`}><span className="text-2xl font-semibold">Find out more</span></LinkButton>
            </div>
        </div>
    </section>
}

export default function HeadlineEvent() {
    return (
        <Suspense fallback={<LoadingMessage>Loading headline events...</LoadingMessage>}>
            <DisplayHeadlineEvent />
        </Suspense>
    )
}