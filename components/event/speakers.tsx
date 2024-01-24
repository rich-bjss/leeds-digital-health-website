import Image from "next/image"

import Speaker from "@/lib/model/speaker"

export default function Speakers({ speakersList }: { speakersList: Speaker[] }) {
    return <>
        {speakersList.map((speaker: Speaker) => (
            <div
                key={speaker.sys.id}
                className="flex items-center space-x-4"
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
                <span className="font-medium dark:text-white">
                    {speaker.name}
                </span>
            </div>
        ))}
        </>
}