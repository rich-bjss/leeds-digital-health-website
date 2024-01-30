import MarkdownContent from "../ui-elements/markdown-content"

import Post from "@/lib/model/post"

export default function BlogPost({
  post,
  sectionId
}: {
  post: Post
  sectionId: string
}) {
  return (
    <section id={sectionId}>
      <div
        className="w-full bg-center bg-cover h-96 "
        style={{
          backgroundImage: `url(${post.coverImage.url}?w=1050&q=75)`,
          backgroundPosition: `center 75%`
        }}
      >
        <div className="w-full h-full bg-white bg-opacity-30" />
      </div>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold py-4 md:pt-8 text-right mr-2 sm:mr-0 sm:text-left text-navy">
          {post.title}
        </h1>
        <MarkdownContent
          className="w-full p-4 text-navy bg-gray-100 content text-center rounded mb-8 text-sm sm:text-base"
          markdownContent={post.content}
        />
      </div>
    </section>
  )
}
