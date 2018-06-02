import { images, imageAssets } from './images'
import { fontAssets } from './fonts'
export { images }

export const loadAssets = async () => {
    await Promise.all([...imageAssets, ...fontAssets])
}