import { SimpleLineIcons } from '@expo/vector-icons';
import { colors } from '@/theme';

export default function NavigationHeaderLeft({ onPress }: { onPress: () => void }) {
  return (
    <SimpleLineIcons.Button
      name="menu"
      size={24}
      color={colors.white}
      backgroundColor={colors.transparent}
      onPress={onPress}
    />
  );
}
