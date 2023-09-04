import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import Button from '@components/Button';
import { HomeStackProps, StackNameList } from '@navigator/stack/Stack.typDefs';
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

export default function Home({ navigation }: HomeStackProps) {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Home</Text>
      <Button
        title="Go to Details"
        titleStyle={styles.buttonTitle}
        style={styles.button}
        onPress={() => {
          navigation.navigate(StackNameList.details, { from: 'Home' });
        }}
      />
    </View>
  );
}
