import React from 'react'
import { Provider } from 'react-redux'
import Router from './router'
import store from './redux/store'

export default () => (
    <Provider store={store}>
        <Router />
    </ Provider>
)