import {
  Pressable,
  Text,
  ActivityIndicator,
  GestureResponderEvent,
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
  TextStyle,
} from 'react-native';
import Image from '../Image';
import { colors } from '@theme';

export interface ButtonProps
  extends Omit<
    Pressable['props'], // Use Pressable['props'] instead of TouchableOpacityProps
    | 'title'
    | 'image'
    | 'imageStyle'
    | 'titleStyle'
    | 'onPress'
    | 'onLongPress'
    | 'isLoading'
    | 'loaderColor'
  > {
  title?: string;
  image?: ImageSourcePropType;
  imageStyle?: StyleProp<ImageStyle>;
  titleStyle?: StyleProp<TextStyle>;
  onPress?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  isLoading?: boolean;
  loaderColor?: string;
}

function Button({
  title,
  titleStyle,
  image,
  style,
  disabled,
  isLoading,
  loaderColor = colors.white,
  imageStyle,
  children,
  ...others
}: ButtonProps) {
  const opacityStyle = { opacity: disabled ? 0.6 : 1 };
  return (
    <Pressable style={[opacityStyle, style]} disabled={disabled || isLoading} {...others}>
      {children}
      {isLoading && <ActivityIndicator size="small" color={loaderColor} />}
      {!isLoading && image && <Image source={image} style={imageStyle} />}
      {!isLoading && title && <Text style={titleStyle}>{title}</Text>}
    </Pressable>
  );
}

export default Button;
