import React, { useRef, memo, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import RNBottomSheet, {
  BottomSheetProps as RNBottomSheetProps,
  BottomSheetBackdrop,
  BottomSheetScrollView,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import { isWeb } from '@/utils/deviceInfo';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
  },
  container: {
    width: '100%',
  },
  webContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    maxHeight: '80%',
    zIndex: 1000,
  },
  webBackdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  },
});

export interface BottomSheetProps extends RNBottomSheetProps {
  isOpen: boolean;
  initialOpen?: boolean;
  children: React.ReactNode;
}

const BottomSheet = memo(function BottomSheet({
  isOpen,
  initialOpen,
  children,
  ...others
}: BottomSheetProps) {
  const bottomSheetRef = useRef<RNBottomSheet>(null);

  useEffect(() => {
    if (!isWeb) {
      if (isOpen) bottomSheetRef.current?.snapToIndex(0);
      else bottomSheetRef.current?.close();
    }
  }, [isOpen]);

  const renderBackdropComponent = (backdropProps: BottomSheetBackdropProps) => (
    <BottomSheetBackdrop {...backdropProps} disappearsOnIndex={-1} />
  );

  // Web fallback implementation
  if (isWeb) {
    if (!isOpen) return null;
    return (
      <>
        <View style={styles.webBackdrop} />
        <View style={styles.webContainer}>
          <ScrollView contentContainerStyle={styles.container} style={styles.root}>
            {children}
          </ScrollView>
        </View>
      </>
    );
  }

  // Native implementation
  return (
    <RNBottomSheet
      ref={bottomSheetRef}
      animateOnMount
      enableDynamicSizing
      enablePanDownToClose
      backdropComponent={renderBackdropComponent}
      keyboardBehavior="interactive"
      keyboardBlurBehavior="restore"
      android_keyboardInputMode="adjustResize"
      index={initialOpen ? 0 : -1}
      {...others}>
      <BottomSheetScrollView contentContainerStyle={styles.container} style={styles.root}>
        {children}
      </BottomSheetScrollView>
    </RNBottomSheet>
  );
});

export default BottomSheet;
