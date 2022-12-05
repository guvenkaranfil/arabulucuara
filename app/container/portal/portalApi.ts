import Client from '@api/Client';

export interface FeeResponse {
  ucretDilimi: string;
  oran: number;
  dusenMiktar: number;
  ucret: number;
  oran2Arabulucu: number;
  ucret2Arabulucu: number;
}

const articlesApi = Client.injectEndpoints({
  endpoints: build => ({
    calculateFee: build.mutation<Array<FeeResponse>, {ucret: number; uyusmalikTuru: number}>({
      invalidatesTags: ['membership'],
      query: params => ({
        url: '/Home/FeeCalculate',
        method: 'POST',
        body: params,
      }),
    }),
  }),
});

export const {useCalculateFeeMutation} = articlesApi;
