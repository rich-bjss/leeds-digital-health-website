import Image from "next/image"

import MarkdownContent from "@/components/ui-elements/markdown-content"
import Talk from "@/lib/model/talk"
import { cn } from "@/lib/tailwind-helper"
import Speakers from "../speaker-card/speakers"

export default function TalkMainPage({ talk }: { talk: Talk }) {
  return (
    <div className="p-2 h-full w-full justify-center">
      <div className="top-20 sm:top-32 left-0 px-8 sm:px-24 w-full">
        <MarkdownContent
          markdownContent={talk.description}
          className="bg-slate-100 rounded-lg overflow-y-auto text-sm sm:text-base max-h-96 sm:max-h-72 opacity-80 mt-4 pt-2 pb-4"
        />
        <Speakers speakerList={talk.speakersCollection.items} />
      </div>
    </div>
  )
}
