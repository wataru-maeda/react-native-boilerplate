import React from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import useColorScheme from '@/hooks/useColorScheme';

export default function NavigationProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {children}
    </ThemeProvider>
  );
}
