import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import Button from '@components/Button';
import { DetailsStackProps } from '@navigator/stack/Stack.typDefs';
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
    backgroundColor: colors.pink,
  },
});

export default function Details({ navigation, route }: DetailsStackProps) {
  const { from } = route.params;
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>{`Details (from ${from})`}</Text>
      <Button
        title="Go back to Home"
        titleStyle={styles.buttonTitle}
        style={styles.button}
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}
