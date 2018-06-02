import * as types from '../types';
import store from '../store';

// MARK - Accessors

export const toggleDrawer = () => {
    const status = getDrawerStatus();
    setDrawerStatus(!status);
  };

export const setDrawerStatus = status => {
    store.dispatch(storeDrawerStatus(status));
};

export const getDrawerStatus = () => {
  const state = store.getState();
  return state.Drawer.show;
};

// MARK - Actions

const storeDrawerStatus = status => {
  return dispatch => {
    dispatch({
      type: types.DRAWER_TOGGLE_STATUS,
      payload: status,
    });
  };
};
