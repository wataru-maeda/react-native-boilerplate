import * as types from '../types';
import store from '../store';

// MARK - Accessors

export const toggleDrawer = () => {
    const state = getDrawerStatus();
    setDrawerStatus(!status);
  };

export const setDrawerStatus = status => {
    store.dispatch(storeDrawerkStatus(isConnected));
};

export const getDrawerStatus = () => {
  const state = store.getState();
  return state.Drawer.show;
};

// MARK - Actions

const storeDrawerkStatus = status => {
  return dispatch => {
    dispatch({
      type: types.DRAWER_TOGGLE_STATUS,
      payload: status,
    });
  };
};
