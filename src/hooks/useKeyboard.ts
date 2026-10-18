import { useState, useEffect } from 'react';
import { Keyboard, KeyboardEvent } from 'react-native';

export function useKeyboard() {
  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false);
  const [keyboardHeight, setKeyboardHeight] = useState<number>(0);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    const keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', () => {
      setKeyboardVisible(false);
      setKeyboardHeight(0);
    });
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (e: KeyboardEvent) => {
      setKeyboardVisible(true);
      setKeyboardHeight(e.endCoordinates.height);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
      setKeyboardHeight(0);
    });

    return () => {
      keyboardWillShowListener.remove();
      keyboardWillHideListener.remove();
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return { isKeyboardVisible, keyboardHeight, dismissKeyboard };
}
