import React, { FC } from 'react'
import { TAlbum, TSong } from '../../store/state'
import styled from 'styled-components'
import EditorsNotes from './EditorsNotes'
import Track from '../track/Track'

type Props = {
    album: TAlbum
}

const Content = styled.div`
    display: flex;
    flex: 1;
    margin-bottom: 24px;
    padding: 0 24px;
    flex-direction: column;
`

const AlbumDetails = styled.div`
    display: grid;
    grid-gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "picture title title"
        "picture link link"
        "picture tracks tracks"
        "notes tracks tracks"
        "notes tracks tracks"
        "notes tracks tracks"
        "notes tracks tracks";

    @media (max-width: 720px) {
        grid-template-columns: auto 1fr 1fr;
        grid-template-areas: "picture title title"
            "link link link"
            "notes notes notes"
            "tracks tracks tracks"
    }
`

const Bold = styled.b`
    margin: 0 4px;
`

const Link = styled.a`
    grid-area: link;
`

const Cover = styled.img`
    grid-area: picture;
`

const Title = styled.div`
    grid-area: title;
`

const Tracks = styled.div`
    grid-area: tracks;
    grid-row: 3 / span 6;

    @media (max-width: 720px) {
        grid-row: 4;
    }
`


const Album: FC<Props> = props => {
    const renderTrack = (song: TSong, index: number) =>
        <Track
            key={ song.id + index }
            track={ song }
        />

    return (
        <Content data-testid='album-content'>
            <AlbumDetails>
                <Cover className='album-cover' src={ props.album.picture } />
                <Title className='display2'>{ props.album.title }</Title>
                <Link className='action' href={ props.album.link || '' }>
                    Listen on <Bold>Apple Music</Bold> <span className='arrow' />
                </Link>
                <EditorsNotes text={ props.album.editorsNotes } />
                <Tracks>
                    { props.album.songs.map(renderTrack) }
                </Tracks>
            </AlbumDetails>
        </Content>
    )
}

export default Album
