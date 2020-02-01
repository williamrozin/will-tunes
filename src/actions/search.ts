import { put, takeLatest } from 'redux-saga/effects'
import actions from '../action-types'
import { get, getOrElse } from '../api'

type TAction = {
    type: actions
    searchText: string
}

export function* getSuggestions(action: TAction) {
    yield put({ type: actions.SET_LOADING_SUGGESTION })

    if (!action.searchText) {
        yield put({ type: actions.SET_SUGGESTIONS, suggestions: [] })
    } else {
        try {
            const response = yield get({
                cors: true,
                credentials: true,
                headers: true,
                method: 'search',
                params: {
                    term: action.searchText.replace(/ /g, '+').toLowerCase(),
                    entity: 'musicArtist',
                    limit: '10'
                }
            }).then(getOrElse)

            const suggestions = response && response.results
                ? response.results
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
                    }))
                : []

            yield put({ type: actions.SET_SUGGESTIONS, suggestions })
        } catch (err) {
            console.log(err)
        }           
    }

    yield put({ type: actions.UNSET_LOADING_SUGGESTION })
}

function* searchWatcher() {
    yield takeLatest(actions.SET_SEARCH_TEXT, getSuggestions)
}

export default searchWatcher
