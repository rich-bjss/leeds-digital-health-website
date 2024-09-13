import Talk from "./talk"

export default interface Event {
  key: string
  title: string
  description: string
  date: string
  talksCollection: { items: Talk[] }
  image: { description: string; url: string }
  gallery: any // todo set this properly
  video: { title: string; description: string; url: string }
  slug: string
  meetupEventId: string
  venue: { address: string }
}
