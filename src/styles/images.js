import { Asset } from 'expo-asset'

export const images = {
  icon: require('../../assets/images/icon.png'),
  splash: require('../../assets/images/icon.png'),
}

// image preloading
var imgs = []
Object.keys(images).forEach(key => imgs.push(images[key]))
export const imageAssets = imgs.map(img => Asset.fromModule(img).downloadAsync())
