import {render, screen} from '@testing-library/react'
import Page from '@/app/page'

jest.mock('../../components/home/hero-post')
jest.mock('../../components/home/headline/headline-content')
jest.mock('../../components/home/upcoming/upcoming-events')
jest.mock('../../components/layout/footer')

describe('Page', () => {
    it('renders the expected home page content', ()=> {
        const {container} = render(<Page />)

        expect(container).toMatchSnapshot()
    })
})