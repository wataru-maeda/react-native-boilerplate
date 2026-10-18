import Constants from 'expo-constants';
import { Env } from '@/types';

const config = {
  env: Constants.expoConfig?.extra?.env as Env,
  apiUrl: Constants.expoConfig?.extra?.apiUrl as string,
} as const satisfies {
  env: Env;
  apiUrl: string;
};

export default config;
