import {render, screen} from '@testing-library/react'
import Page from '@/app/page'

jest.mock('../../components/home/hero-post')
jest.mock('../../components/home/headline/headline-content')
jest.mock('../../components/home/upcoming/upcoming-events')
jest.mock('../../components/layout/footer')

describe('Page', () => {
    it('renders the expected home page content', async ()=> {
        render(<Page />)

        const footer = screen.queryByTestId('footer-mock')
        const heroPost = screen.queryByTestId('hero-post-mock')
        const upcoming = screen.queryByTestId('upcoming-events-mock')
        const headline = screen.queryByTestId('headline-content-mock')

        expect(footer).toBeInTheDocument()
        expect(heroPost).toBeInTheDocument()
        expect(upcoming).toBeInTheDocument()
        expect(headline).toBeInTheDocument()
    })
})