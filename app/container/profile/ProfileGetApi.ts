import Client from '@api/Client';

const profileGETApi = Client.injectEndpoints({
  endpoints: build => ({
    aboutMe: build.query<string, void>({
      query: () => ({url: '/User/GetAbout', responseHandler: response => response.text()}),
    }),
  }),
});

export const {useAboutMeQuery} = profileGETApi;
