import { createDrawerNavigator } from 'react-navigation-drawer'
import DrawerMenu from './DrawerMenu'

// tab navigators
import tabNavigator from '../tabs/tabs.navigation'

const drawerNavigator = createDrawerNavigator(
  {
    TabNavigator: { screen: tabNavigator },
  }, {
    contentComponent: DrawerMenu,
  }
)

export default drawerNavigator
