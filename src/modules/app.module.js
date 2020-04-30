// ------------------------------------
// Constants
// ------------------------------------

const SAVE_ME = 'SAVE_ME'
const LOGGED_IN = 'LOGGED_IN'

const initialState = {
  checked: false,
  loggedIn: false,
  me: {},
}

// ------------------------------------
// Actions
// ------------------------------------

// TODO: check the user's login state
export const authenticate = () => (dispatch) => dispatch({
  type: LOGGED_IN,
  loggedIn: true,
  checked: true,
})

export const saveMe = (me) => (dispatch) => dispatch({
  type: SAVE_ME,
  me,
})

export const actions = {
  authenticate,
  saveMe,
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [LOGGED_IN]: (state, { loggedIn, checked }) => ({
    ...state,
    loggedIn,
    checked,
  }),
  [SAVE_ME]: (state, { me }) => ({
    ...state,
    me,
  }),
}

// ------------------------------------
// Reducer
// ------------------------------------

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
