import {createSlice} from '@reduxjs/toolkit';

interface Token {
  token: string;
  username: string;
  expires: Date;
}

interface UserState {
  refreshToken?: string;
  token?: Token;
  userLastStep?: number;
}

const initialState: UserState = {
  refreshToken: undefined,
  token: undefined,
  userLastStep: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,

  reducers: {
    logIn: (state, action) => {
      console.log('action.payload:', action.payload);
      state.refreshToken = action.payload.refreshToken;
      state.token = action.payload.token;
      state.userLastStep = action.payload.userLastStep;
    },

    updateToken: (state, action) => {
      console.log('action for updateToken:', action.payload);
      state.refreshToken = action.payload.refreshToken;
      state.token = action.payload.token;
    },

    changeToken: (state, action) => {
      state.token = action.payload.token;
    },

    logOut: state => {
      state.refreshToken = undefined;
      state.token = undefined;
      state.userLastStep = undefined;
    },

    updateLatestStep: (state, action) => {
      state.userLastStep = action.payload;
    },
  },
});

export const {logIn, updateToken, changeToken, logOut, updateLatestStep} = userSlice.actions;

export default userSlice.reducer;
