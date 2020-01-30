import React, { FC } from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer'
import ArtistContainer from './containers/ArtistContainer'
import NotFoundContainer from './containers/NotFoundContainer'
import { store } from './store'
import './assets/styles.scss'

export const App: FC = () =>
    <Provider store={ store }>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={ HomeContainer } />
                <Route exact path='/artist/:id' component={ ArtistContainer } />
                <Route component={ NotFoundContainer } />
            </Switch>
        </BrowserRouter>
    </Provider>

ReactDom.render(<App />, document.getElementById('root'))
