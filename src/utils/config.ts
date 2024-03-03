export type Config = {
  ENV: string;
  API_URL: string;
};

/**
 * export env variables
 * check all env variables in .env.production, .env.development, .env.test
 */
export default {
  ENV: process.env.EXPO_PUBLIC_ENV,
  API_URL: process.env.EXPO_PUBLIC_API_URL,
};
