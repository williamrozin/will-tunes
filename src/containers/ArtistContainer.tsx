import React, { FC, useEffect } from 'react'
import Artist from '../components/artist/Artist'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { TState, TArtist, TAlbum, THome, TFeatured } from '../store/state'
import actions from '../action-types'

const ArtistContainer: FC = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const artist = useSelector<TState, TArtist>(state => state.artist)
    const albums = useSelector<TState, TAlbum[]>(state => state.albums)
    const featured = useSelector<TState, TFeatured[]>(state => state.featured)
    const loading = useSelector<TState, THome['loadingArtist']>(state => state.home.loadingArtist)

    useEffect(() => {
        dispatch({ type: actions.GET_ARTIST_DETAILS, id })
        dispatch({ type: actions.GET_FEATURED })
    }, [id])

    return (
        <Artist
            loading={ loading || !artist.id }
            artist={ artist }
            albums={ albums }
            featured={ featured }
        />
    )
}

export default ArtistContainer
