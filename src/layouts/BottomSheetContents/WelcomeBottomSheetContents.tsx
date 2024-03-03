import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import GradientButton from '@components/GradientButton';
import { colors, fonts } from '@theme';
import { windowWidth } from '@utils/deviceInfo';
import config from '@utils/config';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.openSan.bold,
    color: colors.black,
    marginTop: 16,
    marginBottom: 32,
    width: '100%',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: fonts.openSan.regular,
    width: '100%',
  },
  buttonTitle: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    height: 44,
    width: windowWidth / 2,
    backgroundColor: colors.pink,
    marginBottom: 40,
  },
  envContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  envTitle: {
    fontSize: 14,
    fontFamily: fonts.openSan.bold,
    color: colors.black,
  },
  envValue: {
    fontSize: 14,
    fontFamily: fonts.openSan.regular,
    color: colors.black,
  },
});

type WelcomeBottomSheetContentsProps = {
  onClose: () => void;
};

export function WelcomeBottomSheetContents({ onClose }: WelcomeBottomSheetContentsProps) {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>🎉 Congratulations! </Text>
      <Text style={[styles.subtitle, { marginBottom: 32 }]}>
        You have successfully spin up the React Native Boilerplate project in the
        <Text style={{ fontFamily: fonts.openSan.bold }}>{` ${config.ENV} `}</Text>environment 🚀
      </Text>
      <Text style={[styles.subtitle, { marginBottom: 8 }]}>Injected Environmental Variables:</Text>
      {Object.keys(config).map(key => (
        <View key={key} style={styles.envContainer}>
          <Text style={styles.envTitle}>{`✅ ${key}: `}</Text>
          <Text style={styles.envValue}>{config[key] ?? ''}</Text>
        </View>
      ))}
      <Text style={[styles.subtitle, { marginVertical: 32 }]}>
        {`Your foundational setup is now complete, paving the way for seamless development and innovation. \n\nHappy coding!`}
      </Text>
      <GradientButton
        title="OK"
        titleStyle={styles.buttonTitle}
        style={styles.button}
        gradientBackgroundProps={{
          colors: [colors.purple, colors.pink],
          start: { x: 0, y: 1 },
          end: { x: 0.8, y: 0 },
        }}
        onPress={onClose}
      />
    </View>
  );
}
