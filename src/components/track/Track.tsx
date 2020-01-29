import React, { FC, useRef, useState } from 'react'
import { TSong } from '../../store/state'
import styled from 'styled-components'
import { addMilliseconds } from 'date-fns/esm'
import { format } from 'date-fns'

type Props = {
    track: TSong
}

const Wrapper = styled.div({
    display: 'flex',
    flex: 1,
    cursor: 'pointer'
})

const Content = styled.div({
    display: 'grid',
    gridGap: '4px',
    flex: 1,
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

const Audio = styled.audio({
    display: 'none'
})

const Images = styled.div({
    position: 'relative'
})


const toHumanDuration = (milliseconds: number) => {
    const current = new Date()
    const next = addMilliseconds(current.setHours(0, 0, 0, 0), milliseconds)

    return format(next, 'mm:ss')
}

const Track: FC<Props> = props => {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [playing, setPlaying] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const additionalClass = playing ? 'playing' : ''

    const handleTogglePlaying = () => {
        if (error) {
            return
        }

        if (playing) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }

        setPlaying(value => !value)
    }

    const handleSetError = () => {
        setError(true)
    }

    const renderAudio = () =>
        <Audio
            ref={ audioRef }
            onError={ handleSetError }>
            <source src={ props.track.previewUrl } type='audio/x-m4a' />
        </Audio>

    return (
        <Wrapper className='track-details'>
            <Content onClick={ handleTogglePlaying }>
                <Images>
                    <img className={ `track-cover ${additionalClass}` } src={ props.track.picture } />
                    { playing ? <div className='pause-icon' /> : <div className='play-icon' /> }
                </Images>
                <Details>
                    <div className={ `body2 ellipsis-1 ${additionalClass}` }>
                        { props.track.title }
                    </div>
                    <Duration className={ `body1 ${additionalClass}` }>
                        { toHumanDuration(props.track.duration) }
                    </Duration>
                    <div className={ `body1 ellipsis-1 ${additionalClass}` }>
                        { props.track.artistName }
                    </div>
                </Details>
                <Line className='divisor' />
            </Content>
            { renderAudio() }
        </Wrapper>
    )
}

export default Track
