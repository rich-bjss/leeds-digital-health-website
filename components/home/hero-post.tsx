import html from "remark-html"
import { remark } from "remark"

import Post from "@/lib/model/post"

export default async function HeroPost({
    post
  }: {
    post: Post
  }) {
    const processedContent = await remark().use(html).process(post.content)
    const contentHtml = processedContent.toString()
  
    return (
      <section>
        <div
          className="w-full bg-center bg-cover h-96"
          style={{
            backgroundImage: `url(${post.coverImage.url}?w=1050&q=75)`,
            backgroundPosition: `center 75%`
          }}
        >
          <div className="flex items-center justify-center w-full h-full bg-white bg-opacity-30">
            <div className="text-center"></div>
          </div>
        </div>
        <div className="container mx-auto">
          <h1 className="text-6xl font-bold md:pt-8">{post.title}</h1>
          <div
            className="w-full p-4 md:w-full mt-8 mr-6 mb-8 text-navy bg-gray-100 content"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </section>
    )
  }