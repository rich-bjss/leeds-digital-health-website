import { Suspense } from "react"

import BlogPost from "../news/blog-post"
import LoadingMessage from "../ui-elements/loading-message"

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
    <div className="pt-16">
      <BlogPost post={heroPost} sectionId="about" />
    </div>
  )
}

export default async function HeroPost() {
  return (
    <Suspense fallback={<LoadingMessage>Loading content...</LoadingMessage>}>
      <DisplayHeroPost />
    </Suspense>
  )
}
