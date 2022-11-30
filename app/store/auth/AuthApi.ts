import Client from '@api/Client';

import {logIn} from '../user/UserSlice';

import store from '../RootStore';
import AsyncStorage from '@react-native-community/async-storage';
import {USER_INFO_STORAGE_KEY} from '../../constants';

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

const updateLastStep = (lastStep: number) => {
  let user = store.getState().user;
  const updatedUser = {
    refreshToken: user.refreshToken,
    token: user.token,
    userLastStep: lastStep,
  };

  store.dispatch(logIn(updatedUser));
  AsyncStorage.setItem(USER_INFO_STORAGE_KEY, JSON.stringify(updatedUser));
};

const AuthApi = Client.injectEndpoints({
  overrideExisting: true,
  endpoints: build => ({
    stepOne: build.mutation<SignInResponse, {mahalleId: number; adres: string}>({
      query: ({mahalleId, adres}) => ({
        url: '/Account/stepOne',
        method: 'POST',
        body: {mahalleId, adres},
      }),

      transformResponse: (response: any) => {
        console.info('/Account/stepOne >>> ', response);
        updateLastStep(2);

        return response.data;
      },
    }),
  }),
});

export const {useStepOneMutation} = AuthApi;
