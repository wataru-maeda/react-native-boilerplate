import React from 'react';
import { Image } from 'react-native';
import colors from '../constants/Colors';

export default ({ source, focused }) => (
  <Image source={source} style={[styles.icon, { tintColor: focused ? colors.orange : 'gray' }]} />
);

const styles = {
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
};
