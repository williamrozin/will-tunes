import { DeepPartial } from 'redux'
import actions from '../action-types'
import { TSearch, search } from '../store/state'
import { uniqBy, prop } from 'ramda'

interface IAction {
    type: string
    searchText?: TSearch['searchText']
    suggestions?: TSearch['suggestions']
}

type PartialState = DeepPartial<TSearch>

export default function searchReducer(state: PartialState = search, action: IAction) {
    switch (action.type) {
        case actions.SET_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.searchText || ''
            }
        case actions.SET_SUGGESTIONS:
            return {
                ...state,
                suggestions: uniqBy(prop('id'), action.suggestions || [])
            }
        default:
            return state
    }
}
