import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import Router from './router'
import store from './redux/store'
import * as Assets from '../assets'

export default class App extends Component {
    state = {
        fontLoaded: false,
        imageLoaded: false,
    }
  
    componentWillMount() {
      this._loadAssetAsync();
    }
  
    async _loadAssetAsync() {
        const { cachedImages, cachedFonts } = Assets
        await Promise.all([...cachedImages, ...cachedFonts]);
        this.setState({ imageLoaded: true, fontLoaded: true });
    }
  
    render() {
      if (!this.state.imageLoaded) return <View />;
      return (
        <Provider store={store}>
            <Router />
        </ Provider>
      );
    }
  }
  