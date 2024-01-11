import Link from "next/link"
import { draftMode } from "next/headers"

import MoreStories from "../../more-stories"
import Avatar from "../../avatar"
import Date from "../../date"
import CoverImage from "../../cover-image"
import Image from "next/image"

import { Markdown } from "@/lib/markdown"
import { getAllEvents, getEvent } from "@/lib/api/events"
import EventTitle from "@/components/event/event-title"
import Talks from "@/components/event/talks"

import Event from "@/lib/model/event"
import { Suspense } from "react"

export async function generateStaticParams() {
  const events = await getAllEvents()

  return events.map((event) => ({
    slug: event.slug
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {

  //TODO: This can delay page loading if the request is slow;
  //  consider finding optimisation?
  //Good news is that caching should prevent both getEvent calls from being a full fetch
  //But the <Suspense> pattern below may be pointless if the page won't load until the metadata
  //  fetch is completed
  const { event }: { event: Event } = await getEvent(params.slug)

  return {
    title: `Leeds Digital Health - Events - ${event.title}`,
    description: event.description
  }
}

async function EventInfo({ slug }: { slug: string }) {
  const { event }: { event: Event } = await getEvent(slug)

  if (!event) {
    return <p>No event found</p>
  }

  return <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <EventTitle title={event.title} description={event.description} />
    <Talks talkList={event.talksCollection.items} />
  </div>
}

export default async function EventPage({
  params
}: {
  params: { slug: string }
}) {

  return (
    <div className="container mx-auto p-5 min-h-40">
      <section className="bg-white dark:bg-gray-900 min-h-40">
        <Suspense fallback={<div className="min-h-64">
          <p className="italic text-center animate-[loading_1.2s_ease-in-out_infinite]">Loading event data...</p>
        </div>}>
          <EventInfo slug={params.slug} />
        </Suspense>
      </section>
    </div>
  )
}
