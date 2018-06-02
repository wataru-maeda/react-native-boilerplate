import * as types from '../types'
import * as keys from '../../components/StorageManager/types'
import { getTechFeeds, getAppleFeeds } from '../../utils/api'
import { saveFeeds } from '../../components/StorageManager'

export const updateTechFeeds = () => {
    return dispatch => {
        getTechFeeds().then(response => {
            dispatch({type: types.UPDATE_FEEDS, payload: response})
            saveFeeds(response, keys.TECH_FEED_STORE)
         })
    }
}

export const updateAppleFeeds = () => {
    return dispatch => {
        getAppleFeeds().then(response => {
            dispatch({type: types.UPDATE_FEEDS, payload: response})
            saveFeeds(response, keys.APPLE_FEED_STORE)
         })
    }
}