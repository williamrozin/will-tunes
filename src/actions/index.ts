import { all } from 'redux-saga/effects'
import artistActions from './artist'
import searchtActions from './search'
import featuredActions from './featured'

export default function* root() {
    yield all([
        artistActions(),
        searchtActions(),
        featuredActions()
    ])
}
