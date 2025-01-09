
export const Env = {
  dev: 'development',
  stg: 'staging',
  prod: 'production',
} as const;

export type Env = keyof typeof Env;
