import React, { FC, useEffect } from 'react'
import Artist from '../components/artist/Artist'
import { RouteComponentProps, useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { TState, TArtist, TAlbum, THome } from '../store/state'
import actions from '../action-types'

export type IProps = RouteComponentProps<{}>

const ArtistContainer: FC<IProps> = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const artist = useSelector<TState, TArtist>(state => state.artist)
    const albums = useSelector<TState, TAlbum[]>(state => state.albums)
    const loading = useSelector<TState, THome['loadingArtist']>(state => state.home.loadingArtist)

    useEffect(() => {
        dispatch({ type: actions.GET_ARTIST_DETAILS, id })
    }, [id])

    return (
        <Artist
            loading={ loading }
            artist={ artist }
            albums={ albums }
        />
    )
}

export default ArtistContainer
