import * as types from '../types'

const initialState = {
    feeds: [],
}

export default (state = initialState, action) => {
    switch(action.type) {
        case types.UPDATE_FEEDS:
        return {
            ...state,
            feeds: [ ...action.payload ]
        }
        default:
            return state
    }
}