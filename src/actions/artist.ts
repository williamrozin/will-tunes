import { put, takeLatest } from 'redux-saga/effects'
import actions from '../action-types'
import { ITUNES_URL } from '../api'
import { TArtist } from '../store/state'

type TAction = {
    type: keyof actions
    id: string
}

function* getArtistInfo(action: TAction) {
    try {
        const response = yield fetch(`${ITUNES_URL}?amgArtistId=${action.id}&entity=album`, {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                   'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .catch(err => console.error(err))

        const [artist, ...albums] = response.results

        const value: TArtist = {
            id: artist.amgArtistId,
            name: artist.artistName,
            picture: 'https://cdn3-www.dogtime.com/assets/uploads/2018/10/puppies-cover.jpg',
            resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                + ' Curabitur vitae laoreet orci. Nulla consectetur diam non euismod pulvinar.'
                + 'Etiam dignissim vulputate arcu, vel feugiat enim iaculis vitae. Mauris ut tempor massa.'
                + 'Phasellus ullamcorper tempor eros, a euismod arcu. Maecenas vehicula pulvinar vulputate.'
                + 'Nulla interdum laoreet ornare.',
            genre: {
                id: artist.primaryGenreId,
                name: artist.primaryGenreName
            },
            bio: {
                origin: 'Hawaii',
                birthDate: new Date('1990-05-28')
            },
            // @ts-ignore
            albums: albums.map(album => ({
                id: album.collectionId,
                picture: album.artworkUrl100,
                title: album.collectionName,
                editorsNotes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    + ' Curabitur vitae laoreet orci. Nulla consectetur diam non euismod pulvinar.'
                    + 'Etiam dignissim vulputate arcu, vel feugiat enim iaculis vitae. Mauris ut tempor massa.'
                    + 'Phasellus ullamcorper tempor eros, a euismod arcu. Maecenas vehicula pulvinar vulputate.'
                    + 'Nulla interdum laoreet ornare.',
                songs: [] as const,
                link: album.collectionViewUrl
            }))
        }

        yield put({ type: actions.SET_ARTIST, value })
    } catch (err) {
        console.log(err)
    }
}

function* artistWatcher() {
    yield takeLatest(actions.GET_ARTIST_DETAILS, getArtistInfo)
}

export default artistWatcher
