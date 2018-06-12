import * as types from '../types';
import store from '../store';

// MARK - Setter

export const setUserName = name => {
  store.dispatch(storeUserName(name));
};

// MARK - Getter

export const getUserName = () => {
  const state = store.getState();
  return state.user.name;
};

// MARK - Actions

const storeUserName = name => {
  return dispatch => {
    dispatch({
      type: types.USER_NAME,
      payload: name,
    });
  };
};
