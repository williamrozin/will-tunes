export type TState = {
    artist: TArtist
    albums: TAlbum[]
    search: TSearch
    home: THome
}

export type THome = {
    loading: boolean
}

export type TArtist = {
    id: string
    name: string
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
    id: '3492',
    name: 'ABBA',
    resume: 'ABBA is a Swedish pop supergroup formed in Stockholm in 1972 by '
        + 'Agnetha Fältskog, Björn Ulvaeus, Benny Andersson, and Anni-Frid '
        + 'Lyngstad. The group\'s name is an acronym of the first letters of '
        + 'their first names. They became one of the most commercially successful '
        + 'acts in the history of popular music, topping the charts worldwide from 1974 '
        + 'to 1982. ABBA won the Eurovision Song Contest 1974, giving Sweden its first '
        + 'triumph in the contest.',
    genre: {
        id: '0',
        name: 'Pop'
    },
    bio: {
        origin: 'Sweden',
        birthDate: new Date('1972-01-01')
    },
    link: ''
}

export const albums: TAlbum[] = []

export const search: TSearch = {
    searchText: '',
    suggestions: []
}

export const home: THome = {
    loading: false
}

export default {
    artist,
    albums,
    search,
    home
}