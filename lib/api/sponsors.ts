import Sponsor from "../model/sponsor"
import { fetchGraphQL } from "./api"

const sponsorQuery = `query {
      sponsorsCollection {
        items {
          name
          logo {
                url
                description
          }
          sys {
            id
          }
        }
      }
    }`

export async function getAllSponsors(): Promise<Sponsor[]> {
  const response = await fetchGraphQL(sponsorQuery)

  return response?.data?.sponsorsCollection.items
}
