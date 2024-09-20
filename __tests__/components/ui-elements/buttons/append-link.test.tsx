import { render, screen } from "@testing-library/react"

import AppendLink from "@/components/ui-elements/buttons/append-link"

const TEST_BASE_URL = "test-base-url-346qrtgasdfv"
const TEST_URL = "test-url-q34346"

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(() => TEST_BASE_URL)
}))

describe("LinkButton component", () => {
  it("links to desired url", () => {
    render(<AppendLink href={TEST_URL}>Link Text</AppendLink>)

    const linkElement = screen.getByRole("link")
    expect(linkElement).toHaveAttribute("href", `${TEST_BASE_URL}/${TEST_URL}`)
  })
})
