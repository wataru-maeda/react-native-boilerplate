import { Font } from 'expo';

export const fonts = [
  {
    Panton: require('./Panton-BlackCaps.otf'),
  },
  {
    PantonItalic: require('./Panton-BlackitalicCaps.otf'),
  },
  {
    PantonLight: require('./Panton-LightCaps.otf'),
  },
  {
    PantonLightItaic: require('./Panton-LightitalicCaps.otf'),
  },
];

export const fontAssets = fonts.map(font => Font.loadAsync(font));
