import React from 'react'
import { View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import Home from './scenes/home'
import Profile from './scenes/profile'
import { colors } from './styles/theme'

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

const tabNavigator = createBottomTabNavigator(
  {
    HomeTab: {
      screen: homeNavigator,
      navigationOptions: { title: 'Home' },
    },
    ProfileTab: {
      screen: profileNavigator,
      navigationOptions: { title: 'Profile' },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        switch (routeName) {
          case 'HomeTab':
            return (
              <FontIcon
                name="home"
                color={focused ? colors.lightPurple : colors.gray}
                size={20}
                solid
              />
            )
          case 'ProfileTab':
            return (
              <FontIcon
                name="home"
                color={focused ? colors.lightPurple : colors.gray}
                size={20}
                solid
              />
            )
          default:
            return <View />
        }
      },
      initialRouteName: 'Home',
      tabBarOptions: {
        activeTintColor: colors.lightPurple,
        inactiveTintColor: colors.gray,
        style: {
          // backgroundColor: 'white',
          // borderTopColor: 'gray',
          // borderTopWidth: 1,
          // paddingBottom: 5,
          // paddingTop: 5,
        },
      },
      swipeEnabled: false,
    }),
  }
)

const drawerNavigator = createDrawerNavigator({
    TabNavigator: { screen: tabNavigator },
  }, {
    contentComponent: Home,
  }
)

export default createAppContainer(drawerNavigator)
