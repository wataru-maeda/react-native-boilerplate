import React from 'react'
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation'
import { Image, TouchableOpacity } from 'react-native'
import Home from '../screens/home'
import Profile from '../screens/profile'
import SideMenu from '../screens/sideMenu'
import { images } from '../../assets'
import Menu from './Menu'
import Tab from './Tab'

// MARK: - StackNavigator

const homeNavigator = createStackNavigator({
    Home: { 
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            title: `Boilerplate`,
            headerTintColor: "white",
            headerStyle: { backgroundColor: '#34495e', },
            headerTitleStyle: {
                fontSize: 24,
                fontFamily: 'Baskerville',
            },
            headerLeft : <Menu navigation={navigation}/>,
          }),
    },
})

const profileNavigator = createStackNavigator({
    Profile: { 
        screen: Profile,
        navigationOptions: ({ navigation }) => ({
            title: `Boilerplate`,
            headerTintColor: "white",
            headerStyle: { backgroundColor: '#34495e', },
            headerTitleStyle: {
                fontSize: 24,
                fontFamily: 'Baskerville',
            },
          }),
    },
})

// MARK: - TabNavigator

const tabNavigator = createBottomTabNavigator({
    HomeTab: { 
        screen: homeNavigator,
        navigationOptions: {
            title: 'Home',
            tabBarIcon: <Tab source={images.home} />,
        },
    },
    ProfileTab: { 
        screen: profileNavigator,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: <Tab source={images.user} />,
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