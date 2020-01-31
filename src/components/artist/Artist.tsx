import React, { FC, useCallback } from 'react'
import { TArtist, TAlbum } from '../../store/state'
import styled from 'styled-components'
import Bio from './bio/Bio'
import Album from '../album/Album'
import Related from './related/Related'

type Props = {
    loading: boolean
    artist: TArtist
    albums: TAlbum[]
}

const LoadingWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    color: #FFFFFF;
    justify-content: center;
    align-items: center;
    background-color: #00000080;
`

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`

const Subtitle = styled.div`
    margin-top: 24px;
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
    grid-template-columns: repeat(3, 1fr);
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

    if (!props.artist.id) {
        return null
    }

    const renderLoading = () =>
        <LoadingWrapper>
            <div className='display3'>Loading...</div>
        </LoadingWrapper>

    return (
        <>
            { props.loading && renderLoading() }
            <Container>
                <Bio
                    name={ props.artist.name }
                    resume={ props.artist.resume }
                    link={ props.artist.link }
                    bio={ props.artist.bio }
                    genre={ props.artist.genre }
                />
                <Content>
                    { renderAlbums() }
                </Content>
                <Content>
                    <Subtitle className='display2'>Featured Artists</Subtitle>
                    <Featured>
                        <Related
                            related={ {
                                name: 'Bee Gees',
                                genre: {
                                    id: '0',
                                    name: 'Pop'
                                }
                            } }
                        />
                    </Featured>
                </Content>
            </Container>
        </>
    )
}

export default Artist
