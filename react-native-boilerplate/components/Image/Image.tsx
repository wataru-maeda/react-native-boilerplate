import { Image as ExpoImage, ImageContentFit, ImageProps as ExpoImageProps } from 'expo-image';
import { StyleProp, ImageStyle, ImageSourcePropType } from 'react-native';

export interface ImageProps extends Omit<ExpoImageProps, 'source' | 'placeholder' | 'style'> {
  source: ImageSourcePropType;
  placeholder?: ImageSourcePropType;
  contentFit?: ImageContentFit;
  transition?: number;
  style?: StyleProp<ImageStyle>;
  onTouchStart?: () => void;
}

function Image({ transition, contentFit, ...others }: ImageProps) {
  return (
    <ExpoImage transition={transition ?? 0} contentFit={contentFit ?? 'contain'} {...others} />
  );
}

export default Image;
