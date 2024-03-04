import { useState, useEffect } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { useAppSlice, useAppService, IUser } from '@modules/app';
import BottomSheet from '@components/BottomSheet';
import { WelcomeBottomSheetContents } from '@layouts/BottomSheetContents';
import DrawerNavigator from './drawer';
import { loadImages, loadFonts } from '@theme';
import { useDataPersist, DataPersistKeys } from '@hooks';
import { isWeb } from '@utils/deviceInfo';

// keep the splash screen visible while complete fetching resources
SplashScreen.preventAutoHideAsync();

function Navigator() {
  const { getUser } = useAppService();
  const { dispatch, checked, loggedIn, setUser, setLoggedIn } = useAppSlice();
  const { setPersistData, getPersistData } = useDataPersist();

  const [isOpen, setOpen] = useState(true);

  /**
   * preload assets and user data
   */
  const preload = async () => {
    try {
      // preload assets
      await Promise.all([loadImages(), loadFonts()]);

      // fetch user data (fake promise function to simulate async function)
      const user = await getUser();

      // store user data to redux
      dispatch(setUser(user));
      dispatch(setLoggedIn(!!user));

      // store user data to persistent storage (async storage)
      if (user) setPersistData<IUser>(DataPersistKeys.USER, user);

      // hide splash screen
      SplashScreen.hideAsync();
    } catch (err) {
      console.log('[##] preload error:', err);

      // if preload failed, try to get user data from persistent storage
      getPersistData<IUser>(DataPersistKeys.USER)
        .then(user => {
          if (user) {
            dispatch(setUser(user));
            dispatch(setLoggedIn(!!user));
          }
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

  // TODO: switch router by loggedIn status
  console.log('[##] loggedIn', loggedIn);

  return checked && loggedIn ? (
    <>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
      {!isWeb && (
        <BottomSheet isOpen={isOpen} initialOpen>
          <WelcomeBottomSheetContents onClose={() => setOpen(false)} />
        </BottomSheet>
      )}
    </>
  ) : (
    <View />
  );
}

export default Navigator;
