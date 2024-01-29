import Image from "next/image"

import MarkdownContent from "@/components/ui-elements/markdown-content"
import Talk from "@/lib/model/talk"
import { cn } from "@/lib/tailwind-helper"

export default function TalkMainPage({ talk }: { talk: Talk }) {
  return (
    <div className="p-2 h-full w-full justify-center">
      <div
        className="bg-center bg-cover h-full w-full relative overflow-y-auto"
        style={{
          backgroundImage: `url("${
            talk.image ? talk.image.url : "../../../TMP_FALLBACK_GRAPHIC.jpg"
          }")`,
          backgroundPosition: `center 50%`
        }}
      >
        <div className="w-full h-full bg-gradient-to-b from-slate-200 absolute" />
        <div className="top-20 sm:top-32 left-0 px-8 sm:px-24 w-full">
          <div className="flex justify-center sm:pt-4 sm:pb-2 md:pt-8 md:pb-4 relative text-navy">
            <h1 className="text-center font-bold text-2xl sm:text-4xl">
              {talk.title}
            </h1>
          </div>
          <MarkdownContent
            markdownContent={talk.description}
            className="bg-slate-100 rounded-lg overflow-y-auto text-center text-sm sm:text-base max-h-96 sm:max-h-72 opacity-80 mt-4 pt-2 pb-4"
          />
            <ul className="list-none mt-8 flex bg-navy p-2 rounded-lg opacity-90 pb-6 mr-4 absolute z-10 flex-wrap justify-center">
              {talk.speakersCollection.items.map((speaker) => (
                <li key={speaker.sys.id} className="bg-navy">
                  <p className="text-white text-center font-semibold pb-2 text-lg">
                    {speaker.name}
                  </p>
                  <Image
                    className="w-32 h-32 float-none border-2 mx-2 shadow-slate-300 shadow-[0_0_15px_1px]"
                    src={speaker.image?.url}
                    alt={speaker.name}
                    width={160}
                    height={160}
                    style={{ objectFit: "cover", objectPosition: "50% 50%" }}
                  />
                </li>
              ))}
            </ul>
        </div>
      </div>
    </div>
  )
}
