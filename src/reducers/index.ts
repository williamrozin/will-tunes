import { combineReducers } from 'redux'
import artist from './artist'
import albums from './albums'
import search from './search'
import home from './home'
import featured from './featured'

export default combineReducers({
    artist,
    albums,
    search,
    home,
    featured
})
