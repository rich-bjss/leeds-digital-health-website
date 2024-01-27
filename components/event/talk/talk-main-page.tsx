import Image from "next/image"

import MarkdownContent from "@/components/ui-elements/markdown-content"
import Talk from "@/lib/model/talk"
import { cn } from "@/lib/tailwind-helper"

export default function TalkMainPage({ talk }: { talk: Talk }) {
  return (
    <div className="p-2 h-full w-full justify-center">
      <div
        className="bg-center bg-cover h-full w-full relative"
        style={{
          backgroundImage: `url("${
            talk.image ? talk.image.url : "../../../TMP_FALLBACK_GRAPHIC.jpg"
          }")`,
          backgroundPosition: `center 50%`
        }}
      >
        <div className="w-full h-full bg-gradient-to-b from-slate-200" />
      </div>
      <div className="fixed top-20 sm:top-32 left-0 px-8 sm:px-24 w-full">
        <div className="flex justify-center sm:pt-4 sm:pb-2 md:pt-8 md:pb-4">
          <h1 className="text-center font-bold text-2xl sm:text-4xl">
            {talk.title}
          </h1>
        </div>
        <MarkdownContent
          markdownContent={talk.description}
          className="bg-slate-100 rounded-lg overflow-y-auto text-center text-sm sm:text-base max-h-96 sm:max-h-72 opacity-70 mt-4 pt-2 pb-4"
        />
        <ul className="list-none mt-8">
          {talk.speakersCollection.items.map((speaker) => (
            <li key={speaker.sys.id}>
              {speaker.name}
              SPEAKER IMAGE
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
