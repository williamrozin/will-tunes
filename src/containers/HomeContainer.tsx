import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'
import Home from '../components/home/Home'

export type IProps = RouteComponentProps<{}>

const HomeContainer: FC<IProps> = () => {
    return <Home />
}

export default HomeContainer
