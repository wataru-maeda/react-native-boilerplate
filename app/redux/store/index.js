import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reduces from '../reducers'
const middleware = applyMiddleware(promiseMiddleware(), thunk);

export default function configureStore() {
    return createStore(reduces, middleware);
}