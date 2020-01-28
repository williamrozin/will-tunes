import { all } from 'redux-saga/effects'
import artistActions from './artist'

export default function* root() {
    yield all([
        artistActions()
    ])
}
