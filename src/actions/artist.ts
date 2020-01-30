import { put, takeLatest } from 'redux-saga/effects'
import actions from '../action-types'
import { get } from '../api'
import { TArtist } from '../store/state'
import { getRandomDate, getResume, getRandomCountry } from '../lib/random'

type TAction = {
    type: keyof actions
    id: string
}

function getArtistInfo(artist: unknown) {
    const value: TArtist = {
        // @ts-ignore
        id: artist.amgArtistId,
        // @ts-ignore
        name: artist.artistName,
        resume: '',
        genre: {
            // @ts-ignore
            id: artist.primaryGenreId,
            // @ts-ignore
            name: artist.primaryGenreName
        },
        bio: {
            origin: '',
            birthDate: new Date()
        }
    }

    return value
}

async function getAlbumsInfo(albums: unknown) {
    return Promise
        // @ts-ignore
        .all(albums.map(album =>
            get({
                method: 'lookup',
                cors: true,
                credentials: true,
                headers: true,
                params: { id: album.collectionId, entity: 'song' }
            })
                // @ts-ignore
                .then(res => res.json())
                .then(res => res?.results ?? [])
                .then(async tracks => ({
                    id: album.collectionId,
                    picture: album.artworkUrl100,
                    title: album.collectionName,
                    editorsNotes: await getResume(),
                    link: album.collectionViewUrl,
                    songs: tracks
                        // @ts-ignore
                        .filter(track => track.kind === 'song')
                        // @ts-ignore
                        .map(track => ({
                            artistName: track.artistName,
                            duration: track.trackTimeMillis,
                            id: track.trackId,
                            picture: track.artworkUrl100,
                            title: track.trackName,
                            previewUrl: track.previewUrl
                        }))
                }))
        ))
}

function* getArtist(action: TAction) {
    try {
        const artistParams = {
            cors: true,
            credentials: true,
            headers: true,
            method: 'lookup',
            params: {
                amgArtistId: action.id,
                entity: 'album',
                limit: '10'
            }
        }


        const response = yield get(artistParams)
            .then(res => {
                try {
                // @ts-ignore
                    return res.json()
                } catch (err) {
                    return null
                }
            })

        if (!response) {
            const resume = yield getResume()
            const origin = getRandomCountry()
            const [artist, ...albums] = response.results

            const artistInfo = {
                ...getArtistInfo(artist),
                resume,
                bio: { origin, birthDate: getRandomDate() }
            }            

            const collection = yield getAlbumsInfo(albums)

            yield put({ type: actions.SET_ARTIST, value: artistInfo })
            yield put({ type: actions.SET_ALBUMS, value: collection })
        }
    } catch (err) {
        console.log(err)
    }
}

function* artistWatcher() {
    yield takeLatest(actions.GET_ARTIST_DETAILS, getArtist)
}

export default artistWatcher
