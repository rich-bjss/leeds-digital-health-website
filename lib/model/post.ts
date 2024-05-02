import Author from "./author"

export default interface Post {
    key: string
    title: string
    slug: string
    excerpt: string
    coverImage: { url: string }
    date: string
    author: Author
    type: string
    content: string
    url: string
    sys: {
        id: string
    }
}