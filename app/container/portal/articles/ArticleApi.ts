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
    getArticleDetail: build.query<Article, void>({
      query: id => ({url: '/Portal/GetArticles', body: {id}}),
    }),
  }),
});

export const {useGetArticlesQuery} = articlesApi;
