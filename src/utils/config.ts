import Constants from 'expo-constants';

export type AppEnv = 'dev' | 'prod';

export type Config = {
  env: AppEnv;
  apiUrl: string;
  // TODO: add new env variables ...
};

export const defaultConfig: Config = {
  env: 'prod',
  apiUrl: 'https://api.example.com',
  // TODO: add more default env variables...
};

/**
 * export env variables
 * to add new env variables, add in app.config.ts first
 */
export default (Constants.expoConfig?.extra?.config as Config) ?? defaultConfig;
