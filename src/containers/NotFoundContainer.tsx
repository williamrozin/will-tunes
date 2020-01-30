import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'
import NotFound from '../components/not-found/NotFound'

type IProps = RouteComponentProps<{}>

const NotFoundContainer: FC<IProps> = () => {
    return <NotFound />
}


export default NotFoundContainer
