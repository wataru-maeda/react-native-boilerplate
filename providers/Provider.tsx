import React from 'react';
import store from '@/utils/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider as ReduxProvider } from 'react-redux';
import NavigationProvider from './NavigationProvider';
import 'react-native-reanimated';

export default function Provider({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ReduxProvider store={store}>
        <NavigationProvider>{children}</NavigationProvider>
      </ReduxProvider>
    </GestureHandlerRootView>
  );
}
