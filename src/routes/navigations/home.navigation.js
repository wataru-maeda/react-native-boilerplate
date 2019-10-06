import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../../scenes/home'
import { colors } from '../../styles/theme'

const homeNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: props => ({
      title: `Boilerplate`,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: colors.darkPurple
      },
      headerTitleStyle: {
        fontSize: 18,
      },
      headerLeft: <View {...props} />,
    }),
  },
})

export default homeNavigator
