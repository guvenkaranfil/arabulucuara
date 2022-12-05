import Client from '@api/Client';
import {Category} from './components/Categories';
import {TopicType} from './components/Topic';

export interface TopicComment {
  adiSoyadi: string;
  mesaj: string;
  tarih: string;
  likeCount: number;
  dislikeCount: number;
  resim: string;
}

export interface TopicDetail {
  konuBaslik: string;
  konuBody: string;
  konuYazar: string;
  konuMesajlar: Array<TopicComment>;
}

export interface Topic {
  subjectId: number;
  category: string;
  modifiedOn: Date;
  subjectBody: string;
  subjectHeader: string;
  viewsCount: 31;
  postUrl: string;
  lastCommentUser: {name: string};
}

export interface ForumResponse {
  categories?: Array<{kategoriId: number; kategoriAdi: string}>;
  lastUpdateSubjects?: Array<Topic>;
}

const forumApi = Client.injectEndpoints({
  endpoints: build => ({
    getForum: build.query<ForumResponse, void>({
      query: () => '/Forum/GetForum',
    }),
    getCategoryPosts: build.query<Array<TopicType>, {categoryId: number}>({
      query: ({categoryId}) => `/Forum/GetCategoryPosts?id=${categoryId}`,
    }),
    getSubjectDetails: build.query<TopicDetail, {subjectId: number}>({
      query: ({subjectId}) => `/Forum/GetSubjectDetails?id=${subjectId}`,
    }),
  }),
});

export const {useGetForumQuery, useGetCategoryPostsQuery, useGetSubjectDetailsQuery} = forumApi;
