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

const Wrapper = styled.div`
    padding: 36px;

    @media (max-width: 720px) {
        padding: 24px;
    }
`

const Content = styled.div`
    margin-top: 12px;
    display: grid;
    grid-gap: 24px;
    flex: 1;
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    grid-template-areas: "resume details";
    grid-template-columns: 2fr 1fr;
    padding-bottom: 24px;

    @media (max-width: 720px) {
        grid-template-areas: "resume" "details";
        grid-template-columns: 1fr;
        padding-bottom: 0;
    }
`

const Resume = styled.div({
    display: 'grid',
    gridArea: 'resume',
    gridGap: '24px',
    flex: 1
})

const Bold = styled.b({
    margin: '0 4px'
})

const Details = styled.div({
    display: 'flex',
    gridArea: 'details',
    flex: 1,
    flexDirection: 'column'
})

const Bio: FC<Props> = props => {
    return (
        <Container>
            <div className='cover-picture' />
            <Wrapper>
                <Content>
                    <Resume>
                        <div className='display3'>{ props.name }</div>
                        <div className='body2 ellipsis'>{ props.resume }</div>
                        <a className='action' href={ props.link || '' }>
                            View on <Bold>Apple Music</Bold> <span className='arrow' />
                        </a>
                    </Resume>
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
            </Wrapper>
        </Container>
    )
}

export default Bio
