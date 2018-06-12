import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { DrawerActions } from 'react-navigation';
import * as theme from '../../utils/Theme';

export default class SideMenu extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Side Menu</Text>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
          <Text style={styles.button}>Close</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontFamily: 'Baskerville',
  },
  button: {
    margin: 16,
    color: theme.colors.orange,
    fontSize: 16,
  },
};
