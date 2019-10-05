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
      <Text>Profile</Text>
    </View>
  )
}
