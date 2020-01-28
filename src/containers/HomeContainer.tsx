import React, { FC } from 'react'
import { RouteComponentProps, useHistory } from 'react-router'

export interface IProps extends RouteComponentProps<{}> {}

const HomeContainer: FC<IProps> = () => {
    const { push } = useHistory()

    return (
        <>
            <div>Hi There!</div>
            <a
                className='action'
                onClick={ () => push('/artist/468749') }>
                Go to artist page
            </a>
        </>
    )
}

export default HomeContainer
