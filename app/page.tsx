import { Suspense } from "react"

import HeroPost from "@/components/home/hero-post"
import LoadingMessage from "@/components/loading-message"

import { getHeroPost } from "@/lib/api/posts"

async function DisplayHeroPost() {
  const heroPost = await getHeroPost()

  if (!heroPost) {
    return <div>
      <p>Could not display content.</p>
    </div>
  }

  return <HeroPost post={heroPost}/>
}

export default async function Page() {

  return (
    <div className="mx-auto">
      <Suspense fallback={<LoadingMessage>Loading content...</LoadingMessage>}>
        <DisplayHeroPost />
      </Suspense>
    </div>
  )
}
