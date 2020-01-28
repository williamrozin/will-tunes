import React, { FC } from 'react'
import { TArtist } from '../../store/state'
import styled from 'styled-components'
import Bio from './bio/Bio'

type Props = {
    artist: TArtist
}

const Container = styled.div({
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
})

const Artist: FC<Props> = props => {
    return (
        <Container>
            <Bio
                name={ props.artist.name }
                resume={ props.artist.resume }
                link={ props.artist.link }
                bio={ props.artist.bio }
                genre={ props.artist.genre }
            />
        </Container>
    )
}

export default Artist
