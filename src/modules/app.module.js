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

export const authenticate = () => dispatch => {
  auth.onAuthStateChanged(me => dispatch({
    type: LOGGED_IN,
    loggedIn: (me && me.emailVerified && me.displayName) || false,
    me: me || {},
    checked: true,
  }))
}

const saveMe = me => dispatch => dispatch({
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
  [LOGGED_IN]: (state, { loggedIn, me, checked }) => ({
    ...state,
    loggedIn,
    me,
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
