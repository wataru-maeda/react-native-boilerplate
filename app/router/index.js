import React from 'react'
import { Image } from 'react-native'
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation'
import Home from '../screens/home'
import SideMenu from '../screens/sideMenu'

const stackNavigator = createStackNavigator({
    Home: { 
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            title: `React Native Boilerplate`,
            headerTintColor: "white",
            headerStyle: { backgroundColor: '#34495e', },
            headerTitleStyle: { fontSize: 18, },
          }),
    },
})

const tabNavigator = createBottomTabNavigator({
    Tab: { 
        screen: stackNavigator,
        navigationOptions: {
            title: 'Home',
            tabBarIcon: <Image/>,
            },
        },
    Tab2: { 
        screen: stackNavigator,
        navigationOptions: {
            title: 'Home2',
            tabBarIcon: <Image/>,
            },
        },
})

export default createDrawerNavigator({
    TabNavigator: { screen: tabNavigator },
    SideMenu: { screen: SideMenu },
  },
  {
    contentComponent: SideMenu,
    drawerOpenRoute: 'drawerOpen',
    drawerCloseRoute: 'drawerClose',
    drawerToggleRoute: 'drawerToggle',
  });