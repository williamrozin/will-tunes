import { put, takeLatest } from 'redux-saga/effects'
import actions from '../action-types'
import { get, getOrElse } from '../api'
import { TArtist, TAlbum } from '../store/state'
import { getRandomDate, getResume, getRandomCountry } from '../lib/random'

type TAlbumLookup = {
    collectionId: string
    artworkUrl100: string
    collectionName: string
    collectionViewUrl: string
}

type TTrackLookup = {
    artistName: string
    trackTimeMillis: string
    trackId: string
    artworkUrl100: string
    trackName: string
    previewUrl: string
    kind: string
}


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

async function getAlbumsInfo(albums: TAlbumLookup[]) {
    const newAlbums: TAlbum[] = []
    const resume = await getResume()

    for (const album of albums) {
        const collection = await get({
            method: 'lookup',
            cors: true,
            credentials: true,
            headers: true,
            params: { id: album.collectionId, entity: 'song' }
        })
            .then(getOrElse)
            .then(res => res?.results ?? [])
            .then((tracks: TTrackLookup[]) => ({
                id: album.collectionId,
                picture: album.artworkUrl100,
                title: album.collectionName,
                editorsNotes: resume || '',
                link: album.collectionViewUrl,
                songs: tracks
                    .filter(track => track.kind === 'song')
                    .map(track => ({
                        artistName: track.artistName,
                        duration: track.trackTimeMillis,
                        id: track.trackId,
                        picture: track.artworkUrl100,
                        title: track.trackName,
                        previewUrl: track.previewUrl
                    }))
            }))
            .catch(() => null)

            if (collection) {
                newAlbums.push(collection)
            }
        }

        return newAlbums
    }

function* getArtist(action: TAction) {
    yield put({ type: actions.SET_LOADING_ARTIST })

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


        const response = yield get(artistParams).then(getOrElse)

        if (response) {
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

    yield put({ type: actions.UNSET_LOADING_ARTIST })
}

function* artistWatcher() {
    yield takeLatest(actions.GET_ARTIST_DETAILS, getArtist)
}

export default artistWatcher
