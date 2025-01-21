import { isMobile } from '@/utils/deviceInfo';
import { useState, useEffect } from 'react';
import { useColorScheme as useRNColorScheme, ColorSchemeName } from 'react-native';

type ColorSchemeResult = {
  colorScheme: ColorSchemeName;
  isDark: boolean;
  isLight: boolean;
};

function useColorSchemaForMobile(): ColorSchemeResult {
  const colorScheme = useRNColorScheme();
  const isDark = colorScheme === 'dark';
  const isLight = colorScheme === 'light';
  return { colorScheme, isDark, isLight };
}

function useColorSchemeForWeb(): ColorSchemeResult {
  const [isHydrated, setHydrated] = useState<boolean>(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const colorScheme = useRNColorScheme();
  const isDark = colorScheme === 'dark';
  const isLight = colorScheme === 'light';

  if (isHydrated) return { colorScheme: colorScheme ?? 'light', isDark, isLight };
  return { colorScheme: 'light', isDark: false, isLight: true };
}

export default isMobile ? useColorSchemaForMobile : useColorSchemeForWeb;
