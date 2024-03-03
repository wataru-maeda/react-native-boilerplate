import { ExpoConfig, ConfigContext } from 'expo/config';
import { Config, defaultConfig } from '@utils/config';

export default ({ config: expoConfig }: ConfigContext): ExpoConfig => {
  let name = '';
  let slug = '';
  let projectId = '';
  let ios = { bundleIdentifier: '', buildNumber: '' };
  let android = { package: '', versionCode: 1 };
  let config: Config = defaultConfig;

  /**
   * dev configuration
   */
  function setDevConfig() {
    name = `DEV - ${expoConfig.name}`;
    slug = 'your-expo-slug';
    projectId = 'your-expo-id';
    ios = {
      bundleIdentifier: 'com.yourcompany.yourappname-dev',
      buildNumber: '1.0.0',
    };
    android = {
      package: 'com.yourcompany.yourappname.dev',
      versionCode: 1,
    };
    config = {
      env: 'dev',
      apiUrl: 'https://api.dev.example.com',
    };
  }

  /**
   * prod configuration
   */
  function setProdConfig() {
    name = expoConfig.name ?? '';
    slug = 'your-expo-slug';
    projectId = 'your-expo-id';
    ios = {
      bundleIdentifier: 'com.yourcompany.yourappname',
      buildNumber: '1.0.0',
    };
    android = {
      package: 'com.yourcompany.yourappname',
      versionCode: 1,
    };
    config = {
      env: 'prod',
      apiUrl: 'https://api.example.com',
    };
  }

  // switch expo configuration based on environment
  switch (process.env.APP_ENV) {
    case 'dev':
      setDevConfig();
      break;
    case 'prod':
      setProdConfig();
      break;
    default:
      setDevConfig();
      break;
  }

  const envConfig: ExpoConfig = {
    ...expoConfig,
    name,
    slug,
    updates: {
      url: `https://u.expo.dev/${projectId}`,
    },
    ios: {
      ...expoConfig.ios,
      ...ios,
    },
    android: {
      ...expoConfig.android,
      ...android,
    },
    extra: {
      ...expoConfig.extra,
      eas: { projectId },
      config,
    },
  };

  // console.log('[##] your expo config', envConfig);

  return envConfig;
};
