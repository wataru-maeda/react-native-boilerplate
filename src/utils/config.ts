export type Config = {
  ENV: string;
  API_URL: string;
  API_KEY: string;
  // TODO: add new env variables ...
};

/**
 * export env variables
 * check all env variables in .env.production, .env.development, .env.test
 */
export default {
  ENV: process.env.EXPO_PUBLIC_ENV,
  API_URL: process.env.EXPO_PUBLIC_API_URL,
  API_KEY: process.env.EXPO_PUBLIC_API_KEY,
};
