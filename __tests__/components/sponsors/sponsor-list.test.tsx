import { render, screen } from "@testing-library/react"

import SponsorList from "@/components/sponsors/sponsor-list"

import Sponsor from "@/lib/model/sponsor"
import { getResolvedAsyncComponent } from "@/__tests__/test-helper"

const TEST_SPONSOR_DATA: Sponsor[] = []

for (let i = 0; i < 8; i++) {
  TEST_SPONSOR_DATA.push({
    name: `sponsor-${i}`,
    logo: {
      url: `/logo-url-${i}`,
      description: `logo-description-${i}`
    },
    sys: {
      id: `sponsor-id-${i}`
    }
  })
}

jest.mock("../../../lib/api/sponsors", () => ({
  getAllSponsors: () => TEST_SPONSOR_DATA
}))

describe("SponsorList component", () => {
  it("includes the correct title", async()=>{
    const ResolvedSponsorList = await getResolvedAsyncComponent(SponsorList)
    const { container } = render(<ResolvedSponsorList />)

    const heading = screen.getByRole("heading", { level: 1 })

    expect(heading).toMatchSnapshot("The Leeds Digital Health Committee")
  })

  it("correctly renders a list of sponsor images from test data", async () => {
    const ResolvedSponsorList = await getResolvedAsyncComponent(SponsorList)
    render(<ResolvedSponsorList />)

    TEST_SPONSOR_DATA.forEach((sponsor) => {
      const image = screen.getByAltText(sponsor.name)
      expect(image).toBeInTheDocument()
    })
  })
})
