import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import Button from '../../components/Button'
import { colors } from '../../styles'

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

class Profile extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Profile</Text>
        <Button
          title="Go to Details"
          color="white"
          backgroundColor={colors.lightPurple}
          onPress={() => {
            navigation.navigate('Details', { from: 'Profile' })
          }}
        />
      </View>
    )
  }
}

Profile.propTypes = {
  navigation: PropTypes.object,
}

Profile.defaultProps = {
  navigation: {},
}

export default Profile
