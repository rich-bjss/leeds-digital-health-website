import Link from "next/link"
import TalkVideoSuspense from "@/components/event/talk/talk-video-suspense"

export default function TalkVideoPage({
  params
}: {
  params: { slug: string; talkId: string }
}) {
  return <TalkVideoSuspense eventSlug={params.slug} talkId={params.talkId} />
}
