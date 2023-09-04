import React from 'react';
import { StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { images } from '@theme';

const styles = StyleSheet.create({
  logo: {
    width: 32,
    height: 32,
  },
});

export function StackHeaderTitle() {
  return <Image source={images.logo} style={styles.logo} />;
}
