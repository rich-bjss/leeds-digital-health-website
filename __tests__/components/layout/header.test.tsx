import { render } from "@testing-library/react"

import Header from "@/components/layout/header"

describe("Header component", () => {
  it("renders the header unchanged", () => {
    const {container} = render(<Header />)

    expect(container).toMatchSnapshot()
  })

})
