export default function EmbeddedVideo({ url }: { url: string }) {
    return <div className="embedded-video-mock">
        <p className="embedded-video-url-prop">{url}</p>
    </div>
}