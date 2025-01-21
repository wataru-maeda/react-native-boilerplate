import { SimpleLineIcons } from '@expo/vector-icons';
import useColorScheme from '@/hooks/useColorScheme';
import { colors } from '@/theme';

export default function NavigationHeaderLeft({ onPress }: { onPress: () => void }) {
  const { isDark } = useColorScheme();
  return (
    <SimpleLineIcons.Button
      name="menu"
      size={24}
      color={isDark ? colors.gray : colors.white}
      backgroundColor={colors.transparent}
      onPress={onPress}
    />
  );
}
