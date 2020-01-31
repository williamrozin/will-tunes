import { DeepPartial } from 'redux'
import actions from '../action-types'
import { TFeatured, featured } from '../store/state'

interface IAction {
    type: string
    featured: TFeatured[]
}

type PartialState = DeepPartial<TFeatured[]>

export default function featuredReducer(state: PartialState = featured, action: IAction) {
    switch (action.type) {
        case actions.SET_FEATURED:
            return action.featured
        default:
            return state
    }
}
