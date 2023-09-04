import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => {
  // switch app configuration based on environment
  if (process.env.APP_ENV === 'dev') {
    return {
      ...config,
      slug: `DEV - ${config.slug}`,
      name: `DEV - ${config.name}`,
      ios: {
        ...config.ios,
        bundleIdentifier: 'com.yourcompany.yourappname-dev',
        buildNumber: '1.0.0',
      },
      android: {
        ...config.android,
        package: 'com.yourcompany.yourappname.dev',
        versionCode: 1,
      },
      extra: {
        ...config.extra,
        eas: { projectId: 'YOUR-DEV-PROJECT-ID' },
        env: process.env.APP_ENV,
        // add more env variables...
      },
    };
  }

  return {
    ...config,
    slug: config.slug ?? '',
    name: config.name ?? '',
    updates: {
      url: 'https://u.expo.dev/18adc0d0-eb1d-11e9-8009-d524ed5cc4a7',
    },
    ios: {
      ...config.ios,
      bundleIdentifier: 'com.yourcompany.yourappname',
      buildNumber: '1.0.0',
    },
    android: {
      ...config.android,
      package: 'com.yourcompany.yourappname',
      versionCode: 1,
    },
    extra: {
      ...config.extra,
      eas: {
        projectId: '18adc0d0-eb1d-11e9-8009-d524ed5cc4a7'
      },
      env: 'prod',
    },
  };
};
