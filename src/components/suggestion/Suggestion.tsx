import React, { FC, useCallback } from 'react'
import { TSuggestion } from '../../store/state'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'

type Props = {
    loading?: boolean
    suggestion?: TSuggestion
}

const Content = styled.div`
    display: grid;
    grid-gap: 6px;
    text-align: left;
`

const Suggestion: FC<Props> = props => {
    const { push } = useHistory()

    const handleGoToArtistPage = useCallback(() => {
        if (props.suggestion) {
            push(`/artist/${props.suggestion.id}`)
        }
    }, [props.suggestion, push])

    return (
        <div className='suggestion' onClick={ handleGoToArtistPage }>
            <Content>
                <div className='heading'>
                    { props.loading ? <Skeleton width='200px' /> : (props.suggestion?.name ?? '') }
                </div>
                <div className='subheading'>
                    { props.loading ? <Skeleton width='120px' /> : (props.suggestion?.genre?.name ?? '') }
                </div>
            </Content>
            <hr className='divisor' />
        </div>
    )
}

export default Suggestion
