import React, { FC } from 'react'
import { TArtist } from '../../store/state'


type Props = {
    artist: TArtist
}

const Artist: FC<Props> = props => {
    return <div>{ props.artist.name }</div>
}

export default Artist
