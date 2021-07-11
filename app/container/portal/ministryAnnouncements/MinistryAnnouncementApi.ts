import Client from '@api/Client';

import {Announcement, AnnouncementDetail} from './Model';

const articlesApi = Client.injectEndpoints({
  endpoints: build => ({
    getMinistryAnnouncements: build.query<Array<Announcement>, void>({
      query: () => '/Portal/GetAnnouncement',
    }),
    getMinistryAnnouncementDetail: build.query<AnnouncementDetail, {id: string}>({
      query: ({id}) => ({
        url: '/Portal/GetAnnouncementDetails',
        method: 'GET',
        headers: {id},
      }),
    }),
  }),
});

export const {useGetMinistryAnnouncementsQuery, useGetMinistryAnnouncementDetailQuery} =
  articlesApi;
