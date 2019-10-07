import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { DrawerActions } from 'react-navigation-drawer'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../../styles'

const styles = {
  root: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 40,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export class DrawerMenu extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.root}>
        <View style={styles.head}>
          <FontIcon.Button
            name="times"
            size={20}
            color={colors.gray}
            backgroundColor="white"
            onPress={() => {
              navigation.dispatch(DrawerActions.closeDrawer())
            }}
          />
        </View>
        <View style={styles.main}>
          <Text>Drawer Menu</Text>
        </View>
      </View>
    )
  }
}

DrawerMenu.propTypes = {}
DrawerMenu.defaultProps = {}

export default DrawerMenu
