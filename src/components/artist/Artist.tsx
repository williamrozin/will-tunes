import React, { FC, useCallback } from 'react'
import { TArtist, TAlbum, TFeatured } from '../../store/state'
import styled from 'styled-components'
import Bio from './bio/Bio'
import Album from '../album/Album'
import Related from './related/Related'

type Props = {
    loading: boolean
    artist: TArtist
    albums: TAlbum[]
    featured: TFeatured[]
}

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`

const Subtitle = styled.div`
    margin: 24px 24px 0 24px;
`

const Content = styled.div`
    flex: 1;
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
`

const Featured = styled.div`
    flex: 1;
    display: grid;
    margin: 0 24px;
    grid-template-columns: repeat(4,1fr);

    @media (max-width: 720px) {
        grid-template-columns: repeat(2,1fr);
    }
`

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


    const renderFeatured = useCallback(() => {
        if (!props.featured.length) {
            return null
        }

        return (
            <Content>
                <Subtitle className='display2'>Featured Artists</Subtitle>
                <Featured>
                    {
                        props
                            .featured
                            .map((it, index) => (
                                <Related
                                    key={ it.id + index }
                                    index={ index }
                                    related={ it }
                                />
                            ))
                    }
                </Featured>
            </Content>
        )
    }, [props.featured])

    return (
        <>
            <Container data-testid='artist-content'>
                <Bio
                    loading={ props.loading }
                    name={ props.artist.name }
                    resume={ props.artist.resume }
                    link={ props.artist.link }
                    bio={ props.artist.bio }
                    genre={ props.artist.genre }
                />
                <Content>
                    { props.loading ? null : renderAlbums() }
                </Content>
                { props.loading ? null : renderFeatured() }
            </Container>
        </>
    )
}

export default Artist
