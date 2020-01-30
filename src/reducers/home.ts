import { DeepPartial } from 'redux'
import actions from '../action-types'
import { THome, home } from '../store/state'

interface IAction {
    type: string
}

type PartialState = DeepPartial<THome>

export default function homeReducer(state: PartialState = home, action: IAction) {
    switch (action.type) {
        case actions.SET_LOADING:
            return { loading: true }
        case actions.UNSET_LOADING:
            return { loading: false }
        default:
            return state
    }
}
