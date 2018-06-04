import { imageAssets } from '../../assets/images';
import { fontAssets } from '../../assets/fonts';

export const loadAssets = async () => {
  await Promise.all([...imageAssets, ...fontAssets]);
};
