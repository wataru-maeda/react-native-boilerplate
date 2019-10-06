import React from 'react';
import { Provider } from 'react-redux'
import store from './utils/store'

import Router from './routes/routes'

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
