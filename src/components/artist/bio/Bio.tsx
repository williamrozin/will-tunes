import React, { FC, useCallback } from 'react'
import { TArtist } from '../../../store/state'
import styled from 'styled-components'
import Detail from './Detail'
import { format } from 'date-fns'
import Skeleton from 'react-loading-skeleton'

type Props = {
    name: TArtist['name']
    resume: TArtist['resume']
    link: TArtist['link']
    bio: TArtist['bio']
    genre: TArtist['genre']
    loading: boolean
}

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`

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

const Resume = styled.div`
    display: grid;
    grid-area: resume;
    grid-gap: 24px;
    flex: 1;
    align-items: center;
    grid-template-rows: 1fr auto 1fr;
`

const Bold = styled.b`
    margin: 0 4px;
`

const Details = styled.div`
    display: flex;
    grid-area: details;
    flex: 1;
    flex-direction: column;
`

const Bio: FC<Props> = props => {
    const renderLink = useCallback(() => {
        return (
            <a className='action' href={ props.link || '' }>
                View on <Bold>Apple Music</Bold> <span className='arrow' />
            </a>
        )
    }, [props.link])

    return (
        <Container data-testid='artist-bio'>
            <div className='cover-picture' />
            <Wrapper>
                <Content>
                    <Resume>
                        <div className='display3'>
                            { props.loading ? <Skeleton width='300px' /> : props.name }
                        </div>
                        <div className='body2 ellipsis'>
                            { props.loading ? <Skeleton count={ 3 } /> : props.resume }
                        </div>
                        { props.loading ? <Skeleton width='200px' height='36px' /> : renderLink() }
                    </Resume>
                    <Details>
                        <Detail
                            title='Origin'
                            loading={ props.loading }
                            subtitle={ props.bio.origin }
                        />
                        <Detail
                            title='Genre'
                            loading={ props.loading }
                            subtitle={ props.genre.name }
                        />
                        <Detail
                            title='Born'
                            loading={ props.loading }
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
