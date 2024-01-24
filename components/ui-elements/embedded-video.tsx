export default function EmbeddedVideo({ url }: { url: string }) {
  let srcUrl = url
    .replace(/www.youtube.com\/watch\?v=/i, "www.youtube.com/embed/")
    .replace(/vimeo.com\//i, "player.vimeo.com/video/")
    
  return (
    <>
      <iframe
        className="h-full w-full p-2"
        width="100%"
        height="600"
        src={srcUrl}
        title="Video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </>
  )
}

