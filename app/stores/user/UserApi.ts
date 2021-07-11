import AsyncStorage from '@react-native-community/async-storage';

import Client from '@api/Client';
import {logIn} from './UserSlice';

import store from '../RootStore';

interface Token {
  token: string;
  username: string;
  expired: Date;
}

interface SignInResponse {
  refreshToken?: string;
  token?: Token;
  userLastStep?: number;
}

const userApi = Client.injectEndpoints({
  overrideExisting: true,
  endpoints: build => ({
    signIn: build.mutation<SignInResponse, {username: string; password: string}>({
      query: ({username, password}) => ({
        url: '/Account/login',
        method: 'POST',
        body: {
          username,
          password,
        },
      }),

      transformResponse: (response: any) => {
        store.dispatch(logIn(response));

        AsyncStorage.setItem('@user', JSON.stringify(response));

        console.log('response of login.', response);
        return response.data;
      },
    }),
  }),
});

export const {useSignInMutation} = userApi;
