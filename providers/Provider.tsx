import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider as ReduxProvider } from 'react-redux';
import useColorScheme from '@/hooks/useColorScheme';
import store from '@/utils/store';
import 'react-native-reanimated';

export default function Provider({ children }: Readonly<{ children: React.ReactNode }>) {
  const { isDark } = useColorScheme();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ReduxProvider store={store}>
        <ThemeProvider value={isDark ? DarkTheme : DefaultTheme}>{children}</ThemeProvider>
      </ReduxProvider>
    </GestureHandlerRootView>
  );
}
