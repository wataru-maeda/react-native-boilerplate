import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => {
  const envConfig: ExpoConfig = {
    ...config,
    slug: process.env.EXPO_PUBLIC_SLUG ?? '',
    name: process.env.EXPO_PUBLIC_NAME ?? '',
    ios: {
      ...config.ios,
      bundleIdentifier: process.env.EXPO_PUBLIC_IOS_BUNDLE_IDENTIFIER,
      buildNumber: '1',
    },
    android: {
      ...config.android,
      package: process.env.EXPO_PUBLIC_IOS_ANDROID_PACKAGE,
      versionCode: 1,
    },
    updates: {
      url: `https://u.expo.dev/${process.env.EXPO_PUBLIC_PROJECT_ID}`,
    },
    extra: {
      ...config.extra,
      eas: { projectId: process.env.EXPO_PUBLIC_PROJECT_ID },
      ENV: process.env.EXPO_PUBLIC_ENV,
      API_URL: process.env.EXPO_PUBLIC_API_URL,
    },
  };
  return envConfig;
};
