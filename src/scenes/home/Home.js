import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Open up Home.js to start working on your Home!</Text>
    </View>
  )
}
