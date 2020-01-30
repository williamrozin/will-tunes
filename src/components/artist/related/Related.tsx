import React, { FC } from 'react'
import { TRelatedArtist } from '../../../store/state'
import styled from 'styled-components'

type Props = {
    related: TRelatedArtist
}

const Content = styled.div({
    display: 'grid',
    gridTemplateRows: 'auto 1fr 1fr',
    justifyContent: 'center',
    gridGap: '4px',
    margin: '36px 0',
    textAlign: 'center'
})

const Related: FC<Props> = props => {
    return (
        <Content>
            <img className='related-artist' src={ 'https://picsum.photos/200/200' } />
            <div className='body2'>{ props.related.name }</div>
            <div className='body1'>{ props.related.genre.name }</div>
        </Content>
    )
}

export default Related
