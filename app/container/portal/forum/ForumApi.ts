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
  konuId: number;
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
      providesTags: ['subjectComment'],
      query: ({subjectId}) => `/Forum/GetSubjectDetails?id=${subjectId}`,
    }),

    addSubject: build.mutation<{}, {categoryId: number; subjectTitle: string; subjectBody: string}>(
      {
        query: params => ({
          url: '/Forum/AddSubject',
          method: 'POST',
          body: params,
        }),
      },
    ),

    addComment: build.mutation<{}, {subjectId: number; comment: string}>({
      invalidatesTags: ['subjectComment'],
      query: params => ({
        url: '/Forum/AddComment',
        method: 'POST',
        body: params,
      }),
    }),
  }),
});

export const {
  useGetForumQuery,
  useGetCategoryPostsQuery,
  useGetSubjectDetailsQuery,
  useAddSubjectMutation,
  useAddCommentMutation,
} = forumApi;
