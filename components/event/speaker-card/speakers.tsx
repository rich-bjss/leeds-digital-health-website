import SpeakerCard from "./speaker-card"

import Speaker from "@/lib/model/speaker"

export default function Speakers({ speakerList }: { speakerList: Speaker[] }) {
    return <div className="grid gap-8 lg:grid-cols-2 my-8">
        {speakerList.map((speakerData: Speaker) => (
            <SpeakerCard key={speakerData.sys.id} speaker={speakerData}/>
        ))}
    </div>
}