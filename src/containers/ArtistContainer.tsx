import React, { FC } from 'react'
import Artist from '../components/artist/Artist'
import { RouteComponentProps } from 'react-router'
// import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { TState, TArtist } from '../store/state'

export interface IProps extends RouteComponentProps<{}> {}

const ArtistContainer: FC<IProps> = () => {
    // const { id } = useParams()
    const artist = useSelector<TState, TArtist>(state => state.artist)

    return <Artist artist={ artist } />
}

export default ArtistContainer
