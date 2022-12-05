import Client from '@api/Client';

export interface Inbox {
  messageId: number;
  image: string;
  title: string;
  name: string;
  isRead: boolean;
}

export interface Outbox {
  id: number;
  image: string;
  title: string;
  name: string;
}

export interface MessageDetail {
  body: string;
  id: number;
  image: string;
  name: string;
  title: string;
}

const messageApi = Client.injectEndpoints({
  overrideExisting: true,
  endpoints: build => ({
    getInbox: build.query<Array<Inbox>, void>({
      providesTags: ['messageBox'],
      query: () => '/Messages/GetInbox',
      // transformResponse: (res: any) => {
      //   console.log('Messages res: ', res);
      //   return res;
      // },
    }),

    getOutbox: build.query<Array<Outbox>, void>({
      providesTags: ['messageBox'],
      query: () => '/Messages/GetSendMessages',
    }),

    getMessageDetail: build.query<Array<MessageDetail>, {id: number}>({
      providesTags: ['messageBox'],
      query: ({id}) => '/Messages/GetMessage?messageId=' + id,
    }),

    replyMessage: build.mutation<
      {data: {message: string}},
      {messageId: number; messageBody: string}
    >({
      invalidatesTags: ['profileInformations'],
      query: params => ({
        url: '/Messages/ReplyMessage',
        method: 'POST',
        body: params,
      }),
    }),

    sendMessage: build.mutation<
      {data: {message: string}},
      {usernameOrMail: string; messageTitle: string; messageBody: string}
    >({
      invalidatesTags: ['profileInformations', 'messageBox'],
      query: params => ({
        url: '/Messages/SendMessage',
        method: 'POST',
        body: params,
      }),
    }),
  }),
});

export const {
  useGetInboxQuery,
  useGetOutboxQuery,
  useGetMessageDetailQuery,
  useReplyMessageMutation,
  useSendMessageMutation,
} = messageApi;
