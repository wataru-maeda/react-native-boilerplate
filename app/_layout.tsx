import { Fragment } from 'react'
import * as SplashScreen from 'expo-splash-screen';
import BottomSheetContents from '@/components/layouts/BottomSheetContents';
import BottomSheet from '@/components/elements/BottomSheet';
import { useDataPersist, DataPersistKeys } from '@/hooks';
import { loadImages, loadFonts } from '@/theme'
import { Slot, useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useAppSlice } from '@/slices'
import { fetchUser } from '@/services'
import Provider from '@/providers'
import { User } from '@/types'

// keep the splash screen visible while complete fetching resources
SplashScreen.preventAutoHideAsync();


function Router() {
  const router = useRouter();
  const { dispatch, checked, loggedIn, setUser, setLoggedIn } = useAppSlice()
  const { setPersistData, getPersistData } = useDataPersist();

  const [isOpen, setOpen] = useState(true)

/**
   * preload assets and user data
   */
const preload = async () => {
  try {
    // preload assets
    await Promise.all([loadImages(), loadFonts()]);

    // fetch user data (fake promise function to simulate async function)
    const user = await fetchUser();

    // store user data to redux store
    dispatch(setUser(user));
    dispatch(setLoggedIn(!!user));

    // store user data to persistent storage (async storage)
    if (user) setPersistData<User>(DataPersistKeys.USER, user);

    // hide splash screen
    SplashScreen.hideAsync();
  } catch (err) {
    // if preload failed, try to get user data from persistent storage
    getPersistData<User>(DataPersistKeys.USER)
      .then(user => {
        if (user) dispatch(setUser(user));
        dispatch(setLoggedIn(!!user));
      })
      .finally(() => {
        // hide splash screen
        SplashScreen.hideAsync();
      });
    }
  };

  useEffect(() => {
    preload();
  }, []);

  // navigate to app
  useEffect(() => {
    router.push('/(main)');
  }, []);

  return (
    <Fragment>
      <Slot />
      <StatusBar style="light" />
      <BottomSheet isOpen={isOpen} initialOpen>
        <BottomSheetContents onClose={() => setOpen(false)} />
      </BottomSheet>
    </Fragment>
  );
}

export default function RootLayout() {
  return (
    <Provider>
      <Router />
    </Provider>
  );
}
