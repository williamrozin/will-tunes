import { DeepPartial } from 'redux'
import actions from '../action-types'
import { TAlbum, albums } from '../store/state'

interface IAction {
    type: string
    value: TAlbum[]
}

type PartialState = DeepPartial<TAlbum[]>

export default function albumsReducer(state: PartialState = albums, action: IAction) {
    switch (action.type) {
        case actions.SET_ALBUMS:
            return action.value
        default:
            return state
    }
}
