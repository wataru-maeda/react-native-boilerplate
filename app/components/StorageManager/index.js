import { AsyncStorage } from 'react-native' 

export const saveFeeds = async (feeds, key) => {
    try {
        let jsonFeeds = JSON.stringify(feeds)
        const result = await AsyncStorage.setItem(key, jsonFeeds)
        result === null ? 
            console.log('Save feeds success!') : 
            console.log('Save feeds failed!', result)
    } catch(error) {
        console.log('save feeds failed!', error)
    }
}

export const getFeeds = (key) => {
    try {
        const result = AsyncStorage.getItem(key)
        if (result !== nul) {
            console.log('get storage feeds success!', result)
            return JSON.parse(result)
        }
    } catch(error) {
        console.log('get storage feeds failed', error)
    }
}