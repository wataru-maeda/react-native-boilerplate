import React from 'react'
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation'
import { Image } from 'react-native'
import Home from './screens/home'
import Profile from './screens/profile'
import SideMenu from './screens/sideMenu'

// MARK: - StackNavigator

const homeNavigator = createStackNavigator({
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

const profileNavigator = createStackNavigator({
    Profile: { 
        screen: Profile,
        navigationOptions: ({ navigation }) => ({
            title: `React Native Boilerplate`,
            headerTintColor: "white",
            headerStyle: { backgroundColor: '#34495e', },
            headerTitleStyle: { fontSize: 18, },
          }),
    },
})

// MARK: - TabNavigator

const tabNavigator = createBottomTabNavigator({
    HomeTab: { 
        screen: homeNavigator,
        navigationOptions: {
            title: 'Home',
            tabBarIcon: <Image/>,
            },
        },
    ProfileTab: { 
        screen: profileNavigator,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: <Image/>,
            },
        },
})

// MARK: - DrawerNavigator

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