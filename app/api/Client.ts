import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export default createApi({
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.arabulucuara.com'}),
  endpoints: () => ({}),
});
