import Client from '@api/Client';

import {DataBankCategory, DataBankSubCategory} from './Model';

const articlesApi = Client.injectEndpoints({
  endpoints: build => ({
    getDataBankCategories: build.query<Array<DataBankCategory>, void>({
      query: () => '/Portal/GetDataBankCategories',
    }),
    getDataBankSubCategories: build.query<Array<DataBankSubCategory>, {id: string}>({
      query: ({id}) => ({
        url: '/Portal/GetDataBank',
        method: 'GET',
        headers: {id},
      }),
    }),
  }),
});

export const {useGetDataBankCategoriesQuery, useGetDataBankSubCategoriesQuery} = articlesApi;
