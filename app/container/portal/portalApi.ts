import Client from '@api/Client';

export interface FeeResponse {
  ucretDilimi: string;
  oran: number;
  dusenMiktar: number;
  ucret: number;
  oran2Arabulucu: number;
  ucret2Arabulucu: number;
}

export interface Event {
  id: number;
  name: string;
  details: string;
  image: string;
  startDate: Date;
  endDate: Date;
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

    getEvents: build.query<Array<Event>, void>({
      query: () => '/Portal/GetEvents',
    }),
  }),
});

export const {useCalculateFeeMutation, useGetEventsQuery} = articlesApi;
