import Link from "next/link"

import { cn } from "@/lib/tailwind-helper"

export default function TalkNav({
  eventSlug,
  talkId,
  currentPage,
  videoExists
}: {
  eventSlug: string
  talkId: string
  currentPage: string
  videoExists: boolean
}) {
  const highlightStyling = "text-pink border-pink"
  const detailsStyling = currentPage === "details" ? highlightStyling : ""
  const videoStyling = currentPage === "video" ? highlightStyling : ""

  return (
    <nav className="text-sm font-medium text-left text-navy border-b border-gray-200 mb-8">
      <ul className="flex flex-wrap -mb-px">
        <li>
          <Link
            className="inline-block p-4 border-b-2 rounded-t-lg hover:bg-slate-50"
            href={`/events/${eventSlug}`}
          >
            &larr;
          </Link>
        </li>
        <li>
          <Link
            className={cn(
              "inline-block p-4 border-b-2 rounded-t-lg hover:bg-slate-50",
              detailsStyling
            )}
            href={
              currentPage === "details"
                ? ""
                : `/events/${eventSlug}/talk/${talkId}`
            }
          >
            Talk Details
          </Link>
        </li>
        {videoExists && (
          <li>
            <Link
              className={cn(
                "inline-block p-4 border-b-2 rounded-t-lg hover:bg-slate-50",
                videoStyling
              )}
              href={
                currentPage === "video"
                  ? ""
                  : `/events/${eventSlug}/talk/${talkId}/video`
              }
            >
              Video
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}