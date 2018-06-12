import * as types from '../types';

const initialState = {
  name: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.USER_NAME:
      return {
        ...state,
        status: types.USER_NAME,
        name: action.payload,
      };
    default:
      return state;
  }
};
