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

type StepTwoRequest = {
  merkez?: {
    ad: string;
    soyad: string;
    dogumTarih: Date;
    cinsiyet: number;
  };
  arabulucuUzman?: {
    dogumTarih: Date;
    cinsiyet: number;
    telefon: string;
  };
};

interface ArabulucuResponse {
  id: number;
  value: string;
}

interface UzmanResponse {
  kategoriId: number;
  kategoriAdi: string;
  alanlar: Array<{alanId: number; alanAdi: string}>;
}

interface JobsResponse {
  id: number;
  value: string;
}

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

    stepTwo: build.mutation<
      SignInResponse,
      {
        merkez?: {
          ad: string;
          soyad: string;
          dogumTarih: Date;
          cinsiyet: number;
        };
        arabulucuUzman?: {
          dogumTarih: Date;
          cinsiyet: number;
          telefon: string;
        };
      }
    >({
      query: params => ({
        url: '/Account/stepTwo',
        method: 'POST',
        body: params,
      }),

      transformResponse: (response: any) => {
        console.info('/Account/stepTwo >>> ', response);
        updateLastStep(3);

        return response.data;
      },
    }),

    stepThree: build.mutation<
      SignInResponse,
      {
        arabulucu?: {
          meslekler: Array<number>;
          sicilKayitYili: number;
          merkezUyesiMi: boolean;
          dernekUyesiMi: boolean;
        };
        merkez?: {
          ortakSayisi: number;
          uyeSayisi: number;
          odaSayisi: number;
        };
        uzman?: {
          meslekler: Array<number>;
          meslekBaslangicYili: number;
          uzmanlikAlani: Array<number>;
        };
      }
    >({
      query: params => ({
        url: '/Account/StepThree',
        method: 'POST',
        body: params,
      }),

      transformResponse: (response: any) => {
        console.info('/Account/stepThree >>> ', response);
        updateLastStep(4);

        return response;
      },
    }),

    stepFive: build.mutation<
      SignInResponse,
      {
        arabulucu?: {
          hakkimda: string;
        };
        merkez?: {
          egitimVeriyorMu: boolean;
          isBirligiVarMi: boolean;
          kiralamaVarMi: boolean;
          tahkimVarMi: boolean;
          uzmanGorusVarMi: boolean;
        };
        uzman?: {
          sicileKayitliMi: boolean;
          merkezeUyeMi: boolean;
          odaUyesiMi: boolean;
        };
      }
    >({
      query: params => ({
        url: '/Account/StepFive',
        method: 'POST',
        body: params,
      }),

      transformResponse: (response: any) => {
        console.info('/Account/StepFive >>> ', response);
        updateLastStep(6);

        return response.data;
      },
    }),

    stepSix: build.mutation<
      SignInResponse,
      {
        arabulucu?: {
          uzmanlikAlanlari: Array<number>;
        };
        uzmanMerkez?: {
          hakkimda: string;
        };
      }
    >({
      query: params => ({
        url: '/Account/StepSix',
        method: 'POST',
        body: params,
      }),

      transformResponse: (response: any) => {
        console.info('/Account/Siz >>> ', response);
        updateLastStep(6);

        return response;
      },
    }),

    stepSeven: build.mutation<
      SignInResponse,
      {
        merkezUyesiMi: boolean;
        dernekUyesiMi: boolean;
        odaUyesiMi: boolean;
        sicilKayitliMi: boolean;
        merkezAdi: string;
        dernekAdi: string;
        odaAdi: string;
      }
    >({
      query: params => ({
        url: '/Account/StepSeven',
        method: 'POST',
        body: params,
      }),
      invalidatesTags: ['apime'],

      transformResponse: (response: any) => {
        console.info('/Account/Siz >>> ', response);
        updateLastStep(6);

        return response;
      },
    }),

    getProfessions: build.query<UzmanResponse | ArabulucuResponse, {userType: string}>({
      query: ({userType}) => '/Home/GetProffesion?type=' + userType,
    }),

    getJobs: build.query<JobsResponse | ArabulucuResponse, void>({
      query: () => '/Home/GetJobs',
    }),
  }),
});

export const {
  useStepOneMutation,
  useStepTwoMutation,
  useStepThreeMutation,
  useStepFiveMutation,
  useStepSixMutation,
  useStepSevenMutation,
  useGetProfessionsQuery,
  useGetJobsQuery,
  useLazyGetProfessionsQuery,
} = AuthApi;
