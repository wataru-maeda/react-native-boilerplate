import { isMobile } from '@/utils/deviceInfo';
import { useSyncExternalStore } from 'react';
import { useColorScheme as useRNColorScheme, ColorSchemeName } from 'react-native';

type ColorSchemeResult = {
  colorScheme: ColorSchemeName;
  isDark: boolean;
  isLight: boolean;
};

function useColorSchemaForMobile(): ColorSchemeResult {
  const colorScheme = useRNColorScheme() ?? 'light';
  const isDark = colorScheme === 'dark';
  const isLight = colorScheme === 'light';
  return { colorScheme, isDark, isLight };
}

// false during static rendering and hydration, true after the client takes over
const subscribeNoop = () => () => {};

function useColorSchemeForWeb(): ColorSchemeResult {
  const isHydrated = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  );

  const colorScheme = useRNColorScheme();
  const isDark = colorScheme === 'dark';
  const isLight = colorScheme === 'light';

  if (isHydrated) return { colorScheme: colorScheme ?? 'light', isDark, isLight };
  return { colorScheme: 'light', isDark: false, isLight: true };
}

export default isMobile ? useColorSchemaForMobile : useColorSchemeForWeb;
