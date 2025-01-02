import React, { useRef, memo, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import RNBottomSheet, {
  BottomSheetProps as RNBottomSheetProps,
  BottomSheetBackdrop,
  BottomSheetScrollView,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
  },
  container: {
    width: '100%',
  },
});

export interface BottomSheetProps extends RNBottomSheetProps {
  isOpen: boolean;
  initialOpen?: boolean;
  children: React.ReactNode;
}

const BottomSheet = memo(function ({ isOpen, initialOpen, children, ...others }: BottomSheetProps) {
  const bottomSheetRef = useRef<RNBottomSheet>(null);

  useEffect(() => {
    if (isOpen) bottomSheetRef.current?.snapToIndex(0);
    else bottomSheetRef.current?.close();
  }, [isOpen]);

  const renderBackdropComponent = (backdropProps: BottomSheetBackdropProps) => (
    <BottomSheetBackdrop {...backdropProps} disappearsOnIndex={-1} />
  );

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
