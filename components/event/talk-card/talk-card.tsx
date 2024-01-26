import TalkSpeakers from "./talk-speakers"
import InteractiveCard from "../../ui-elements/interactive-card"
import AppendLink from "../../ui-elements/buttons/append-link"
import CameraImage from "@/components/graphics/camera-svg"
import MarkdownContent from "@/components/ui-elements/markdown-content"

import Talk from "@/lib/model/talk"

import { cn } from "@/lib/tailwind-helper"

export default function TalkCard({ talk }: { talk: Talk }) {
  const talkId = talk.sys.id

  const talkHref = `talk/${talkId}`

  return (
    <InteractiveCard
      href={talkHref} appendHref
      key={talkId}
      className={cn(
        "p-6 bg-white rounded-lg border border-gray-200 shadow-lg hover:bg-slate-100 transition-colors text-navy"
        // "dark:bg-gray-800 dark:border-gray-700"
      )}
    >
      <div className="flex justify-between items-center mb-5 text-gray-500">
        {talk.video && (
          <span
            className={cn(
              "bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded",
              // "dark:bg-primary-200 dark:text-primary-800"
            )}
          >
            <CameraImage />
            Video
          </span>
        )}
        {/* <span className="text-sm">14 days ago</span> */}
      </div>
      <h2
        className={cn(
          "mb-2 text-2xl font-bold tracking-tight text-gray-900"
          // "dark:text-white"
        )}
      >
        <AppendLink href={talkHref} scroll={false}>
          {talk.title}
        </AppendLink>
      </h2>
      <MarkdownContent markdownContent={talk.description} />
      <div className="flex flex-col">
        <TalkSpeakers speakersList={talk.speakersCollection.items} />
      </div>
    </InteractiveCard>
  )
}