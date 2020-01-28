import React, { FC, useCallback } from 'react'
import { TArtist, TAlbum } from '../../store/state'
import styled from 'styled-components'
import Bio from './bio/Bio'
import Album from '../album/Album'

type Props = {
    artist: TArtist
    albums: TAlbum[]
}

const Container = styled.div({
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
})

const Artist: FC<Props> = props => {
    const renderAlbums = useCallback(() => {
        return props.albums.map(album => {
            return (
                <Album
                    key={ album.id }
                    album={ album }
                />
            )   
        })
    }, [props.albums])

    return (
        <Container>
            <Bio
                name={ props.artist.name }
                resume={ props.artist.resume }
                link={ props.artist.link }
                bio={ props.artist.bio }
                genre={ props.artist.genre }
            />
            { renderAlbums() }
        </Container>
    )
}

export default Artist
