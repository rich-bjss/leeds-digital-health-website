import Image from "next/image"

import InteractiveCard from "../../ui-elements/interactive-card"
import MarkdownContent from "@/components/ui-elements/markdown-content"

import Speaker from "@/lib/model/speaker"

import { cn } from "@/lib/tailwind-helper"

export default function SpeakerCard({ speaker }: { speaker: Speaker }) {
  const speakerId = speaker.sys.id

  const talkHref = ``

  return (
    <InteractiveCard
      href={talkHref}
      appendHref
      key={speakerId}
      className={cn(
        "p-3 sm:p6 bg-white rounded-lg border border-gray-200 shadow-lg hover:bg-slate-100 transition-colors text-navy"
        // "dark:bg-gray-800 dark:border-gray-700"
      )}
    >
      <div className="flex justify-between items-center mb-5 text-gray-500">
        {/* <span className="text-sm">14 days ago</span> */}
      </div>
      <h2
        className={cn(
          "text-lg pl-2 sm:text-2xl font-bold tracking-tight text-gray-900"
          // "dark:text-white"
        )}
      >
        {speaker.name}
      </h2>
      {speaker.image && (
        <Image
          className="w-32 h-32 float-left border-2 shadow-sm mt-2 mx-2"
          src={speaker.image?.url}
          alt={speaker.name}
          width={160}
          height={160}
          style={{ objectFit: "cover", objectPosition: "50% 50%" }}
        />
      )}
      <MarkdownContent
        className="content p-2 text-navy"
        markdownContent={speaker.description}
      />
    </InteractiveCard>
  )
}