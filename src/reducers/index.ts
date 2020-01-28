import { combineReducers } from 'redux'
import artist from './artist'
import albums from './albums'

export default combineReducers({
    artist,
    albums
})
