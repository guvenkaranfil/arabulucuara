import Client from '@api/Client';

import {Article} from './Model';

export interface ArticlesResponse {
  articles: Array<Article>;
}

const articlesApi = Client.injectEndpoints({
  endpoints: build => ({
    getArticles: build.query<ArticlesResponse, void>({
      query: () => '/Portal/GetArticles',
    }),
  }),
});

export const {useGetArticlesQuery} = articlesApi;
