import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import Router from './router';
import store from './redux/store';
import * as assets from '../assets';

export default class App extends Component {
  state = {
    load: false,
  };

  componentWillMount() {
    loadAssets().then(() => this.setState({ load: true }));
  }

  render() {
    if (!this.state.load) return <View />;
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

const loadAssets = async () => {
  await Promise.all([...assets.imageAssets, ...assets.fontAssets]);
};
