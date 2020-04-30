import { createDrawerNavigator } from 'react-navigation-drawer'
import DrawerMenu from './DrawerMenu'
import TabNavigator from '../tabs'

const DrawerNavigator = createDrawerNavigator(
  {
    TabNavigator: { screen: TabNavigator },
  },
  {
    contentComponent: DrawerMenu,
  },
)

export default DrawerNavigator
