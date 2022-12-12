import AsyncStorage from '@react-native-community/async-storage';

import Client from '@api/Client';
import {logIn, setApiMe} from './UserSlice';

import store from '../RootStore';
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

type PostRegisterType = {
  uyelikTur: string;
  arabulucu: {
    adi: string;
    soyadi: string;
    email: string;
    sicilNo: string;
    kullaniciAdi: string;
    sifre: string;
  };
};

type RegisterMerkez = {
  uyelikTur: string;
  merkez: {
    adi: string;
    soyadi: string;
    email: string;
    merkezAdi: string;
    kullaniciAdi: string;
    sifre: string;
    ticariUnvan: string;
  };
};

type RegisterUzman = {
  uyelikTur: string;
  uzman: {
    adi: string;
    soyadi: string;
    email: string;
    kullaniciAdi: string;
    sifre: string;
  };
};

const saveUserToStorage = (response: SignInResponse) => {
  store.dispatch(logIn(response));
  AsyncStorage.setItem(USER_INFO_STORAGE_KEY, JSON.stringify(response));

  console.log('response of login.', response);
};

interface ApiMe {
  id: string;
  userRole: string;
  lastStep: string;
}

const userApi = Client.injectEndpoints({
  overrideExisting: true,
  endpoints: build => ({
    apiMe: build.mutation<ApiMe, void>({
      providesTags: ['apime'],
      query: () => ({
        url: '/Account/me',
        method: 'GET',
      }),

      transformResponse: (response: any) => {
        console.log('response of api me.', response);
        store.dispatch(setApiMe(response));

        return response;
      },
    }),

    signIn: build.mutation<SignInResponse, {username: string; password: string}>({
      invalidatesTags: ['apime'],
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
        AsyncStorage.setItem(USER_INFO_STORAGE_KEY, JSON.stringify(response));

        console.log('response of login.', response);
        return response;
      },
    }),

    signUpArabulucu: build.mutation<SignInResponse, PostRegisterType>({
      query: ({uyelikTur, arabulucu}) => ({
        url: '/Account/registerArabulucu',
        method: 'POST',
        body: {uyelikTur, arabulucu},
      }),

      transformResponse: (response: any) => {
        console.info('sign up arabulucu arabulucu response: ', response);
        return response;
      },
    }),

    signUpMerkez: build.mutation<SignInResponse, RegisterMerkez>({
      query: ({uyelikTur, merkez}) => ({
        url: '/Account/registerMerkez',
        method: 'POST',
        body: {uyelikTur, merkez},
      }),

      transformResponse: (response: any) => {
        console.info('sign up merkez arabulucu response: ', response);
        saveUserToStorage(response);
        return response;
      },
    }),

    signUpUzman: build.mutation<SignInResponse, RegisterUzman>({
      query: ({uyelikTur, uzman}) => ({
        url: '/Account/registerUzman',
        method: 'POST',
        body: {uyelikTur, uzman},
      }),

      transformResponse: (response: any) => {
        console.info('sign up uzman arabulucu response: ', response);
        return response;
      },
    }),
  }),
});

export const {
  useApiMeMutation,
  useSignInMutation,
  useSignUpArabulucuMutation,
  useSignUpMerkezMutation,
  useSignUpUzmanMutation,
} = userApi;

// merkez -> merkez
// uzman -> uzman
// arabulucu -> arabulucu
