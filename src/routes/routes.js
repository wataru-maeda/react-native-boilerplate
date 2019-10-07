import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import drawerNavigator from './navigator/drawer'
import Connector from '../utils/connector'

class Routes extends Component {
  componentWillMount() {
    // authentication
    const { actions } = this.props
    actions.authenticate()
  }

  render() {
    const { checked, loggedIn } = this.props
    if (!checked) return <Text>Loading...</Text>

    // TODO: switch router by loggedIn state
    console.log('[##] loggedIn', loggedIn)

    const Router = createAppContainer(drawerNavigator)
    return <Router />
  }
}

const ConnectedRoutes = props => (
  <Connector>
    {
      ({ actions, state: { app: { loggedIn, checked } } }) => (
        <Routes
          checked={checked}
          loggedIn={loggedIn}
          actions={actions.app}
          {...props}
        />
      )
    }
  </Connector>
)

Routes.propTypes = {
  checked: PropTypes.bool,
  loggedIn: PropTypes.bool,
  actions: PropTypes.object,
}

Routes.defaultProps = {
  checked: false,
  loggedIn: false,
  actions: {},
}

export default ConnectedRoutes

