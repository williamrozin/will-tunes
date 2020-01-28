import React, { FC, useCallback } from 'react'
import { TAlbum } from '../../store/state'
import styled from 'styled-components'
import EditorsNotes from './EditorsNotes'
import Track from '../track/Track'

type Props = {
    album: TAlbum
}

const Content = styled.div({
    display: 'flex',
    flex: 1,
    padding: '0 24px',
    flexDirection: 'column'
})

const AlbumDetails = styled.div({
    display: 'grid',
    gridGap: '24px',
    justifyContent: 'flex-start',
    gridTemplateColumns: 'auto 1fr',
    gridTemplateAreas: '"picture title" "link link"'
})

const Bold = styled.b({
    margin: '0 4px'
})

const Album: FC<Props> = props => {
    console.log(props)

    const renderTracks = useCallback(() => {
        return props.album.songs.map(song => {
            return (
                <Track
                    key={ song.id }
                    track={ song }
                />
            )
        })
    }, [props.album.songs])

    return (
        <Content>
            <AlbumDetails>
                <img className='album-cover' src={ props.album.picture } />
                <div className='display2'>{ props.album.title }</div>
                <a className='action' href={ props.album.link || '' }>
                    Listen on <Bold>Apple Music</Bold> &#8599;
                </a>
            </AlbumDetails>
            <EditorsNotes text={ props.album.editorsNotes } />
            { renderTracks() }
        </Content>
    )
}

export default Album
