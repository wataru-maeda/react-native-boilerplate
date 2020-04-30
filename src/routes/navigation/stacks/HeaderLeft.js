import React from 'react'
import PropTypes from 'prop-types'
import { DrawerActions } from 'react-navigation-drawer'
import { StyleSheet } from 'react-native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'

const styles = StyleSheet.create({
  button: {
    paddingLeft: 15,
  },
})

const HeaderLeft = ({ navigation }) => (
  <FontIcon.Button
    name="bars"
    color="white"
    backgroundColor="transparent"
    onPress={() => {
      navigation.dispatch(DrawerActions.openDrawer())
    }}
    style={styles.button}
  />
)

HeaderLeft.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }),
}

HeaderLeft.defaultProps = {
  navigation: { dispatch: () => null },
}

export default HeaderLeft
