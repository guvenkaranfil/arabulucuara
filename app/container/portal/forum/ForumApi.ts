import Client from '@api/Client';
import {Category} from './components/Categories';
import {TopicType} from './components/Topic';

const forumApi = Client.injectEndpoints({
  endpoints: build => ({
    getForum: build.query<Array<Category>, void>({
      query: () => '/Forum/GetForum',
    }),
    getCategoryPosts: build.query<Array<TopicType>, {categoryId: number}>({
      query: ({categoryId}) => `/Forum/GetCategoryPosts?id=${categoryId}`,
    }),
  }),
});

export const {useGetForumQuery, useGetCategoryPostsQuery} = forumApi;
