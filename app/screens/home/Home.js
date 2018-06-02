import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle={'light-content'}/>
                <Text>Hello React-Native-Boilerplate!</Text>
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