import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import reduces from './reducers'
import thunk from 'redux-thunk'
const middleware = applyMiddleware(promiseMiddleware(), thunk);

export default createStore(reduces, middleware);