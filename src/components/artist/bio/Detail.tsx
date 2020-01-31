import React, { FC } from 'react'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'

type Props = {
    title: string
    loading: boolean
    subtitle: string
}

const Content = styled.div`
    margin: 6px 0 12px 0;
`

const Detail: FC<Props> = props => {
    return (
        <>
            <hr className='divisor' />
            <div className='subheading'>
                { props.loading ? <Skeleton width='172px' /> : props.title }
            </div>
            <Content>
                <div className='body2'>
                    { props.loading ? <Skeleton width='128px' /> : props.subtitle }
                </div>
            </Content>
        </>
    )
}

export default Detail
