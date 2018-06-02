import React from 'react'
import { Image } from 'react-native'

export default ({ source, focused }) => <Image source={source} style={[styles.icon, { tintColor : focused ? 'orange' : 'gray' }]}/>

const styles = {
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    }
}