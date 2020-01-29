import React, { FC, useEffect, useState, ChangeEvent } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../action-types'
import { TSearch, TState, TSuggestion } from '../../store/state'
import Suggestion from '../suggestion/Suggestion'
import { useDebounce } from '../../hooks/useDebounce'

const Content = styled.div({
    padding: '36px',
    display: 'grid',
    flexDirection: 'column',
    width: '100%',
    gridGap: '12px',
    textAlign: 'center',
    margin: '0 auto',
    maxWidth: '720px'
})

const Home: FC = () => {
    const suggestions = useSelector<TState, TSearch['suggestions']>(state => state.search.suggestions)
    const initialSearchText = useSelector<TState, TSearch['searchText']>(state => state.search.searchText)
    const [searchText, setSearchText] = useState(initialSearchText || '')
    const dispatch = useDispatch()
    const [debouncedSearch] = useDebounce(searchText)


    useEffect(() => {
        dispatch({ type: actions.SET_SEARCH_TEXT, searchText: debouncedSearch })
    }, [debouncedSearch])

    const handleChangeSearchText = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value)
    }

    const renderSuggestion = (suggestion: TSuggestion) =>
        <Suggestion
            key={ suggestion.id }
            suggestion={ suggestion }
        />


    return (
        <Content>
            <div className='display5 primary'>willTunes</div>
            <input
                placeholder='Search for an artist'
                type='search'
                value={ searchText }
                className='sticky'
                onChange={ handleChangeSearchText }
            />
            { suggestions.map(renderSuggestion) }
        </Content>
    )
}

export default Home
