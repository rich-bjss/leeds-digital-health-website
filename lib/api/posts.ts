import Post from "../model/post"
import { fetchGraphQL } from "./api"

const POST_GRAPHQL_FIELDS = `
  slug
  title
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

function extractPost(fetchResponse: any): any {
  return fetchResponse?.data?.postCollection?.items?.[0]
}

function extractPostEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.postCollection?.items
}
