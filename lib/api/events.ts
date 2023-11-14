import { format, formatISO } from "date-fns"
import { fetchGraphQL } from "./api"

const EVENT_LIST_GRAPHQL_FIELDS = `
  title
  description
  date
  slug
`

const EVENT_GRAPHQL_FIELDS = `
  title
  date
  slug
  image {
    url
  }
  talksCollection(limit: 5) {
    items {
        title
        description
        video
        slug
        image {
            url
        }
        speakersCollection(limit: 5) {
          items {
            name
            slug
            image {
              url
            }
          }
        }
    }
  }
`

export async function getEvent(slug: string): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      eventsCollection(where: { slug: "${slug}" }, preview:false, limit: 1) {
        items {
          ${EVENT_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  console.log(entry)
  return {
    event: extractEvent(entry)
  }
}

export async function getPreviousEvents(): Promise<any[]> {
  const todaysDate = formatISO(new Date())

  const entries = await fetchGraphQL(
    `query {
      eventsCollection(order: date_DESC, where: {date_lte:"${todaysDate}"}) {
        items {
          ${EVENT_LIST_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractEvents(entries)
}

export async function getAllEvents(): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      eventsCollection(order: date_DESC) {
        items {
          ${EVENT_LIST_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractEvents(entries)
}

function extractEvents(fetchResponse: any): any[] {
  return fetchResponse?.data?.eventsCollection?.items
}

function extractEvent(fetchResponse: any): any {
  return fetchResponse?.data?.eventsCollection?.items?.[0]
}
