import DateComponent from "@/components/ui-elements/date-component"
import MarkdownContent from "@/components/ui-elements/markdown-content"
import LinkButton from "@/components/ui-elements/buttons/link-button"
import ContentfulImage from "@/components/ui-elements/contentful-image"

import Event from "@/lib/model/event"

export default function HeadlineEvent({ event }: { event: Event }) {
  return (
    <>
      <div className="w-full h-screen flex justify-center relative">
        <ContentfulImage
          src={event.image.url}
          alt="Headline Event"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="container mx-auto">
        <div className="flex align-middle py-8">
          <div className="align-middle h-max mr-6">
            <span className="text-4xl text-pink font-bold md:pt-8 w-fit">
              Upcoming:
            </span>
          </div>
          <div className="">
            <span className="text-4xl text-center text-white font-semibold md:pt-8">
              {event.title}
            </span>
          </div>
        </div>
        <DateComponent
          className="text-white italic text-lg"
          dateString={event.date}
        />
        <MarkdownContent markdownContent={event.description} />
        <div className="flex justify-center">
          <LinkButton
            href={`/events/${event.slug}`}
            className="px-8 py-4 text-lg"
          >
            Find out more
          </LinkButton>
        </div>
      </div>
    </>
  )
}
