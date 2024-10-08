import TalkCard from "./talk-card"

import Talk from "@/lib/model/talk"

export default function Talks({ talkList }: { talkList: Talk[] }) {
    return <div className="grid gap-8 lg:grid-cols-2">
        {talkList.map((talkData: Talk) => (
            <TalkCard key={talkData.sys.id} talk={talkData}/>
        ))}
    </div>
}