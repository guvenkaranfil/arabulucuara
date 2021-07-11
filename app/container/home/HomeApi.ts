import Client from '@api/Client';

import {Banner, SiteNew, NewlyJoinedUser, NewlyOperation, NewlyPublishedArticle} from './Models';

export interface GetHomeResponse {
  banners?: Array<Banner>;
  siteNews?: Array<SiteNew>;
  users?: Array<NewlyJoinedUser>;
  operations?: Array<NewlyOperation>;
  articles?: Array<NewlyPublishedArticle>;
}

const homeApi = Client.injectEndpoints({
  endpoints: build => ({
    getHome: build.query<GetHomeResponse, void>({
      query: () => '/Home/GetHome',
    }),
  }),
});

export const {useGetHomeQuery} = homeApi;
