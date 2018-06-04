import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { DrawerActions } from 'react-navigation';
import { images } from '../../assets';
// import * as DrawerActions from '../redux/actions/DrawerActions';

export default navigation => {
  return (
    <TouchableOpacity onPress={() => console.log('hello')}>
      <Image source={images.menu} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = {
  icon: {
    margin: 8,
    marginLeft: 16,
    width: 24,
    height: 24,
    tintColor: 'white',
    resizeMode: 'contain',
  },
};
