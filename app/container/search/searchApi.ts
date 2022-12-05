import Client from '@api/Client';
import {Certificate} from '@profile/ProfileGetApi';

interface TopicsResponse {
  id: number;
  value: string;
}

export type SearchResponse = {
  city: string;
  cityShow: boolean;
  county: string;
  countyShown: boolean;
  displayName: string;
  role: string;
  starPoints: number;
  uri: {path: string; value: string};
  image: string;
};

export interface SearchPage {
  name: string;
  pageName: string;
  url: string;
}
export interface MerkezUye {
  adi: string;
  image: string;
  meslek: string;
  pozisyon: string;
  soyadi: string;
}
export interface CozumOrtagi {
  adi: string;
  image: string;
}

export interface SearchArticle {
  body: string;
  createdOn: string;
  id: number;
  path?: string;
  title: string;
}

export interface SearchProfileResim {
  adi: string;
  path: string;
}
export interface MemberResponse {
  ozgecmis?: string;
  ozgecmisMaddeler?: Array<string>;
  linkler: Array<SearchPage>;
  merkezUyeler?: Array<MerkezUye>;
  cozumOrtaklari?: Array<CozumOrtagi>;
  uzmanlikAlanlari?: Array<string>;
  makaleler?: Array<SearchArticle>;
  belgeler?: Array<Certificate>;
  resimler?: Array<SearchProfileResim>;
  uyelikler?: Array<{name: string; value: string}>;
  phone?: string;
  email?: string;
  il?: string;
  ilce?: string;
}

const searchApi = Client.injectEndpoints({
  overrideExisting: true,
  endpoints: build => ({
    topics: build.query<TopicsResponse[], void>({
      query: () => '/Home/GetJobs',
    }),

    searchArabulucu: build.mutation<
      SearchResponse[] | undefined,
      {
        sehir: number;
        ilce: number;
        mahalleId: number;
        uyusmazlikKonusu: number;
        cinsiyet: number;
        alanlar: Array<number>;
        yasAraligi: number;
        kidemAraligi: number;
        meslek: number;
        merkezUyesiMi: number;
        dernekUyesiMi: number;
      }
    >({
      query: params => ({
        url: '/Search/Arabulucuara',
        method: 'POST',
        body: params,
      }),

      transformResponse: (response: any) => {
        console.info('Search arabulucu ara response: ', response);

        return response;
      },
    }),

    searchMerkez: build.mutation<
      SearchResponse[] | undefined,
      {
        sehir: number;
        ilce: number;
        mahalleId: number;
        uyusmazlikKonusu: number;
        alanlar: Array<number>;
        odaSayisi: number;
        uyeSayisi: number;
        egitimVarMi: number;
        ortaklikVarMi: number;
        kiralamaVarMi: number;
        tahkimVarMi: number;
        gorusVarMi: number;
      }
    >({
      query: params => ({
        url: '/Search/Merkezara',
        method: 'POST',
        body: params,
      }),

      transformResponse: (response: any) => {
        console.info('Search merkez ara response: ', response);

        return response;
      },
    }),

    searchUzman: build.mutation<
      SearchResponse[] | undefined,
      {
        sehir: number;
        ilce: number;
        mahalleId: number;
        cinsiyet: number;
        yasAraligi: number;
        kidemAraligi: number;
        meslek: Array<number>;
        uzmanlikAlanlari: Array<number>;
        sicileKayitliMi: number;
        merkezeUyeMi: number;
        odaUyesiMi: number;
      }
    >({
      query: params => ({
        url: '/Search/Uzmanara',
        method: 'POST',
        body: params,
      }),

      transformResponse: (response: any) => {
        console.info('Search merkez ara response: ', response);

        return response;
      },
    }),

    searchGenel: build.mutation<
      SearchResponse[] | undefined,
      {
        value: string;
      }
    >({
      query: params => ({
        url: '/Search/GenelArama',
        method: 'POST',
        body: params,
      }),

      transformResponse: (response: any) => {
        console.info('Search general: ', response);

        return response;
      },
    }),

    getMember: build.query<MemberResponse, {username: string}>({
      query: ({username}) => ({url: '/GetUserInfo?username=' + username}),
    }),
  }),
});

export const {
  useTopicsQuery,
  useSearchArabulucuMutation,
  useSearchGenelMutation,
  useSearchMerkezMutation,
  useSearchUzmanMutation,
  useGetMemberQuery,
} = searchApi;
