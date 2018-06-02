import { Asset, Font } from 'expo';

// MARK: - Images

export const images = {
  menu: require('../assets/icons/menu.png'),
}

var imageAssets = []
Object.keys(images).forEach(key => imageAssets.push(images[key]))
export const cachedImages = imageAssets.map((image) => Asset.fromModule(image).downloadAsync());

// MARK: - Fonts

const fonts = [
    {
        Panton: require('../assets/fonts/Panton-BlackCaps.otf'),
    },
    {
        PantonItalic: require('../assets/fonts/Panton-BlackitalicCaps.otf'),
    },
    {
        PantonLight: require('../assets/fonts/Panton-LightCaps.otf'),
    },
    {
        PantonLightItaic: require('../assets/fonts/Panton-LightitalicCaps.otf'),
    },
]

export const cachedFonts = fonts.map(font => Font.loadAsync(font));
  