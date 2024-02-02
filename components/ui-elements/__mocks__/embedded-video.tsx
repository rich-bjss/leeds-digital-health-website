export default function EmbeddedVideo({ url }: { url: string }) {
    return <div data-testid="embedded-video-mock">
        <p data-testid="embedded-video-url-prop">{url}</p>
    </div>
}