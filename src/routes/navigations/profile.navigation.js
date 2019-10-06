import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import Profile from '../../scenes/profile'
import { colors } from '../../styles/theme'

const profileNavigator = createStackNavigator({
  Profile: {
    screen: Profile,
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

export default profileNavigator
