import { render, screen } from "@testing-library/react"

import LinkButton from "@/components/ui-elements/buttons/link-button"

const TEST_URL = "test-url123412341234"

describe("LinkButton component", () => {
  it("appends className prop to default className", () => {
    render(
      <LinkButton href={TEST_URL} className="test-class">
        Button Text
      </LinkButton>
    )

    const linkElement = screen.getByRole("link")
    expect(linkElement.className).toContain("test-class")
  })

  it("links to desired url", () => {
    render(
      <LinkButton href={TEST_URL} className="test-class">
        Button Text
      </LinkButton>
    )

    const linkElement = screen.getByRole("link")
    expect(linkElement).toHaveAttribute("href", TEST_URL )
  })
})
