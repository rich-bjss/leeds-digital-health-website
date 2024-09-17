import { formatISO } from "date-fns"
import { fetchGraphQL } from "./api"

import Event from "../model/event"

const EVENT_LIST_GRAPHQL_FIELDS = `
  title
  description
  date
  slug
  image {
    description
    url
  }
`

const EVENT_GRAPHQL_FIELDS = `
  title
  description
  date
  slug
  meetupEventId
  video {
    title
    description
    url
  }
  venue {
    address
  }
  image {
    description
    url
  }
  galleryCollection(limit: 10) {
    items {
      description
      url
      width
      height
    }
  }
  talksCollection(limit: 5) {
    items {
      title
      description
      video
      image {
        description
        url
      }
      slides {
        description
        url
      }
      sys {
        id
      }
      speakersCollection(limit: 5) {
        items {
          name
          jobTitle
          company
          description
          image {
            url
          }
          sys {
            id
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
  
  return {
    event: extractEvent(entry)
  }
}

export async function getHeadlineEvents(): Promise<Event[]> {
  const todaysDate = formatISO(new Date())

  const entries = await fetchGraphQL(`
    query {
      eventsCollection(order: date_ASC, where: {date_gte:"${todaysDate}", headlineEvent: true}) {
        items {
          ${EVENT_GRAPHQL_FIELDS}
        }
      }
    }
  `)

  return extractEvents(entries)
}

export async function getHeadlineEvent(): Promise<Event> {
  const events = await getHeadlineEvents()
  return events[0]
}

export async function getUpcomingEvents(): Promise<Event[]> {
  const todaysDate = formatISO(new Date())

  const entries = await fetchGraphQL(`
    query {
      eventsCollection(order: date_ASC, where: {date_gte:"${todaysDate}", headlineEvent: false}) {
        items {
          ${EVENT_LIST_GRAPHQL_FIELDS}
        }
      }
    }
  `)

  const headlineEvents = await getHeadlineEvents()
  const remainingHeadlineEvents = headlineEvents.slice(1)

  let upcomingEvents = extractEvents(entries)

  upcomingEvents = [...upcomingEvents, ...remainingHeadlineEvents]

  const sortedArray = upcomingEvents.sort(
    (a: Event, b: Event) =>
      new Date(a.date).getTime() - new Date(b.date).getTime()
  )
  return sortedArray
}

export async function getPreviousEvents(): Promise<Event[]> {
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


export async function getAllEvents(limit? :number): Promise<Event[]> {
  let setLimit = limit && limit > 0 ? `, limit: ${limit}` : ''
  const entries = await fetchGraphQL(
    `query {
      eventsCollection(order: date_DESC${setLimit}) {
        items {
          ${EVENT_LIST_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractEvents(entries)
}

function extractEvents(fetchResponse: any): Event[] {
  return fetchResponse?.data?.eventsCollection?.items
}

function extractEvent(fetchResponse: any): Event {
  return fetchResponse?.data?.eventsCollection?.items?.[0]
}
