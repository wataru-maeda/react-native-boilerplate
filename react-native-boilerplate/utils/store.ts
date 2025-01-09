import { configureStore } from '@reduxjs/toolkit';
import app from '@/modules/app/app.slice';
import config from '@/utils/config';
import { Env } from '@/types/env'
import logger from 'redux-logger'

const store = configureStore({
  reducer: {
    app,
    // add more store ...
  },
  middleware: getDefaultMiddleware => config.ENV === Env.dev ? getDefaultMiddleware() : getDefaultMiddleware().concat(logger),
  devTools: config.ENV === Env.dev,
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
