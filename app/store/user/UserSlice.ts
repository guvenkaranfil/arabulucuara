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
  id?: string;
  userRole?: string;
  name?: string;
  surname?: string;
  username?: string;
}

const initialState: UserState = {
  refreshToken: undefined,
  token: undefined,
  userLastStep: undefined,
  id: undefined,
  userRole: undefined,
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

    setApiMe: (state, action) => {
      state.id = action.payload.id;
      state.userRole = action.payload.userRole;
      state.name = action.payload.adi;
      state.surname = action.payload.soyadi;
      state.userLastStep = action.payload.lastStep;
      state.username = action.payload.username;
    },
  },
});

export const {logIn, updateToken, changeToken, logOut, setApiMe} = userSlice.actions;

export default userSlice.reducer;
