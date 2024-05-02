import Post from "../model/post"
import { fetchGraphQL } from "./api"
import { JSDOM } from "jsdom"
import { createClient } from 'contentful-management'

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
    const result = extractPostEntries(entries)
    const metaData = await getDataFromUrl(result)
    await updatePost('3V18p30hmCLXVBo9JEQO39', metaData)
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
      },
      {}
    )

    const result = {
      title:
        document.title || metaTags["og:title"],
      content:
        metaTags.description ||
        metaTags["og:description"],
      image:
        metaTags.image || metaTags["og:image"],
    }
    return result
  } catch (error) {
    console.error("Error fetching Open Graph details", error)
  }
}

async function getDataFromUrl(posts: Post[]) {
  return posts.reduce(async (acc, post) => {
    if (!!post.url.trim()) {
      const metaData = await extractMetaTags(post.url)
      return {
        ...acc,
        [post.sys.id]: metaData
      }
    }
    return acc
  }, {})
}


export async function updatePost(entryId: string, newFields: any, preview = false) {
  const SPACE_ID = process.env.CONTENTFUL_SPACE_ID as string
  const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN as string
  const ENTRY_ID = '3V18p30hmCLXVBo9JEQO39'

  // cdn.contentful.com - read only
  // api.contentful.com - write/read


//   const client = createClient({
//   accessToken: ACCESS_TOKEN,
//   host: 'cdn.contentful.com'
// },)

// Update entry

const client = createClient({
    accessToken: ACCESS_TOKEN,
  }, 
  {
    type: 'plain',
    defaults: {
      spaceId: SPACE_ID,
      environmentId: 'master',
    },
  }
)

// const client = createClient({
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
//   host: 'cdn.contentful.com',

// })

const entries = await client.entry.getMany({
  query: {
    limit: 200
  }
})

console.log('entries', entries)


  // const post = await client.entry.get({
  //   entryId: ENTRY_ID
  // })

  // console.log('post', post)

  // const space = await client.getSpace(SPACE_ID);
  // console.log('space', space)

//   const environment = await space.getEnvironment('master')
// const environment = await space.getEnvironment("master");

//   const entry = await environment.getEntry(entryId);
// const entries = await client.entry.getMany({})


// const entry = entries.items.find(item => item.sys.id === ENTRY_ID)
// entry.fields.title = 'new title'

//   // Update entry fields
  // Object.keys(newFields).forEach(fieldName => {
  //   post.fields[fieldName] = newFields[fieldName];
  // });



  // await entry.update();


  // await client.entry.update({
  //   entryId: '3V18p30hmCLXVBo9JEQO39',

  // }, {
  //   fields: {
  //     title: 'test',
  //   }
  // })
}