import React, { FC, useEffect } from 'react'
import { RouteComponentProps } from 'react-router'
import Home from '../components/home/Home'
import { useDispatch } from 'react-redux'
import actions from '../action-types'
import { artist } from '../store/state'

export type IProps = RouteComponentProps<{}>

const HomeContainer: FC<IProps> = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: actions.SET_ARTIST, value: artist })        
    }, [])

    return <Home />
}

export default HomeContainer
