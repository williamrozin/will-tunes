import React, { FC, useEffect } from 'react'
import Artist from '../components/artist/Artist'
import { RouteComponentProps, useParams } from 'react-router'

export interface IProps extends RouteComponentProps<{}> {}

const ArtistContainer: FC<IProps> = () => {
    const { id } = useParams()

    console.log(process.env.ITUNES_URL + '?id=' + id)

    useEffect(() => {
        // fetch(process.env.ITUNES_URL + '?id=' + id, {
        //     method: 'GET',
        //     mode: 'cors',
        //     cache: 'no-cache',
        //     credentials: 'same-origin',
        //     headers: {
        //        'Content-Type': 'application/json'
        //     }
        // })
        // .then(res => res.json())
        // .then(res => console.log(res))
        // .catch(err => console.error(err))

    }, [])

    return <Artist id={ id } />
}

export default ArtistContainer
