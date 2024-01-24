import EmbeddedVideo from "@/components/ui-elements/embedded-video";

export default function TalkVideoPage({url}: {url:string}){

    return <div className="p-2 bg-slate-200">
        <EmbeddedVideo url={url} />
    </div>
}