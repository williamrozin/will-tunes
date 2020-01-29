import { all } from 'redux-saga/effects'
import artistActions from './artist'
import searchtActions from './search'

export default function* root() {
    yield all([
        artistActions(),
        searchtActions()
    ])
}
