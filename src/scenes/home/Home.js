import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})

class Home extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Home</Text>
        <Button
          title="Go to Details"
          color="white"
          backgroundColor={colors.lightPurple}
          onPress={() => {
            navigation.navigate('Details', { from: 'Home' })
          }}
        />
      </View>
    )
  }
}

Home.propTypes = {
  navigation: PropTypes.object,
}

Home.defaultProps = {
  navigation: {},
}

export default Home
