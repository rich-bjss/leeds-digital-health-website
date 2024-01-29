import { Suspense } from "react"

import LoadingMessage from "../ui-elements/loading-message"
import MarkdownContent from "../ui-elements/markdown-content"
import { getHeroPost } from "@/lib/api/posts"

async function DisplayHeroPost() {
  const heroPost = await getHeroPost()

  if (!heroPost) {
    return (
      <div>
        <p>Could not display content.</p>
      </div>
    )
  }

  return (
    <section id="about">
      <div
        className="w-full bg-center bg-cover h-96 "
        style={{
          backgroundImage: `url(${heroPost.coverImage.url}?w=1050&q=75)`,
          backgroundPosition: `center 75%`
        }}
      >
        <div className="w-full h-full bg-white bg-opacity-30" />
      </div>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold py-4 md:pt-8 text-right mr-2 sm:mr-0 sm:text-left text-navy">
          {heroPost.title}
        </h1>
        <MarkdownContent
          className="w-full p-4 text-navy bg-gray-100 content text-center rounded mb-8 text-sm sm:text-base"
          markdownContent={heroPost.content}
        />
      </div>
    </section>
  )
}

export default async function HeroPost() {
  return (
    <Suspense fallback={<LoadingMessage>Loading content...</LoadingMessage>}>
      <DisplayHeroPost />
    </Suspense>
  )
}
