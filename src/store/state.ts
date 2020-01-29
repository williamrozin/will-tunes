export type TState = {
    artist: TArtist
    albums: TAlbum[]
    search: TSearch
}

export type TArtist = {
    id: string
    name: string
    picture: string
    resume: string
    genre: TGenre
    bio: {
        origin: string
        birthDate: Date
    }
    link?: string
}

export type TGenre = {
    id: string
    name: string
}

export type TAlbum = {
    id: string
    artistId?: string
    picture: string
    title: string
    editorsNotes: string
    songs: TSong[]
    link?: string
}

export type TSong = {
    id: string
    title: string
    artistName: string
    picture: string
    duration: number // in seconds
    previewUrl: string
}

export type TSearch = {
    searchText: string
    suggestions: TSuggestion[]
}

export type TSuggestion = {
    id: string
    name: string
    genre: TGenre
}

export const artist: TArtist = {
    id: '909253',
    name: 'Jack Jonhson',
    picture: '',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        + ' Curabitur vitae laoreet orci. Nulla consectetur diam non euismod pulvinar.'
        + 'Etiam dignissim vulputate arcu, vel feugiat enim iaculis vitae. Mauris ut tempor massa.'
        + 'Phasellus ullamcorper tempor eros, a euismod arcu. Maecenas vehicula pulvinar vulputate.'
        + 'Nulla interdum laoreet ornare.',
    genre: {
        id: '21',
        name: 'Rock'
    },
    bio: {
        origin: 'Hawaii',
        birthDate: new Date('1990-05-28')
    },
    link: 'https://music.apple.com/us/artist/jack-johnson/909253?uo=4'
}

export const albums: TAlbum[] = []

export const search: TSearch = {
    searchText: '',
    suggestions: []
}

export default {
    artist,
    albums,
    search
}