import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'
import Home from '../components/home/Home'

export interface IProps extends RouteComponentProps<{}> {}

const HomeContainer: FC<IProps> = () => {
    return <Home />
}

export default HomeContainer
