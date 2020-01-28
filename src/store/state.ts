export type TState = {
    artist: TArtist
    albums: TAlbum[]
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

export const albums: TAlbum[] = [{
    id: '1440857781',
    picture: 'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg',
    link: 'https://music.apple.com/us/album/in-between-dreams-bonus-track-version/1440857781?uo=4',
    title: 'In Between Dreams (Bonus Track Version)',
    editorsNotes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        + ' Curabitur vitae laoreet orci. Nulla consectetur diam non euismod pulvinar.'
        + 'Etiam dignissim vulputate arcu, vel feugiat enim iaculis vitae. Mauris ut tempor massa.'
        + 'Phasellus ullamcorper tempor eros, a euismod arcu. Maecenas vehicula pulvinar vulputate.'
        + 'Nulla interdum laoreet ornare.',
    songs:[
        {
            artistName: 'Weezer',
            duration: 204293,
            id: '1440914221',
            picture: 'https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/da/ca/1a/daca1a14-2104-80d9-c6c8-250679041269/source/60x60bb.jpg',
            title: 'My Name Is Jonas'
        },
        {
            artistName: 'Weezer',
            duration: 184507,
            id: '1440914562',
            picture: 'https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/da/ca/1a/daca1a14-2104-80d9-c6c8-250679041269/source/60x60bb.jpg',
            title: 'No One Else'
        },
        {
            artistName: 'Weezer',
            duration: 259467,
            id: '1440914563',
            picture: 'https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/da/ca/1a/daca1a14-2104-80d9-c6c8-250679041269/source/60x60bb.jpg',
            title: 'The World Has Turned and Left Me Here'
        },
        {
            artistName: 'Weezer',
            duration: 159227,
            id: '1440914564',
            picture: 'https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/da/ca/1a/daca1a14-2104-80d9-c6c8-250679041269/source/60x60bb.jpg',
            title: 'Buddy Holly'
        },
        {
            artistName: 'Weezer',
            duration: 305533,
            id: '1440914566',
            picture: 'https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/da/ca/1a/daca1a14-2104-80d9-c6c8-250679041269/source/60x60bb.jpg',
            title: 'Undone (The Sweater Song)'
        },
        {
            artistName: 'Weezer',
            duration: 186440,
            id: '1440914569',
            picture: 'https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/da/ca/1a/daca1a14-2104-80d9-c6c8-250679041269/source/60x60bb.jpg',
            title: 'Surf Wax America'
        },
        {
            artistName: 'Weezer',
            duration: 258827,
            id: '1440914570',
            picture: 'https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/da/ca/1a/daca1a14-2104-80d9-c6c8-250679041269/source/60x60bb.jpg',
            title: 'Say It Ain\'t So'
        },
        {
            artistName: 'Weezer',
            duration: 235707,
            id: '1440914573',
            picture: 'https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/da/ca/1a/daca1a14-2104-80d9-c6c8-250679041269/source/60x60bb.jpg',
            title: 'In The Garage'
        },
        {
            artistName: 'Weezer',
            duration: 204933,
            id: '1440914575',
            picture: 'https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/da/ca/1a/daca1a14-2104-80d9-c6c8-250679041269/source/60x60bb.jpg',
            title: 'Holiday'
        },
        {
            artistName: 'Weezer',
            duration: 479067,
            id: '1440914576',
            picture: 'https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/da/ca/1a/daca1a14-2104-80d9-c6c8-250679041269/source/60x60bb.jpg',
            title: 'Only In Dreams'
        }
    ]
}]

export default {
    artist,
    albums
}