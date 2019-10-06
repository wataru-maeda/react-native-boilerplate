import { Asset } from 'expo-asset'

export const images = {
  logo_sm: require('../../assets/images/logo-sm.png'),
  logo_lg: require('../../assets/images/logo-lg.png'),
}

// image preloading
var imgs = []
Object.keys(images).forEach(key => imgs.push(images[key]))
export const imageAssets = imgs.map(img => Asset.fromModule(img).downloadAsync())
