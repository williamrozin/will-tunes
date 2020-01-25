import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'

export interface IProps extends RouteComponentProps<{}> {}

const HomeContainer: FC<IProps> = () => {
    return (
        <div>Hi There!</div>
    )
}

export default HomeContainer
