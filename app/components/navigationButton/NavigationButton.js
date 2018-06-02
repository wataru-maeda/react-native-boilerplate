import React from 'react'
import { Image, TouchableOpacity } from 'react-native'

export default onPress => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image source={} style={styles.icon}/>
        </TouchableOpacity>
    )
}

const styles = {
    icon: {
        width: 30,
        height: 30,
        tintColor: 'white',
        resizeMode: 'contain',
    }
}