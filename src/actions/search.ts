import { put, takeLatest } from 'redux-saga/effects'
import actions from '../action-types'
import { get } from '../api'

type TAction = {
    type: keyof actions
    searchText: string
}

function* getSuggestions(action: TAction) {
    try {
        const params = {
            term: action.searchText.replace(/ /g, '+').toLowerCase(),
            entity: 'musicArtist',
            limit: '10'
        }

        const response = yield get(params, 'search')

        const suggestions = response.results
            // @ts-ignore
            .filter(it => !!it.amgArtistId)
            // @ts-ignore
            .map(result => ({
                id: result.amgArtistId,
                name: result.artistName,
                genre: {
                    id: result.primaryGenreId,
                    name: result.primaryGenreName
                }
            })) || []

        yield put({ type: actions.SET_SUGGESTIONS, suggestions })
    } catch (err) {
        console.log(err)
    }
}

function* searchWatcher() {
    yield takeLatest(actions.SET_SEARCH_TEXT, getSuggestions)
}

export default searchWatcher
