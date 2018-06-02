import React from 'react'
import { Provider } from 'react-redux'
import Router from './router'
import ConfigureStore from './redux/store'

const store = ConfigureStore()

export default () => (
    <Provider store={store}>
        <Router />
    </ Provider>
)