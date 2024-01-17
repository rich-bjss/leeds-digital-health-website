import { Suspense } from "react"

import LoadingMessage from "../ui-elements/loading-message"
import MarkdownContent from "../ui-elements/markdown-content"
import FeatureSection from "../ui-elements/feature-section"
import { getHeroPost } from "@/lib/api/posts"

async function DisplayHeroPost() {
  const heroPost = await getHeroPost()

  if (!heroPost) {
    return <div>
      <p>Could not display content.</p>
    </div>
  }

  return <FeatureSection
    sectionId="about"
    imageUrl={heroPost.coverImage.url}
  >
    <h1 className="text-4xl font-bold md:pt-8">{heroPost.title}</h1>
    <MarkdownContent markdownContent={heroPost.content} />
  </FeatureSection>
}

export default async function HeroPost() {
  return (
    <Suspense fallback={<LoadingMessage>Loading content...</LoadingMessage>}>
      <DisplayHeroPost />
    </Suspense>
  )
}