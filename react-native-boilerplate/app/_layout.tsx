import * as SplashScreen from 'expo-splash-screen';
import { loadImages, loadFonts } from '@/theme'
import { Slot, useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import BottomSheet from '@/components/elements/BottomSheet';
import BottomSheetContents from '@/components/layouts/BottomSheetContents';
import Provider from '@/providers'

// keep the splash screen visible while complete fetching resources
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const router = useRouter();
  const [isOpen, setOpen] = useState(true)

  // load resources
  useEffect(() => {
    Promise.all([loadImages(), loadFonts()]).then(() => {
      SplashScreen.hideAsync();
    });
  }, []);

  // navigate to app
  useEffect(() => {
    router.push('/(main)');
  }, []);

  return (
    <Provider>
      <Slot />
      <StatusBar style="light" />
      <BottomSheet isOpen={isOpen} initialOpen>
        <BottomSheetContents onClose={() => setOpen(false)} />
      </BottomSheet>
    </Provider>
  );
}
