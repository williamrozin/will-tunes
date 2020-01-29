import { applyMiddleware, createStore } from 'redux'
import saga from 'redux-saga'
import reducers from '../reducers'
import watchers from '../actions'

const sagaMiddleware = saga()

export const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchers)