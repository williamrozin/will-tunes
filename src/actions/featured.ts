import { put, takeLatest } from 'redux-saga/effects'
import actions from '../action-types'
import { get, getOrElse } from '../api'
import { getRandomLetter } from '../lib/random'
import { takeLast } from 'ramda'

function* getFeatured() {
    const letter = getRandomLetter()

    try {
        const response = yield get({
            cors: true,
            credentials: true,
            headers: true,
            method: 'search',
            params: {
                term: letter,
                entity: 'musicArtist',
                limit: '16'
            }
        }).then(getOrElse)

        const featured = response && response.results
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

        yield put({ type: actions.SET_FEATURED, featured: takeLast(4, featured) })
    } catch (err) {
        console.log(err)
    }
}

function* featuredhWatcher() {
    yield takeLatest(actions.GET_FEATURED, getFeatured)
}

export default featuredhWatcher
