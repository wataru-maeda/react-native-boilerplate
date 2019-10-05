import React from 'react'
import { View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
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
  Home: {
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
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        var source;
        switch (navigation.state.routeName) {
          case 'HomeTab':
            source = images.home;
            break;
          case 'ProfileTab':
            source = images.user;
            break;
          default:
            break;
        }
        return <View source={source} focused={focused} />;
      },
      initialRouteName: 'Home',
      tabBarOptions: {
        activeTintColor: colors.darkPurple,
        inactiveTintColor: 'gray',
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
