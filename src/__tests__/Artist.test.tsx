import React, { FC } from 'react'
import { render } from '@testing-library/react'
import 'isomorphic-fetch'
import artist from '../lib/mocks/artist'
import Bio from '../components/artist/bio/Bio'

const Element: FC = () =>
    <Bio
        loading={ false }
        link={ '' }
        { ...artist }
    />

describe('Testing components from Artist', () => {
    test('should display the Artist page properly', async () => {
        const { findByTestId } = render(<Element />)
        const component = await findByTestId('artist-bio')

        expect(component).toHaveTextContent('Pink Floyd')
        expect(component).toHaveTextContent('View on Apple Music')
        expect(component).toHaveTextContent('Origin')
        expect(component).toHaveTextContent('Genre')
        expect(component).toHaveTextContent('Born')
    })
})
