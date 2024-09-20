import { createClient } from 'contentful-management'

export async function fetchGraphQL(
  query: string,
  preview = false
): Promise<any> {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`
      },
      body: JSON.stringify({ query }),
      next: { tags: ["posts"] }
    }
  )

  const responseJson = await response.json()

  if (responseJson.errors) {
    console.log(
      "ERROR: Contentful request returned with errors:",
      JSON.stringify(responseJson)
    )
    throw new Error(
      "Contentful request returned with errors. Refer to server log for details."
    )
  }

  return responseJson
}

export const client = createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  space: process.env.CONTENTFUL_SPACE_ID,
  host: 'https://cdn.contentful.com'
})