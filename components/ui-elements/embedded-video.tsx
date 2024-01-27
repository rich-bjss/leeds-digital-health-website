import { cn } from "@/lib/tailwind-helper"

export default function EmbeddedVideo({ url }: { url: string }) {
  let srcUrl = url
    .replace(/www.youtube.com\/watch\?v=/i, "www.youtube.com/embed/")
    .replace(/vimeo.com\//i, "player.vimeo.com/video/")

    //TODO: still need to fix player dimensions for YouTube and Vimeo on smaller screens
    //YouTube and Vimeo have different problems
  return (
    <div
      className={cn(
        "w-full h-64 sm:h-96 lg:h-full relative pt-6 pb-96",
        // "lg:bg-red-500 md:bg-green-500 sm:bg-cyan-500" //debug stuff for troubleshooting responsive design
      )}
    >
      <iframe
        className="h-full w-full p-2 absolute top-0 left-0"
        width="100%"
        height="600"
        src={srcUrl}
        title="Video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  )
}
