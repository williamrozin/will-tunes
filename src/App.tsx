import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import React, { FC } from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer'
import ArtistContainer from './containers/ArtistContainer'
import NotFoundContainer from './containers/NotFoundContainer'
import { store } from './store'

const theme = {
    palette: {
        primary: {
            main: '#088BCD'
        }
    }
}

export const App: FC = () =>
    <Provider store={ store }>
        <ThemeProvider theme={ createMuiTheme(theme) }>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={ HomeContainer } />
                    <Route exact path='/artist/:id' component={ ArtistContainer } />
                    <Route component={ NotFoundContainer } />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    </Provider>

ReactDom.render(<App />, document.getElementById('root'))
