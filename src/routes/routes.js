import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { createAppContainer } from 'react-navigation'
import { Text } from 'react-native'
import Connector from 'utils/connector'

// navigation
import drawerNavigator from './navigator/drawer'
const Main = createAppContainer(drawerNavigator)

const Routes = ({ actions, checked, loggedIn }) => {
  useEffect(() => {
    actions.authenticate()
  }, [])

  // TODO: switch router by loggedIn state
  console.log('[##] loggedIn', loggedIn)

  // rendering
  if (!checked) return <Text>Loading...</Text>
  return <Main />
}

Routes.propTypes = {
  actions: PropTypes.shape({}),
  checked: PropTypes.bool,
  loggedIn: PropTypes.bool,
}

Routes.defaultProps = {
  actions: {},
  checked: false,
  loggedIn: false,
}

export default props => (
  <Connector>
    {
      ({ actions, state: { app } }) => (
        <Routes
          actions={actions.app}
          {...app}
          {...props}
        />
      )
    }
  </Connector>
)