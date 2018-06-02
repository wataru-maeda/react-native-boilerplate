import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class SideMenu extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Side Menu</Text>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center', 
        alignItems: 'center',
    }
}