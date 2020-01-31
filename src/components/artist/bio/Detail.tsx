import React, { FC } from 'react'
import styled from 'styled-components'

type Props = {
    title: string
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
                { props.title }
            </div>
            <Content>
                <div className='body2'>
                    { props.subtitle }
                </div>
            </Content>
        </>
    )
}

export default Detail
