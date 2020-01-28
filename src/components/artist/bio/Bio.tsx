import React, { FC } from 'react'
import { TArtist } from '../../../store/state'
import styled from 'styled-components'
import Detail from './Detail'
import { format } from 'date-fns'

type Props = {
    name: TArtist['name']
    resume: TArtist['resume']
    link: TArtist['link']
    bio: TArtist['bio']
    genre: TArtist['genre']
}

const Container = styled.div({
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
})

const Content = styled.div({
    marginTop: '12px',
    display: 'grid',
    gridGap: '24px',
    padding: '24px',
    flex: 1
})

const Bold = styled.b({
    margin: '0 4px'
})

const Details = styled.div({
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
})

const Bio: FC<Props> = props => {
    console.log(props)

    return (
        <Container>
            <div className='cover-picture' />
            <Content>
                <div className='display3'>{ props.name }</div>
                <div className='body2 ellipsis'>{ props.resume }</div>
                <a className='action' href={ props.link || '' }>
                    View on <Bold>Apple Music</Bold> &#8599;
                </a>
                <Details>
                    <Detail
                        title='Origin'
                        subtitle={ props.bio.origin }
                    />
                    <Detail
                        title='Genre'
                        subtitle={ props.genre.name }
                    />
                    <Detail
                        title='Born'
                        subtitle={ format(new Date(props.bio.birthDate), 'MMM dd, yyyy') }
                    />
                    <hr className='divisor' />
                </Details>
            </Content>
        </Container>
    )
}

export default Bio
