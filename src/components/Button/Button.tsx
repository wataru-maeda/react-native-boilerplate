import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  TouchableOpacityProps,
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
    TouchableOpacityProps,
    | 'title'
    | 'image'
    | 'imageStyle'
    | 'titleStyle'
    | 'onPress'
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
  activeOpacity,
  disabled,
  isLoading,
  loaderColor = colors.white,
  imageStyle,
  children,
  ...others
}: ButtonProps) {
  const opacityStyle = { opacity: disabled ? 0.6 : 1 };
  return (
    <TouchableOpacity
      style={[opacityStyle, style]}
      activeOpacity={activeOpacity ?? 0.2}
      disabled={disabled ?? isLoading}
      {...others}>
      {children && children}
      {isLoading && <ActivityIndicator size="small" color={loaderColor} />}
      {!isLoading && image && <Image source={image} style={imageStyle} />}
      {!isLoading && title && <Text style={titleStyle}>{title}</Text>}
    </TouchableOpacity>
  );
}

export default Button;
