import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => {
  let name = ''; // your app name
  let slug = ''; // your expo project slug name
  let projectId = ''; // your expo project id
  let ios = { bundleIdentifier: '', buildNumber: '' }; // your ios bundle identifier and build number
  let android = { package: '', versionCode: 1 }; // your android package name and version code

  // get the environment from the environment variables
  switch (process.env.APP_ENV) {
    case 'dev':
      name = `DEV - ${config.name}`;
      slug = `your-expo-dev-project-slug-name`;
      projectId = 'your-expo-dev-project-id';
      ios = { bundleIdentifier: 'com.yourcompany.yourappname-dev', buildNumber: '1.0.0' };
      android = { package: 'com.yourcompany.yourappname.dev', versionCode: 1 };
      break;
    case 'prod':
      name = config.name ?? '';
      slug = `your-expo-production-project-slug-name`;
      projectId = 'your-expo-production-project-id';
      ios = { bundleIdentifier: 'com.yourcompany.yourappname', buildNumber: '1.0.0' };
      android = { package: 'com.yourcompany.yourappname', versionCode: 1 };
      break;
    default:
      name = `DEV - ${config.name}`;
      slug = `your-expo-dev-project-slug-name`;
      projectId = 'your-expo-dev-project-id';
      ios = { bundleIdentifier: 'com.yourcompany.yourappname-dev', buildNumber: '1.0.0' };
      android = { package: 'com.yourcompany.yourappname.dev', versionCode: 1 };
      break;
  }

  const envConfig: ExpoConfig = {
    ...config,
    name,
    slug,
    updates: {
      url: `https://u.expo.dev/${projectId}`,
    },
    ios: {
      ...config.ios,
      ...ios,
    },
    android: {
      ...config.android,
      ...android,
    },
    extra: {
      ...config.extra,
      eas: { projectId },
      env: process.env.APP_ENV,
    },
  };

  // console.log('[##] your expo config', envConfig);

  return envConfig;
};
