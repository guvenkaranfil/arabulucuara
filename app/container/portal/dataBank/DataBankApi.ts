import Client from '@api/Client';

import {DataBankCategory} from './Model';

export interface ArticlesResponse {
  articles: Array<DataBankCategory>;
}

const articlesApi = Client.injectEndpoints({
  endpoints: build => ({
    getDataBankCategories: build.query<ArticlesResponse, void>({
      query: () => '/Portal/GetDataBankCategories',
    }),
  }),
});

export const {useGetDataBankCategoriesQuery} = articlesApi;
