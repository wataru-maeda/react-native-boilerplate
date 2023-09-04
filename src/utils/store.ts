import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import app from '@modules/app.module';
import config from '@utils/config';

const store = configureStore({
  reducer: {
    app,
    // add more store ...
  },
  middleware: getDefaultMiddleware =>
    config.env === 'dev' ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware(),
  devTools: config.env === 'dev',
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
