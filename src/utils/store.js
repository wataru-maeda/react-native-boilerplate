import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import app from 'modules/app.module'

const analytics = () => (next) => (action) => {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: action.type,
    payload: action.payload,
  })

  return next(action)
}

// Redux store config
const configureStore = (initialState = {}) => {
  const reducers = combineReducers({
    app,
  })

  // Middleware and store enhancers
  const middlewares = [
    thunk,
    process.env.NODE_ENV !== 'production' && logger,
    analytics,
  ].filter(Boolean)
  const enhancer = compose(applyMiddleware(...middlewares))
  const store = createStore(reducers, initialState, enhancer)

  return store
}

const store = configureStore()

export default store
