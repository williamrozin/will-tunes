import React, { FC } from 'react'
import { TSong } from '../../store/state'
import styled from 'styled-components'
import { addMilliseconds } from 'date-fns/esm'
import { format } from 'date-fns'

type Props = {
    track: TSong
}

const Content = styled.div({
    display: 'grid',
    gridGap: '4px',
    flexDirection: 'column',
    gridTemplateColumns: 'auto 1fr'
})

const Details = styled.div({
    padding: '6px 0',
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: '1fr auto',
    gridTemplateAreas: '"title duration" "artist duration"'
})

const Duration = styled.div({
    gridArea: 'duration',
    paddingLeft: 12,
    gridRow: '1 / span 2'
})

const Line = styled.hr({
    gridColumn: 2,
    margin: 0
})

const toHumanDuration = (milliseconds: number) => {
    const current = new Date()
    const next = addMilliseconds(current.setHours(0, 0, 0, 0), milliseconds)

    return format(next, 'mm:ss')
}

const Track: FC<Props> = props => {
    return (
        <Content>
            <img className='track-cover' src={ props.track.picture } />
            <Details>
                <div className='body2 ellipsis-1'>{ props.track.title }</div>
                <Duration className='body1'>{ toHumanDuration(props.track.duration) }</Duration>
                <div className='body1 ellipsis-1'>{ props.track.artistName }</div>
            </Details>
                <Line className='divisor' />
        </Content>
    )
}

export default Track
