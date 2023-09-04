import Constants from 'expo-constants';

interface AppConfig {
  env: string;
  // add more
}

/**
 * export env variables
 * to add new env variables, add in app.config.ts first
 */
const config: AppConfig = {
  env: Constants.expoConfig?.extra?.env || 'prod',
  // add more...
} as AppConfig;

export default config;
