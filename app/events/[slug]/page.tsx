import Link from "next/link"
import { draftMode } from "next/headers"

import MoreStories from "../../more-stories"
import Avatar from "../../avatar"
import Date from "../../date"
import CoverImage from "../../cover-image"
import Image from "next/image"

import { Markdown } from "@/lib/markdown"
import { getEvent } from "@/lib/api/events"

// export async function generateStaticParams() {
//   const event = await getEvent()

//   return allPosts.map((post) => ({
//     slug: post.slug,
//   }))
// }

export default async function EventPage({
  params
}: {
  params: { slug: string }
}) {
  const { event } = await getEvent(params.slug)

  return (
    <div className="container mx-auto px-5">
      {event && (
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
              <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                {event.title}
              </h2>
              <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                {event.description}
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {event.talksCollection.items.map((talk: any) => (
                <article
                  key={talk.key}
                  className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
                >
                  <div className="flex justify-between items-center mb-5 text-gray-500">
                    {talk.video && (
                      <span
                        key=""
                        className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"
                      >
                        <svg
                          className="mr-1 w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                        </svg>
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
                  <div className="flex justify-between items-center">
                    {talk.speakersCollection.items.map((speaker: any) => (
                      <div
                        key={speaker.slug}
                        className="flex items-center space-x-4"
                      >
                        {speaker.image && (
                          <div className="w-7 h-7 relative">
                            <Image
                              className="rounded-full"
                              src={`${speaker.image.url}?w=100`}
                              alt={`${speaker.name} avatar`}
                              fill={true}
                            />
                          </div>
                        )}
                        <span className="font-medium dark:text-white">
                          {speaker.name}
                        </span>
                      </div>
                    ))}
                    {talk.video && (
                      <a
                        href="#"
                        className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                      >
                        View Video Here
                        <svg
                          className="ml-2 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
