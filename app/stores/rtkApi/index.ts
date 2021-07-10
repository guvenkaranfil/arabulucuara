import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {HomeState} from '../../stores/features/home/HomeSlice';

export const arabulucuara = createApi({
  reducerPath: 'arabulucuara',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.arabulucuara.com'}),
  endpoints: builder => ({
    getHomeDatas: builder.query<HomeState>({
      query: () => '/Home/GetHome',
    }),
  }),
});

export const {useGetHomeDatasQuery} = arabulucuara;
