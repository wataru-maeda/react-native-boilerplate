import { isWeb } from '@/utils/deviceInfo';
import { useState, useEffect } from 'react';
import { useColorScheme, ColorSchemeName } from 'react-native';

/**
 * to support static rendering, this value needs to be re-calculated on the client side for web
 */
function useColorSchemeForWeb(): ColorSchemeName {
  const [isHydrated, setHydrated] = useState<boolean>(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const colorScheme = useColorScheme();
  if (isHydrated) return colorScheme ?? 'light';

  return 'light';
}

export default isWeb ? useColorSchemeForWeb : useColorScheme;
