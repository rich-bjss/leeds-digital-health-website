import Link from "next/link"
import { Suspense, useEffect } from "react"

import News from "../../components/news/news"
import LoadingMessage from "@/components/ui-elements/loading-message"

import { getExternalNewsPosts, getNewsPosts } from "@/lib/api/posts"

async function DisplayNews() {
  const posts = await getNewsPosts()
  // const externalPosts = await getExternalNewsPosts() // this is unused and should probably be pruned

  if (!posts || posts.length === 0)
    return (
      <div className="container mx-auto">
        <h2 className="mb-8 text-4xl ml-2 md:text-4xl font-bold tracking-tighter leading-tight text-navy">
          News
        </h2>
        <p className="text-lg font-semibold italic ml-2 mb-6">
          There are no news items to display.
        </p>
        <Link
          href="/"
          className="text-pink py-4 px-4 rounded-lg mt-8 bg-white hover:bg-slate-50"
        >
          &larr; Back to main page
        </Link>
      </div>
    )

  return <News morePosts={posts} />
}

export default function NewsPage() {
  return (
    <Suspense fallback={<LoadingMessage>Loading news items...</LoadingMessage>}>
      <DisplayNews />
    </Suspense>
  )
}
