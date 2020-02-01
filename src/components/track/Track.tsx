import React, { FC, useRef, useState, useCallback } from 'react'
import { TSong } from '../../store/state'
import styled from 'styled-components'
import { addMilliseconds } from 'date-fns'
import { format } from 'date-fns'

type Props = {
    track: TSong
}

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    cursor: pointer;
`

const Content = styled.div`
    display: grid;
    grid-gap: 4px;
    flex: 1;
    flex-direction: column;
    grid-template-columns: auto 1fr;
`

const Details = styled.div`
    padding: 6px 0;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto;
    grid-template-areas: "title duration" "artist duration";
`

const Duration = styled.div`
    grid-area: duration;
    padding-left: 12px;
    grid-row: 1 / span 2;
`

const Line = styled.hr`
    grid-column: 2;
    margin: 0;
`

const Audio = styled.audio`
    display: none;
`

const Images = styled.div`
    position: relative;
`


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
            alert('Your system may have missing codecs (for MP4) or the service isn\'t available right now.')

            return
        }

        if (playing) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }

        setPlaying(value => !value)
    }

    const handleSetError = useCallback(() => {
        setError(true)
    }, [])

    const renderAudio = () => {
        return (
            <Audio
                ref={ audioRef }
                onError={ handleSetError }>
                <source src={ props.track.previewUrl } type='audio/x-m4a' />
            </Audio>
        )
    }

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
