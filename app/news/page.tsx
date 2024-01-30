import { Suspense } from "react"

import News from "../../components/news/news"
import LoadingMessage from "@/components/ui-elements/loading-message"

import { getNewsPosts } from "@/lib/api/posts"

async function DisplayNews() {
  const posts = await getNewsPosts()
  return <News morePosts={posts!} />
}

export default function NewsPage() {
  return (
    <Suspense fallback={<LoadingMessage>Loading news items...</LoadingMessage>}>
      <DisplayNews />
    </Suspense>
  )
}
