import html from "remark-html"
import { remark } from "remark"

import { getHeroPost } from "@/lib/api/posts"

async function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  content,
  slug
}: {
  title: string
  coverImage: any
  date: string
  excerpt: string
  author: any
  content: string
  slug: string
}) {
  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return (
    <section>
      <div
        className="w-full bg-center bg-cover h-96"
        style={{
          backgroundImage: `url(${coverImage.url}?w=1050&q=75)`,
          backgroundPosition: `center 75%`
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-white bg-opacity-30">
          <div className="text-center"></div>
        </div>
      </div>
      <div className="container mx-auto">
        <h1 className="text-6xl font-bold md:pt-8">{title}</h1>
        <div
          className="w-full p-4 md:w-full mt-8 mr-6 mb-8 text-navy bg-gray-100 content"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </section>
  )
}

export default async function Page() {
  const heroPost = await getHeroPost()

  return (
    <div className="mx-auto">
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          content={heroPost.content}
          excerpt={heroPost.excerpt}
        />
      )}
    </div>
  )
}
