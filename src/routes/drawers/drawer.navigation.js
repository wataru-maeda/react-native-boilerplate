import { createDrawerNavigator } from 'react-navigation-drawer'
import Home from '../../scenes/home'

// tab navigators
import tabNavigator from '../tabs/tabs.navigation'

const drawerNavigator = createDrawerNavigator({
  TabNavigator: { screen: tabNavigator },
}, {
  contentComponent: Home,
}
)

export default drawerNavigator
