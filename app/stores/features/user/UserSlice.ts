import {createSlice} from '@reduxjs/toolkit';

interface UserState {
  refreshToken?: string;
  token?: string;
}

const initialState: UserState = {
  refreshToken: undefined,
  token: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,

  reducers: {
    logIn: (state, action) => {
      state.refreshToken = action.payload.refreshToken;
      state.token = action.payload.token;
    },

    updateToken: (state, action) => {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    },

    changeToken: (state, action) => {
      state.token = action.payload.token;
    },
  },
});

export const {logIn, updateToken, changeToken} = userSlice.actions;

export default userSlice.reducer;
