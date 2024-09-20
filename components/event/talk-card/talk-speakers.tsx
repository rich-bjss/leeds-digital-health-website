import Image from "next/image"

import Speaker from "@/lib/model/speaker"

import { cn } from "@/lib/tailwind-helper"

export default function TalkSpeakers({ speakersList }: { speakersList: Speaker[] }) {
    return <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
        {speakersList.map((speaker: Speaker) => (
            <div
                key={speaker.sys.id}
                className="flex items-center space-x-4 mb-2"
            >
                {speaker.image && (
                    <div className="w-7 h-7 relative">
                        <Image
                            className="rounded-full"
                            src={`${speaker.image.url}?w=100`}
                            alt={`${speaker.name} avatar`}
                            fill={true}
                        />
                    </div>
                )}
                <span className={cn("font-medium",
                // "dark:text-white"
                )}>
                    <div className="flex flex-col">
                        <span>{speaker.name}</span>
                        {/*TODO Investigate. These can sometimes be too big, and it looks bad. */}
                        <span className="text-xs opacity-70 indent-2">{speaker.jobTitle}</span>
                        <span className="text-xs opacity-70 indent-2">{speaker.company}</span>
                    </div>
                </span>
            </div>
        ))}
        </div>
}