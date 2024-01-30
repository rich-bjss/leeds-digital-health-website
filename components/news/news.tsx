import Link from 'next/link'


import Avatar from './avatar'
import InteractiveCard from '@/components/ui-elements/interactive-card'
import DateComponent from '../ui-elements/date-component'
import CoverImage from './cover-image'

import Post from '@/lib/model/post'

function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: {
  title: string
  coverImage: any
  date: string
  excerpt: string
  author: any
  slug: string
}) {

  const href = `/news/${slug}`
  return (
    <InteractiveCard href={href} className='bg-slate-50 hover:bg-slate-100 p-2 rounded-lg cursor-pointer'>
      <div className="mb-5">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <h3 className="text-3xl mb-3 font-bold text-navy leading-snug">
        <Link href={href}>
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateComponent dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      {author && <Avatar name={author.name} picture={author.picture} />}
    </InteractiveCard>
  )
}

export default function News({ morePosts }: { morePosts: Post[] }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-6xl font-bold tracking-tighter leading-tight">
        News
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {morePosts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
