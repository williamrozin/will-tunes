import React from 'react'
import { render } from '@testing-library/react'
import 'isomorphic-fetch'
import Album from '../components/album/Album'
import mock from '../lib/mocks/album'

describe('Testing the Album component', () => {
    test('should display the Album component properly', async () => {
        const { findByTestId } = render(<Album album={ mock } />)
        const component = await findByTestId('album-content')

        expect(component).toHaveTextContent('Animals')
        expect(component).not.toHaveTextContent('404')
    })

    test('should show the link to Apple Music', async () => {
        const { findByTestId } = render(<Album album={ mock } />)
        const component = await findByTestId('album-content')

        expect(component).toHaveTextContent('Listen on Apple Music')
    })

    test('should list all tracks from the album', async () => {
        const { findByTestId } = render(<Album album={ mock } />)
        const component = await findByTestId('album-content')

        expect(component).toHaveTextContent('Pigs On the Wing, Pt. 1')
        expect(component).toHaveTextContent('Dogs')
        expect(component).toHaveTextContent('Pigs (Three Different Ones)')
        expect(component).toHaveTextContent('Sheep')
        expect(component).toHaveTextContent('Pigs On the Wing, Pt. 2')
    })

    test('should list all track durations from the album', async () => {
        const { findByTestId } = render(<Album album={ mock } />)
        const component = await findByTestId('album-content')

        expect(component).toHaveTextContent('1:24')
        expect(component).toHaveTextContent('17:05')
        expect(component).toHaveTextContent('11:25')
        expect(component).toHaveTextContent('10:19')
        expect(component).toHaveTextContent('01:26')
    })
})
