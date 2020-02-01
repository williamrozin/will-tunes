import React, { FC } from 'react'
import { render, fireEvent } from '@testing-library/react'
import Home from '../components/home/Home'
import { Provider } from 'react-redux'
import { store } from '../store'
import { getSuggestions } from '../actions/search'
import 'isomorphic-fetch'
import actions from '../action-types'
import sagaHelper from 'redux-saga-testing'
import { put } from 'redux-saga/effects'

const Element: FC = () =>
    <Provider store={ store }>
        <Home />
    </Provider>

describe('Testing components from Home', () => {
    test('should display the Home page properly', async () => {
        const { findByTestId } = render(<Element />)
        const input = await findByTestId('search-field')

        expect(input).toHaveValue('')
    });

    test('shold change the search field', async () => {
        const { findByTestId,  } = render(<Element />)
        const input = await findByTestId('search-field')

        expect(input).toHaveValue('')

        fireEvent.change(input, { target: { value: 'pink' }})

        expect(input).toHaveValue('pink')

        fireEvent.change(input, { target: { value: '' }})

        expect(input).toHaveValue('')
    })


    test('should check the integrity of the search component', async () => {
        const { findByTestId, asFragment } = render(<Element />)
        const input = await findByTestId('search-field')
        const firstRender = asFragment()

        expect(input).toHaveValue('')

        fireEvent.change(input, { target: { value: 'pink' }})

        expect(input).toHaveValue('pink')

        expect(firstRender).not.toEqual(asFragment)
    })
})

describe('Testing saga from Home', () => {
    const it = sagaHelper(getSuggestions({ type: actions.SET_SEARCH_TEXT, searchText: 'pink' }))

    it('should start loading suggestions', result => {
        expect(result).toEqual(put({ type: actions.SET_LOADING_SUGGESTION }))
    })

    it('should call the search api suggestions', result => {
        expect(result).toEqual(Promise.resolve())
    })

    it('should set suggestions', result => {
        expect(result).toEqual(put({ type: actions.SET_SUGGESTIONS, suggestions: [] }))
    })
})
