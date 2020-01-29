import React, { FC } from 'react'
import styled from 'styled-components'

type Props = {
    text?: string
}

const Content = styled.div({
    display: 'grid',
    flex: 1,
    padding: '0 0 12px 0',
    gridGap: '6px',
    gridArea: 'notes',
    flexDirection: 'column'
})


const EditorsNotes: FC<Props> = props => {
    if (!props.text) {
        return null
    }

    return (
        <Content>
            <hr className='divisor' />
            <div className='heading'>
                Editors` Notes
            </div>
            <div className='body2 ellipsis'>
                { props.text }
            </div>
            <hr className='divisor' />
        </Content>
    )
}

export default EditorsNotes
