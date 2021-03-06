import React, { FC, useCallback } from 'react'
import { TFeatured, artist } from '../../../store/state'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import actions from '../../../action-types'

type Props = {
    index: number 
    related: TFeatured
}

const Content = styled.div`
    display: grid;
    grid-template-rows: auto 1fr 1fr;
    justify-content: center;
    grid-gap: 4px;
    margin: 36px 0;
    text-align: center;
    cursor: pointer;

    &:hover {
        .related-artist {
            border-color: #bd5171;
            border-width: 2px;
            opacity: 0.75;
            transition: all ease-in-out 200ms;
        }

        .body2 {
            transition: all ease-in-out 200ms;
            color: #bd5171;
        }
    }
`

const Related: FC<Props> = props => {
    const { push } = useHistory()
    const dispatch = useDispatch()

    const handleClick = useCallback(() => {
        dispatch({ type: actions.SET_ARTIST, value: artist })
        push(`/artist/${props.related.id}`)
    }, [push, dispatch, props.related.id])

    return (
        <Content onClick={ handleClick }>
            <img
                className='related-artist'
                src={ 'https://picsum.photos/200/200/?random=' + props.index }
            />
            <div className='body2'>
                { props.related.name }
            </div>
            <div className='body1'>
                { props.related.genre.name }
            </div>
        </Content>
    )
}

export default Related
