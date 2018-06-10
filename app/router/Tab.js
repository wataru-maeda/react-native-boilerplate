import React from 'react';
import { Image } from 'react-native';
import * as theme from '../constants/Theme';

export default ({ source, focused }) => (
  <Image
    source={source}
    style={[styles.icon, { tintColor: focused ? theme.colors.orange : theme.colors.gray }]}
  />
);

const styles = {
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
};
