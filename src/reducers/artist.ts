import { DeepPartial } from 'redux'
import { SET_ARTIST } from '../actions'
import { TArtist, artist } from '../store/state'
import { mergeLeft } from 'ramda'

interface IAction {
    type: string
    value: TArtist
}

type PartialState = DeepPartial<TArtist>

export default function exchangeReducer(state: PartialState = artist, action: IAction) {
    switch (action.type) {
        case SET_ARTIST:
            return mergeLeft(action.value)
        default:
            return state
    }
}
