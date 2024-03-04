import { useDispatch, useSelector } from 'react-redux';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State, Dispatch } from '@utils/store';
import { IUser, IAppState } from './app.typeDefs';

const initialState: IAppState = {
  checked: false,
  loggedIn: false,
  user: undefined,
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoggedIn: (state: IAppState, { payload }: PayloadAction<boolean>) => {
      state.checked = true;
      state.loggedIn = payload;
    },
    setUser: (state: IAppState, { payload }: PayloadAction<IUser | undefined>) => {
      state.user = payload;
    },
    reset: () => initialState,
  },
});

export function useAppSlice() {
  const dispatch = useDispatch<Dispatch>();
  const state = useSelector(({ app }: State) => app);
  return { dispatch, ...state, ...slice.actions };
}

export default slice.reducer;
