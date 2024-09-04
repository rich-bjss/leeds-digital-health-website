export default interface Sponsor {
  name: string
  href: string
  description: string
  logo: {
    url: string
    description: string
  }
  sys: {
    id: string
  }
}
