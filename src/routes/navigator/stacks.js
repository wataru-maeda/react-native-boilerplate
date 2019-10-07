import React from 'react'
import { Image } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { DrawerActions } from 'react-navigation-drawer'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import Home from '../../scenes/home'
import Profile from '../../scenes/profile'
import Details from '../../scenes/details'
import { colors, images } from '../../styles'

const renderDrawerButton = (navigation) => (
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

const renderLogo = () => (
  <Image
    source={images.logo_sm}
    style={{ width: 32, height: 32 }}
  />
)

export const homeNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: colors.darkPurple },
      headerTitleStyle: { fontSize: 18 },
      headerLeft: renderDrawerButton(navigation),
      headerTitle: renderLogo()
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: () => ({
      title: 'Details',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: colors.darkPurple },
      headerTitleStyle: { fontSize: 18 },
    }),
  },
})

export const profileNavigator = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: colors.darkPurple },
      headerTitleStyle: { fontSize: 18 },
      headerLeft: renderDrawerButton(navigation),
      headerTitle: renderLogo()
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: () => ({
      title: 'Details',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: colors.darkPurple },
      headerTitleStyle: { fontSize: 18 },
    }),
  },
})
