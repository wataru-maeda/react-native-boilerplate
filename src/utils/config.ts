export type Config = {
  ENV: string;
  API_URL: string;
  API_KEY: string;
  // TODO: add new env variables ...
};

/**
 * export env variables
 * to add new env variables, add in app.config.ts first
 */
export default {
  ENV: process.env.EXPO_PUBLIC_ENV,
  API_URL: process.env.EXPO_PUBLIC_API_URL,
  API_KEY: process.env.EXPO_PUBLIC_API_KEY,
};
