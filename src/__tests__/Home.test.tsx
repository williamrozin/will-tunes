import React, { FC } from 'react';
import { render } from '@testing-library/react';
import Home from '../components/home/Home'
import { Provider } from 'react-redux';
import { store } from '../store';
import 'isomorphic-fetch'

const Element: FC = () =>
    <Provider store={ store }>
        <Home />
    </Provider>

describe('<Home />', () => {
    test('should display the Home page properly', async () => {
        const { findByTestId } = render(<Element />)
        const input = await findByTestId('search-field')

        expect(input).toHaveValue('')
    });
});
