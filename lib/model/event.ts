import Talk from "./talk"
import Image from "./image"

export default interface Event {
  key: string
  title: string
  description: string
  date: string
  talksCollection: { items: Talk[] }
  image: Image 
  galleryCollection: { items: Image[] } 
  video: { title: string; description: string; url: string }
  slug: string
  meetupEventId: string
  venue: { address: string }
}
