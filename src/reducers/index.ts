import { combineReducers } from 'redux'
import artist from './artist'
import albums from './albums'
import search from './search'
import home from './home'

export default combineReducers({
    artist,
    albums,
    search,
    home
})
