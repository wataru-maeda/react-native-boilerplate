import { useEffect } from 'react';
import { Slot, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { loadImages, loadFonts } from '@/theme'
import Provider from '@/providers'

// keep the splash screen visible while complete fetching resources
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const router = useRouter();

  // load resources
  useEffect(() => {
    Promise.all([loadImages(), loadFonts()]).then(() => {
      SplashScreen.hideAsync();
    });
  }, []);

  // navigate to main
  useEffect(() => {
    router.push('/(main)');
  }, []);

  return (
    <Provider>
      <StatusBar style="auto" />
      <Slot />
    </Provider>
  );
}
