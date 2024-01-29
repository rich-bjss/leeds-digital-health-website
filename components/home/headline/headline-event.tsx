import Image from "next/image"

import DateComponent from "@/components/ui-elements/date-component"
import MarkdownContent from "@/components/ui-elements/markdown-content"
import LinkButton from "@/components/ui-elements/buttons/link-button"


import Event from "@/lib/model/event"

export default function HeadlineEvent({ event }: { event: Event }) {
  return (
    <>
      <div className="w-full flex justify-center align-top relative">
        <Image
          src={event.image.url}
          alt={event.image.description}
          sizes="100vw"
          style={{ objectFit: "contain", width: "100%", height: "auto" }}
          width={500}
          height={300}
        />
      </div>
      <div className="container mx-auto">
        <div className="flex align-middle py-8">
          <div className="align-middle h-max mr-6">
            <span className="text-lg sm:text-4xl text-pink font-bold md:pt-8 w-fit">
              Upcoming:
            </span>
          </div>
          <div className="">
            <span className="text-lg sm:text-4xl text-center text-white font-semibold md:pt-8">
              {event.title}
            </span>
          </div>
        </div>
        <DateComponent
          className="text-white italic text-base sm:text-lg"
          dateString={event.date}
        />
        <MarkdownContent
          className="w-full p-2 sm:p-4 text-navy bg-gray-100 content text-center rounded my-4 sm:my-8 text-sm sm:text-base"
          markdownContent={event.description}
        />
        <div className="flex justify-center">
          <LinkButton
            href={`/events/${event.slug}`}
            className="px-8 py-4 text-base sm:text-lg"
          >
            Find out more
          </LinkButton>
        </div>
      </div>
    </>
  )
}
