import { fetchGraphQL } from "@/lib/api/api"

const mockFetchReturnRequest = jest.fn((input, init) =>
  Promise.resolve({
    json: () => Promise.resolve({ fetchRequest: { input, init } })
  })
)

const mockFetchReturnError = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ errors: "yes" })
  })
)

const TEST_SPACE_ID = "test_space_id"
const TEST_PREVIEW_ACCESS_TOKEN = "preview_acess_token"
const TEST_ACCESS_TOKEN = "access_token"

process.env.CONTENTFUL_SPACE_ID = TEST_SPACE_ID
process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN = TEST_PREVIEW_ACCESS_TOKEN
process.env.CONTENTFUL_ACCESS_TOKEN = TEST_ACCESS_TOKEN

describe("GraphQL API fetch", () => {
  it("correctly makes a graphql fetch", async () => {
    global.fetch = mockFetchReturnRequest
    const { fetchRequest } = await fetchGraphQL("test query string")

    expect(fetchRequest.input).toBe(
      `https://graphql.contentful.com/content/v1/spaces/${TEST_SPACE_ID}`
    )
    expect(fetchRequest.init).toStrictEqual({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TEST_ACCESS_TOKEN}`
      },
      body: '{"query":"test query string"}',
      next: { tags: ["posts"] }
    })
  })

  it("correctly makes a graphql fetch with preview token when applicable", async () => {
    global.fetch = mockFetchReturnRequest
    const { fetchRequest } = await fetchGraphQL("test query string", true)

    expect(fetchRequest.input).toBe(
      `https://graphql.contentful.com/content/v1/spaces/${TEST_SPACE_ID}`
    )
    expect(fetchRequest.init).toStrictEqual({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TEST_PREVIEW_ACCESS_TOKEN}`
      },
      body: '{"query":"test query string"}',
      next: { tags: ["posts"] }
    })
  })

  it("throws an error when response contains error information", async () => {
    global.fetch = mockFetchReturnError

    await expect(fetchGraphQL("test query")).rejects.toThrow(
      "Contentful request returned with errors. Refer to server log for details."
    )
  })
})
