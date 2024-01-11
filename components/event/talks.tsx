import TalkCard from "./talk-card"

import Talk from "@/lib/model/talk"

export default function Talks({ talkList }: { talkList: Talk[] }) {
    const d = new Date()
    return <div className="grid gap-8 lg:grid-cols-2">
        {talkList.map((talkData: any) => (
            <TalkCard talk={talkData}/>
        ))}
    </div>
}