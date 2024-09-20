import Author from "./author"
import Image from "./image"

export default interface Post {
    key: string
    title: string
    slug: string
    excerpt: string
    coverImage: Image
    galleryCollection: { items: Image[] } 
    date: string
    author: Author
    type: string
    content: string
    url: string
    sys: {
        id: string
    }
}