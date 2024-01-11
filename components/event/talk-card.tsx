import Speakers from "./speakers";
import ArrowImage from "@/components/graphics/arrow-svg";
import CameraImage from "@/components/graphics/camera-svg";

import Talk from "@/lib/model/talk";

export default function TalkCard({ talk }: { talk: Talk }) {
    return <article
        key={talk.key}
        className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
        <div className="flex justify-between items-center mb-5 text-gray-500">
            {talk.video && (
                <span
                    key=""
                    className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"
                >
                    <CameraImage />
                    Video
                </span>
            )}
            {/* <span className="text-sm">14 days ago</span> */}
        </div>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <a href="#">{talk.title}</a>
        </h2>
        <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
            {talk.description}
        </p>
        <div className="flex flex-col">
            <Speakers speakersList={talk.speakersCollection.items} />
            {talk.video && (
                <a
                    href="#"
                    className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                    View Video Here
                    <ArrowImage />
                </a>
            )}
        </div>
    </article>
}