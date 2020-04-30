import React from 'react'
import { StyleSheet } from 'react-native'
import Svg from 'components/Svg'

const styles = StyleSheet.create({
  logo: {
    width: 32,
    height: 32,
  },
})

const HeaderTitle = () => <Svg name="logo" style={styles.logo} />

HeaderTitle.propTypes = {}
HeaderTitle.defaultProps = {}

export default HeaderTitle
