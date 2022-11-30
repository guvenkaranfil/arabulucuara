import Client from '@api/Client';

import {Banner, SiteNew, NewlyJoinedUser, NewlyOperation, NewlyPublishedArticle} from './Models';

export interface GetHomeResponse {
  banners?: Array<Banner>;
  siteNews?: Array<SiteNew>;
  users?: Array<NewlyJoinedUser>;
  operations?: Array<NewlyOperation>;
  articles?: Array<NewlyPublishedArticle>;
}

interface Region {
  id: number;
  type: string;
}

const homeApi = Client.injectEndpoints({
  endpoints: build => ({
    getHome: build.query<GetHomeResponse, void>({
      query: () => '/Home/GetHome',
    }),
    getCities: build.query<Region[], {id?: number; type: string}>({
      query: ({id, type}) =>
        id ? `/Home/GetCity?id=${id}&type=${type}` : `/Home/GetCity?type=${type}`,
    }),
  }),
});

export const {useGetHomeQuery, useGetCitiesQuery, useLazyGetCitiesQuery} = homeApi;
