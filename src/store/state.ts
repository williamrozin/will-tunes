export type TState = {
    artist: TArtist
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
    albums: TAlbum[]
    link?: string
}

export type TGenre = {
    id: string
    name: string
}

export type TAlbum = {
    id: string
    picture: string
    title: string
    editorsNotes: string
    songs: TSong[]
    link?: string
}

export type TSong = {
    id: string
    title: string
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
    albums: [{
        id: '1440857781',
        picture: 'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg',
        link: 'https://music.apple.com/us/album/in-between-dreams-bonus-track-version/1440857781?uo=4',
        title: 'In Between Dreams (Bonus Track Version)',
        editorsNotes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            + ' Curabitur vitae laoreet orci. Nulla consectetur diam non euismod pulvinar.'
            + 'Etiam dignissim vulputate arcu, vel feugiat enim iaculis vitae. Mauris ut tempor massa.'
            + 'Phasellus ullamcorper tempor eros, a euismod arcu. Maecenas vehicula pulvinar vulputate.'
            + 'Nulla interdum laoreet ornare.',
        songs: []
    }],
    link: 'https://music.apple.com/us/artist/jack-johnson/909253?uo=4'
}

export default {
    artist
}