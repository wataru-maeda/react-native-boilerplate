import React from 'react'
import { Image } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import Home from '../screens/home'

const navigator = StackNavigator({
    Home: { 
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            title: `News Feeds`,
            headerTintColor: "#fff",
            headerStyle: { backgroundColor: '#34495e', },
            headerTitleStyle: { fontSize: 18, },
          }),
    },
})

export default TabNavigator({
    Tab: { 
        screen:  navigator,
        navigationOptions: {
            title: 'Tech',
            tabBarIcon: <Image/>,
            },
        },
})