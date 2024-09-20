import Speaker from "./speaker"

export default interface Talk {
  key: string
  title: string
  image: { description: string; url: string }
  speakersCollection: { items: Speaker[] }
  slides: { description: string; url: string }
  video: string
  description: string
  sys: { id: string }
}
