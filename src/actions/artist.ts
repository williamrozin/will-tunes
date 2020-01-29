import { put, takeLatest } from 'redux-saga/effects'
import actions from '../action-types'
import { get } from '../api'
import { TArtist } from '../store/state'

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
        picture: 'https://cdn3-www.dogtime.com/assets/uploads/2018/10/puppies-cover.jpg',
        resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            + ' Curabitur vitae laoreet orci. Nulla consectetur diam non euismod pulvinar.'
            + 'Etiam dignissim vulputate arcu, vel feugiat enim iaculis vitae. Mauris ut tempor massa.'
            + 'Phasellus ullamcorper tempor eros, a euismod arcu. Maecenas vehicula pulvinar vulputate.'
            + 'Nulla interdum laoreet ornare.',
        genre: {
            // @ts-ignore
            id: artist.primaryGenreId,
            // @ts-ignore
            name: artist.primaryGenreName
        },
        bio: {
            origin: 'Hawaii',
            birthDate: new Date('1990-05-28')
        }
    }

    return value
}

function getAlbumsInfo(albums: unknown) {
    return Promise
        // @ts-ignore
        .all(albums.map(album =>
            get({ id: album.collectionId, entity: 'song' })
                .then(res => res?.results ?? [])
                .then(tracks => ({
                    id: album.collectionId,
                    picture: album.artworkUrl100,
                    title: album.collectionName,
                    editorsNotes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        + ' Curabitur vitae laoreet orci. Nulla consectetur diam non euismod pulvinar.'
                        + 'Etiam dignissim vulputate arcu, vel feugiat enim iaculis vitae. Mauris ut tempor massa.'
                        + 'Phasellus ullamcorper tempor eros, a euismod arcu. Maecenas vehicula pulvinar vulputate.'
                        + 'Nulla interdum laoreet ornare.',
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
        const response = yield get({
            amgArtistId: action.id,
            entity: 'album',
            limit: '10'
        })

        const [artist, ...albums] = response.results

        const artistInfo = getArtistInfo(artist)
        const collection = yield getAlbumsInfo(albums)

        yield put({ type: actions.SET_ARTIST, value: artistInfo })
        yield put({ type: actions.SET_ALBUMS, value: collection })
    } catch (err) {
        console.log(err)
    }
}

function* artistWatcher() {
    yield takeLatest(actions.GET_ARTIST_DETAILS, getArtist)
}

export default artistWatcher
