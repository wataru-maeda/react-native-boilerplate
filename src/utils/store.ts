import { configureStore } from '@reduxjs/toolkit';
import app from '@/slices/app.slice';
import config from '@/utils/config';
import { Env } from '@/types/env';

const store = configureStore({
  reducer: {
    app,
    // add more store ...
  },
  devTools: config.env === Env.dev,
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
