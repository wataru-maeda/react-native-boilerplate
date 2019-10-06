import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { DrawerActions } from 'react-navigation-drawer'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import Home from '../../scenes/home'
import { colors } from '../../styles/theme'

const homeNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: `Boilerplate`,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: colors.darkPurple
      },
      headerTitleStyle: {
        fontSize: 18,
      },
      headerLeft: (
        <FontIcon.Button
          name="bars"
          color="white"
          backgroundColor="transparent"
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer())
          }}
          style={{ paddingLeft: 15 }}
        />
      )
    }),
  },
})

export default homeNavigator
