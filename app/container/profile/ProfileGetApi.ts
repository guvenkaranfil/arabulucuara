import Client from '@api/Client';

export interface ProfilePageLink {
  name: string;
  url: string;
  pageName: string;
  ustLinkId: number;
  roleName: string;
  linkSira: number;
}
export interface ProfileLinks {
  displayName: string;
  roleName: string;
  image: string;
  email: string;
  phone?: string;
  starPoints: number;
  linkler: Array<ProfilePageLink>;
}

const profileGETApi = Client.injectEndpoints({
  endpoints: build => ({
    aboutMe: build.query<string, void>({
      query: () => ({url: '/User/GetAbout', responseHandler: response => response.text()}),
    }),

    getProfileLinks: build.query<ProfileLinks, void>({
      query: () => ({url: '/User/GetProfileLinks'}),
    }),
  }),
});

export const {useAboutMeQuery, useGetProfileLinksQuery} = profileGETApi;
