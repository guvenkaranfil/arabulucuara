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

    createConference: build.mutation<void, void>({
      query: params => ({
        url: '/Conferance/CreateConference',
        method: 'POST',
        body: params,
      }),
    }),

    joinConference: build.mutation<{}, {meetingId: string; userName: string; password: string}>({
      query: params => ({
        url: '/Conferance/JoinConference',
        method: 'POST',
        body: params,
      }),
    }),
  }),
});

export const {
  useCalculateFeeMutation,
  useGetEventsQuery,
  useCreateConferenceMutation,
  useJoinConferenceMutation,
} = articlesApi;
