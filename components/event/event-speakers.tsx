import Image from "next/image"

import MarkdownContent from "../ui-elements/markdown-content"

import Event from "@/lib/model/event"
import { cn } from "@/lib/tailwind-helper"

function getEventSpeakerList(event: Event) {
  const speakerLists = event.talksCollection.items.map(
    (talk) => talk.speakersCollection.items
  )

  const firstSpeakerList = speakerLists[0]
  const otherSpeakerLists = speakerLists.slice(1)

  const mergedList = [...firstSpeakerList]

  otherSpeakerLists.forEach((listToMerge) => {
    listToMerge.forEach((newSpeaker) =>
      mergedList.some(
        (existingSpeaker) => existingSpeaker.sys.id === newSpeaker.sys.id
      )
        ? null
        : mergedList.push(newSpeaker)
    )
  })

  return mergedList
}

export default function EventSpeakers({ event }: { event: Event }) {
  const speakers = getEventSpeakerList(event)

  return (
    <section
      id="speakers"
      className="w-full bg-navy sm:p-4 grid lg:grid-cols-2 grid-flow-row md:py-12 text-white"
    >
      {speakers.map((speaker) => (
        <article
          key={speaker.sys.id}
          className={cn(
            "bg-white/10 rounded-lg border border-white transition-colors mx-auto my-4 ",
            "p-4 min-[h-40] w-10/12",
            "shadow-slate-500 hover:shadow-slate-400 shadow-[0_0_25px_7px]"
          )}
        >
          <div className="grid lggrid-cols-2 lgrid-rows-1 w-full pb-4">
            <h2 className="text-xl font-semibold sm:text-2xl">{speaker.name}</h2>
            <div className="flex-col justify-end text-right text-base">
              <p className="font-thin">{speaker.jobTitle}</p>
              <p className="">{speaker.company}</p>
            </div>
          </div>
          <Image
            className="w-32 h-32 float-none sm:w-40 sm:h-40 sm:float-left border-2 mr-4 shadow-slate-300 shadow-[0_0_15px_1px]"
            src={speaker.image?.url}
            alt={speaker.name}
            width={160}
            height={160}
            style={{ objectFit: "cover", objectPosition: "50% 50%" }}
          />
          <MarkdownContent
            className="w-full pt-2 sm:pt-0 content"
            markdownContent={speaker.description}
          />
        </article>
      ))}
    </section>
  )
}
