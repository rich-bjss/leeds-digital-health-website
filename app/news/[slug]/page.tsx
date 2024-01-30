import Link from "next/link"
import { Suspense } from "react"

import BlogPost from "@/components/news/blog-post"
import LoadingMessage from "@/components/ui-elements/loading-message"

import { getPostBySlug } from "@/lib/api/posts"

async function DisplayPost({ slug }: { slug: string }) {
  const post = await getPostBySlug(slug)

  console.log(post)

  return (
    <div>
      <Link href="/news" className="text-pink py-4 px-4 rounded-t-lg hover:bg-slate-50">&larr; Back to news feed</Link>
      <div className="mt-4"></div>
      <BlogPost post={post} sectionId="news-post" />
    </div>
  )
}

export default async function NewsPostPage({
  params
}: {
  params: { slug: string }
}) {
  return (
    <Suspense fallback={<LoadingMessage>Loading news items...</LoadingMessage>}>
      <DisplayPost slug={params.slug} />
    </Suspense>
  )
}
