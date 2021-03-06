import React, { FC, useEffect, useState, ChangeEvent } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../action-types'
import { TSearch, TState, TSuggestion, THome } from '../../store/state'
import Suggestion from '../suggestion/Suggestion'
import { useDebounce } from '../../hooks/useDebounce'
import { times } from 'ramda'

const Content = styled.div`
    padding: 36px;
    display: grid;
    flex-direction: column;
    width: calc(100% - 72px);
    grid-gap: 12px;
    text-align: center;
    margin: 0 auto;
    max-width: 720px;
`

const Home: FC = () => {
    const suggestions = useSelector<TState, TSearch['suggestions']>(state => state.search.suggestions)
    const loadingSuggestions = useSelector<TState, THome['loadingSuggestions']>(state => state.home.loadingSuggestions)
    const initialSearchText = useSelector<TState, TSearch['searchText']>(state => state.search.searchText)
    const [searchText, setSearchText] = useState(initialSearchText || '')
    const dispatch = useDispatch()
    const [debouncedSearch] = useDebounce(searchText)

    const loading = loadingSuggestions && !!initialSearchText

    useEffect(() => {
        dispatch({ type: actions.SET_SEARCH_TEXT, searchText: debouncedSearch })
    }, [debouncedSearch])

    const handleChangeSearchText = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value)
    }

    const renderSuggestion = (suggestion: TSuggestion | number) =>
        <Suggestion
            loading={ loading }
            key={ typeof suggestion === 'number' ? suggestion : suggestion.id }
            suggestion={ typeof suggestion === 'number' ? undefined : suggestion }
        />

    return (
        <>
            <div className='home-cover-picture' />
            <Content>
                <div className='display5 primary'>willTunes</div>
                <input
                    placeholder='Search for an artist'
                    type='search'
                    value={ searchText }
                    className='sticky'
                    data-testid='search-field'
                    onChange={ handleChangeSearchText }
                />
                { loading ? times(renderSuggestion, 3) : suggestions.map(renderSuggestion) }
            </Content>
        </>
    )
}

export default Home
