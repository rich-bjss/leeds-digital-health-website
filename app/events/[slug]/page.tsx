import EventDetails from "@/components/event/event-details"

import Event from "@/lib/model/event"
import { getAllEvents, getEvent } from "@/lib/api/events"

export async function generateStaticParams() {
  const events = await getAllEvents()

  return events.map((event) => ({
    slug: event.slug
  }))
}

export async function generateMetadata({
  params
}: {
  params: {
    slug: string
  }
}) {
  const { event }: { event: Event } = await getEvent(params.slug)

  return {
    title: `Leeds Digital Health - Events - ${event.title}`,
    description: event.description
  }
}

export default async function EventPage({
  params
}: {
  params: { slug: string }
}) {

  return (
    <div className="container mx-auto sm:px-5 min-h-40 pb-8">
      <section
        className={
          "bg-white min-h-40"
          //   + "dark:bg-gray-900"
        }
      >
        <EventDetails slug={params.slug} />
      </section>
    </div>
  )
}
