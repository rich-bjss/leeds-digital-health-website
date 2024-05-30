import Post from "../model/post"
import { fetchGraphQL } from "./api"
import { JSDOM } from "jsdom"
import { Asset, createClient } from 'contentful-management'

const POST_GRAPHQL_FIELDS = `
  slug
  title
  url
  coverImage {
    url
  }
  date
  author {
    name
    picture {
      url
    }
  }
  excerpt
  content
  sys {
    id
  }
`

const CACHED_GRAPHQL_FIELD = `
  title
  description
  image {
    url
  }
  url
`

export async function getPreviewPostBySlug(slug: string | null): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  )
  return extractPost(entry)
}

export async function getPostBySlug(slug: string | null): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  )
  return extractPost(entry)
}

export async function getAllPosts(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      postCollection {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractPostEntries(entries)
}

export async function getHeroPost(): Promise<Post | null> {
  try {
    const entry = await fetchGraphQL(
      `query {
        postCollection(where: { type: "Hero" }, limit: 1) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }`
    )
    return extractPost(entry)
  } catch (e) {
    console.log(e)
  }
  return null
}

export async function getNewsPosts(): Promise<Post[] | null> {
  try {
    const entries = await fetchGraphQL(
      `query {
        postCollection(order: date_DESC, where: { type: "Post" }, limit: 10) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }`
    )
    return extractPostEntries(entries)
  } catch (e) {
    console.log(e)
  }
  return null
}

export async function getExternalNewsPosts(): Promise<Post[] | null> {
  try {
    const entries = await fetchGraphQL(
      `query {
        postCollection(order: date_DESC, where: { type: "External" }, limit: 10) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }`
    )

    const cachedExternalNews = await fetchGraphQL(
      `query {
        cachedExternalNewsCollection {
          items {
            ${CACHED_GRAPHQL_FIELD}
          }
        }
      }`
    )

    const cachedExternalNewsUrl = cachedExternalNews.data.cachedExternalNewsCollection.items.map((item: any) => item.url)

    const result = extractPostEntries(entries)
    const metaData = await getDataFromUrl(result)

    metaData.map(async(data: any) => {
      if (!cachedExternalNewsUrl.includes(data.url)) {
        await createPost(data)        
      }
    })
    return result
  } catch (e) {
    console.log(e)
  }
  return null
}

function extractPost(fetchResponse: any): any {
  return fetchResponse?.data?.postCollection?.items?.[0]
}

function extractPostEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.postCollection?.items
}

async function extractMetaTags(url: string) {
  try {
    const response = await fetch(url)
    const html = await response.text()
    const dom = new JSDOM(html)
    const document = dom.window.document
    const metaTags = Array.from(document.querySelectorAll("meta")).reduce(
      (tags: Record<string, string>, meta) => {
        const name =
          meta.getAttribute("name") ||
          meta.getAttribute("property") ||
          meta.getAttribute("itemprop")
        const content = meta.getAttribute("content")

        if (name && content) {
          tags[name] = content
        }

        return tags
      },{})

    const result = {
      title:
        document.title || metaTags["og:title"],
      content:
        metaTags.description ||
        metaTags["og:description"],
      image:
        metaTags["og:image"],
      url
    }
    return result
  } catch (error) {
    console.error("Error fetching Open Graph details", error)
  }
}

async function getDataFromUrl(posts: Post[]) {
  return posts.reduce<any>(async (acc, post) => {
    if (!!post.url.trim()) {
      const metaData = await extractMetaTags(post.url)
      return [...acc, metaData]
    }
    return acc
  }, [])
}

interface createPostProps {
  title?: string, 
  content?: string, 
  image?: string, 
  url?: string
}

export async function createPost(fields: createPostProps) {
  const {content, image, title, url} = fields
  const SPACE_ID = process.env.CONTENTFUL_SPACE_ID as string
  const PERSONAL_ACCESS_TOKEN = process.env.CONTENTFUL_PERSONAL_ACCESS_TOKEN as string

  const client = createClient({
    accessToken: PERSONAL_ACCESS_TOKEN
  })

  const space = await client.getSpace(SPACE_ID)
  const environment = await space.getEnvironment('master')

  let publishedImage: Asset | null = null

  if (image && title && content) {
    const createAsset = await environment.createAsset({
      fields: {
        title: {
          'en-US': title
        },
      description: {
        'en-US': content
      },
      file: {
        'en-US': {
          contentType: 'image',
          fileName: 'image.png',
          upload: image
        }
      }}
    })

    const processForAllLocales = await createAsset.processForAllLocales()
    publishedImage = await processForAllLocales.publish()
  }

  let entryFields = {
    title: {
        'en-US': title
      },
      description: {
        'en-US': content
      },
      url: {
        'en-US': url
      }
  }

  if (publishedImage) {
    Object.assign(entryFields, {    
      image: {
      'en-US': {"sys": {"id": publishedImage.sys.id, "linkType": "Asset", "type": "Link"}}
    }})
  }

  const entry = await environment.createEntryWithId('cachedExternalNews', Date.now().toString(), {
    fields: {
      ...entryFields
    }
  })

  await entry.publish()
}
