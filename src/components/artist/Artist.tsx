import React, { FC } from 'react'


type Props = {
    id: string
}

const Artist: FC<Props> = props => {
    return <div>{ props.id }</div>
}

export default Artist
