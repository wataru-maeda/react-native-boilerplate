import Constants from 'expo-constants';

export type Config = {
  ENV: string;
  API_URL: string;
};

/**
 * export env variables
 * check all env variables in .env.production, .env.development, .env.test
 */
export default {
  ENV: Constants.expoConfig?.extra?.ENV,
  API_URL: Constants.expoConfig?.extra?.API_URL,
} as Config;
