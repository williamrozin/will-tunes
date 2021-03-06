export type TState = {
    artist: TArtist
    albums: TAlbum[]
    search: TSearch
    home: THome
    featured: TFeatured[]
}

export type THome = {
    loadingArtist: boolean
    loadingSuggestions: boolean
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

export type TFeatured = {
    id: string
    name: string
    genre: TGenre
}

export const artist: TArtist = {
    id: '',
    name: '',
    resume: '',
    genre: {
        id: '',
        name: ''
    },
    bio: {
        origin: '',
        birthDate: new Date()
    },
    link: ''
}

export const albums: TAlbum[] = []

export const search: TSearch = {
    searchText: '',
    suggestions: []
}

export const home: THome = {
    loadingArtist: true,
    loadingSuggestions: false
}

export const featured: TFeatured[] = []

export default {
    artist,
    albums,
    search,
    home,
    featured
}