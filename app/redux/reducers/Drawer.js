import * as types from '../types'

const initialState = {
  show: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.DRAWER_TOGGLE_STATUS:
      return {
        ...state,
        status: types.DRAWER_TOGGLE_STATUS,
        show: action.payload
      }
    default:
      return state
  }
}
