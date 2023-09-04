import { useDispatch, useSelector } from 'react-redux';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State, Dispatch } from '@utils/store';

interface IAppUser {
  name: string;
  email: string;
}

interface IAppState {
  checked: boolean;
  loggedIn: boolean;
  user?: IAppUser;
}

const initialState: IAppState = {
  checked: false,
  loggedIn: false,
  user: undefined,
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    authenticate: (
      state: IAppState,
      { payload }: PayloadAction<{ loggedIn: boolean; user?: IAppUser }>,
    ) => {
      state.checked = true;
      state.loggedIn = payload.loggedIn;
      state.user = payload.user;
    },
    reset: () => initialState,
  },
});

const asyncActions = {
  loadUser: () => async (dispatch: Dispatch) => {
    try {
      // simulate async function
      await new Promise(resolve => setTimeout(resolve, 100));

      // update user
      dispatch(
        slice.actions.authenticate({
          loggedIn: true,
          user: {
            name: 'test user',
            email: 'test@test.com',
          },
        }),
      );
    } catch (err) {
      console.log('[##] err', err);
    }
  },
};

export function useAppModule() {
  const dispatch = useDispatch<Dispatch>();
  const state = useSelector(({ app }: State) => app);
  return { dispatch, ...state, ...slice.actions, ...asyncActions };
}

export default slice.reducer;
