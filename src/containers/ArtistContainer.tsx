import React, { FC, useEffect } from 'react'
import Artist from '../components/artist/Artist'
import { RouteComponentProps, useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { TState, TArtist, TAlbum } from '../store/state'
import actions from '../action-types'

export interface IProps extends RouteComponentProps<{}> {}

const ArtistContainer: FC<IProps> = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const artist = useSelector<TState, TArtist>(state => state.artist)
    const albums = useSelector<TState, TAlbum[]>(state => state.albums)

    useEffect(() => {
        dispatch({ type: actions.GET_ARTIST_DETAILS, id })
    }, [id])

    console.log(albums)

    return (
        <Artist
            artist={ artist }
            albums={ albums }
        />
    )
}

export default ArtistContainer
