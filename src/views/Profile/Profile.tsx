import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import GradientButton from '@components/GradientButton';
import { StackProps } from '@navigator/stack';
import { colors } from '@theme';

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
  buttonTitle: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    backgroundColor: colors.lightPurple,
  },
});

export default function Profile({ navigation }: StackProps) {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Profile</Text>
      <GradientButton
        title="Go to Details"
        titleStyle={styles.buttonTitle}
        style={styles.button}
        gradientBackgroundProps={{
          colors: [colors.purple, colors.pink],
          start: { x: 0, y: 1 },
          end: { x: 0.8, y: 0 },
        }}
        onPress={() => {
          navigation.navigate('DetailsStack', { from: 'Home' });
        }}
      />
    </View>
  );
}
