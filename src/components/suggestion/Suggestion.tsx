import React, { FC } from 'react'
import { TSuggestion } from '../../store/state'
import { useHistory } from 'react-router'
import styled from 'styled-components'

type Props = {
    suggestion: TSuggestion
}

const Content = styled.div({
    display: 'grid',
    gridGap: '6px',
    textAlign: 'left'
})

const Suggestion: FC<Props> = props => {
    const { push } = useHistory()

    const handleGoToArtistPage = () => {
        push(`/artist/${props.suggestion.id}`)
    }

    return (
        <div className='suggestion' onClick={ handleGoToArtistPage }>
            <Content>
                <div className='heading'>{ props.suggestion.name }</div>
                <div className='subheading'>{ props.suggestion.genre.name }</div>
            </Content>
            <hr className='divisor' />
        </div>
    )
}

export default Suggestion
