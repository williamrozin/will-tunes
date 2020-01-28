import { DeepPartial } from 'redux'
import actions from '../action-types'
import { TArtist, artist } from '../store/state'

interface IAction {
    type: string
    value: TArtist
}

type PartialState = DeepPartial<TArtist>

export default function artistReducer(state: PartialState = artist, action: IAction) {
    switch (action.type) {
        case actions.SET_ARTIST:
            return action.value
        default:
            return state
    }
}
