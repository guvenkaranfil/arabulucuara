import Client from '@api/Client';
import {Category} from './components/Categories';

const forumApi = Client.injectEndpoints({
  endpoints: build => ({
    getForum: build.query<Array<Category>, void>({
      query: () => '/Forum/GetForum',
    }),
  }),
});

export const {useGetForumQuery} = forumApi;
