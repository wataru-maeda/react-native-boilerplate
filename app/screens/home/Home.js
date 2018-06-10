import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <Text style={styles.text}>Welcome Home</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontFamily: 'Baskerville',
  },
};
