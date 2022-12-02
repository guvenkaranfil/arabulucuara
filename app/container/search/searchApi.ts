import Client from '@api/Client';

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
  }),
});

export const {
  useTopicsQuery,
  useSearchArabulucuMutation,
  useSearchGenelMutation,
  useSearchMerkezMutation,
  useSearchUzmanMutation,
} = searchApi;