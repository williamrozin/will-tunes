import React from 'react';
import { render } from '@testing-library/react';
import 'isomorphic-fetch'
import NotFound from '../components/not-found/NotFound';

describe('Testing the NotFound component', () => {
    test('should display the NotFound component properly', async () => {
        const { findByTestId } = render(<NotFound />)
        const component = await findByTestId('not-found')

        expect(component).toHaveTextContent('404')
        expect(component).not.toHaveTextContent('500')
    });
})
