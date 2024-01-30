import Speakers from "../speaker-card/speakers"
import MarkdownContent from "@/components/ui-elements/markdown-content"
import Talk from "@/lib/model/talk"

import { cn } from "@/lib/tailwind-helper"

export default function TalkMainPage({ talk }: { talk: Talk }) {
  return (
    <div className="p-2 h-full w-full justify-center">
      <h1 className="text-center font-bold text-2xl sm:text-4xl text-navy">
        {talk.title}
      </h1>

      <div className="top-20 sm:top-32 left-0 px-8 sm:px-24 w-full">
        {talk.description && (
          <MarkdownContent
            markdownContent={talk.description}
            className="bg-slate-100 rounded-lg overflow-y-auto text-sm sm:text-base max-h-96 sm:max-h-72 mt-8 p-2 text-navy"
          />
        )}
        <Speakers speakerList={talk.speakersCollection.items} />
      </div>
    </div>
  )
}
