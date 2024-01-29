import Link from "next/link"

import TalkSuspense from "@/components/event/talk/talk-suspense"
import TalkVideoPageContent from "@/components/event/talk/talk-video-page-content"

export default function TalkPage({
  params
}: {
  params: { slug: string; talkId: string }
}) {
  return <TalkSuspense talkId={params.talkId} eventSlug={params.slug} />
}
