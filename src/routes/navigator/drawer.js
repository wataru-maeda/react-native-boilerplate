import { createDrawerNavigator } from 'react-navigation-drawer'
import DrawerMenu from '../subviews/DrawerMenu'

// tab navigators
import tabNavigator from './tabs'

const drawerNavigator = createDrawerNavigator(
  {
    TabNavigator: { screen: tabNavigator },
  }, {
    contentComponent: DrawerMenu,
  }
)

export default drawerNavigator
