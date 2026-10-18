import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => {
  const expoProjectId = process.env.EXPO_PROJECT_ID ?? '18adc0d0-eb1d-11e9-8009-d524ed5cc4a7';
  const expoConfig: ExpoConfig = {
    ...config,
    slug: process.env.EXPO_SLUG ?? 'react-native-boilerplate',
    name: process.env.EXPO_NAME ?? 'React Native Boilerplate',
    ios: {
      ...config.ios,
      bundleIdentifier:
        process.env.EXPO_IOS_BUNDLE_IDENTIFIER ?? 'com.watarumaeda.react-native-boilerplate',
      infoPlist: {
        ...config.ios?.infoPlist,
        // opt out of iOS 26 Liquid Glass so header buttons keep a plain background
        UIDesignRequiresCompatibility: true,
      },
    },
    android: {
      ...config.android,
      package: process.env.EXPO_ANDROID_PACKAGE ?? 'com.watarumaeda.react_native_boilerplate',
    },
    web: {
      ...config.web,
      bundler: 'metro',
      output: 'static',
      favicon: './src/assets/images/logo-sm.png',
    },
    updates: {
      url: `https://u.expo.dev/${expoProjectId}`,
    },
    extra: {
      ...config.extra,
      eas: { projectId: expoProjectId },
      env: process.env.ENV ?? 'development',
      apiUrl: process.env.API_URL ?? 'https://example.com',
      // add more env variables here...
    },
    plugins: [
      'expo-router',
      'expo-asset',
      [
        'expo-splash-screen',
        {
          backgroundColor: '#ffffff',
          dark: {
            backgroundColor: '#101212',
          },
          image: './src/assets/images/logo-lg.png',
          imageWidth: 200,
          resizeMode: 'contain',
        },
      ],
      [
        'expo-font',
        {
          fonts: [
            './src/assets/fonts/OpenSans-Bold.ttf',
            './src/assets/fonts/OpenSans-BoldItalic.ttf',
            './src/assets/fonts/OpenSans-Italic.ttf',
            './src/assets/fonts/OpenSans-Regular.ttf',
            './src/assets/fonts/OpenSans-Semibold.ttf',
            './src/assets/fonts/OpenSans-SemiboldItalic.ttf',
          ],
        },
      ],
    ],
  };
  // console.log('[##] expo config', expoConfig);
  return expoConfig;
};
