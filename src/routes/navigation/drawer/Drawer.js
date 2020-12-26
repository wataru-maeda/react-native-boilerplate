import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import DrawerMenu from './DrawerMenu'
import TabNavigator from '../tabs'

const Drawer = createDrawerNavigator()

const DrawerMenuContainer = (props) => {
  const { state, ...rest } = props
  const newState = { ...state }
  newState.routes = newState.routes.filter((item) => item.name !== 'Home')
  return (
    <DrawerContentScrollView {...props}>
      <DrawerMenu {...props} />
      <DrawerItemList state={newState} {...rest} />
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home" drawerContent={DrawerMenuContainer}>
    <Drawer.Screen name="Home" component={TabNavigator} />
  </Drawer.Navigator>
)

export default DrawerNavigator
