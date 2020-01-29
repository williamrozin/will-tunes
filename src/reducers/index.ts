import { combineReducers } from 'redux'
import artist from './artist'
import albums from './albums'
import search from './search'

export default combineReducers({
    artist,
    albums,
    search
})
