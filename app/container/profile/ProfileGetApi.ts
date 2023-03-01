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
  jobs?: Array<string>;
}

export interface Article {
  id: number;
  title: string;
  body?: string;
  path?: string;
  createdOn: Date;
}

export interface Certificate {
  id: number;
  konu: string;
  kurum: string;
  yil: number;
}

interface Meslek {
  id: number;
  name: string;
}
export interface ProfileInformations {
  adi: string;
  soyadi: string;
  dogumTarih: string;
  kullaniciMeslekleri: Array<Meslek>;
  meslekler: Array<Meslek>;
  telefon: string;
  telefonYayinla: boolean;
  email: string;
  emailYayinla: boolean;
  iller: Array<{id: number; name: string; selected: Boolean}>;
  sehirYayinla: boolean;
  ilceler: Array<{id: number; name: string; selected: Boolean}>;
  ilceYayinla: boolean;
  mahalleler: Array<{id: number; name: string; selected: Boolean}>;
  mahalleYayinla: boolean;
  adres: string;
  adresYayinla: boolean;
}

interface UpdateProfile {
  arabulucuBilgileri?: {
    phone: string;
    email: string;
    birthDay: string;
    jobs: Array<number>;
    districtId: number;
    address: string;
    phoneShow: boolean;
    emailShow: boolean;
    cityShow: boolean;
    districtShow: boolean;
    addressShow: boolean;
  };
  merkezBilgileri?: {
    partnerCount: number;
    roomCount: number;
    memberCount: number;
    commercialTitle: string;
    phone: string;
    email: string;
    birthDay: Date;
    districtId: number;
    address: string;
    phoneShow: boolean;
    emailShow: boolean;
    cityShow: boolean;
    districtShow: boolean;
    addressShow: boolean;
  };
  uzmanBilgileri?: {
    phone: string;
    email: string;
    birthDay: Date;
    jobs: Array<number>;
    jobStartYear: number;
    districtId: number;
    address: string;
    phoneShow: boolean;
    emailShow: boolean;
    cityShow: boolean;
    districtShow: boolean;
    addressShow: boolean;
  };
}

export interface MembershipArabulucu {
  merkezUyesiMi: boolean;
  dernekUyesiMi: boolean;
  odaUyesiMi: boolean;
  sicilKayitliMi: boolean;
  merkezAdi: string;
  dernekAdi: string;
  odaAdi: string;
}

export interface UserMedia {
  id: number;
  file: string;
}
export interface UserGallery {
  fotolar: Array<UserMedia>;
  videos: Array<UserMedia>;
}

const profileGETApi = Client.injectEndpoints({
  endpoints: build => ({
    aboutMe: build.query<string, void>({
      query: () => ({url: '/User/GetAbout', responseHandler: response => response.text()}),
    }),

    getProfileLinks: build.query<ProfileLinks, void>({
      query: () => ({url: '/User/GetProfileLinks'}),
    }),

    getMembership: build.query<MembershipArabulucu, void>({
      providesTags: ['membership'],
      query: () => ({url: '/User/GetMemberships'}),
    }),

    getGallery: build.query<UserGallery, void>({
      query: () => ({url: '/Gallery/GetMyGallery'}),
    }),

    deleteGallery: build.mutation<{}, {id: number; type: string}>({
      query: params => ({
        url: '/Gallery/DeleteGallery',
        method: 'POST',
        body: params,
      }),
    }),

    updateMembership: build.mutation<{}, MembershipArabulucu>({
      invalidatesTags: ['membership'],
      query: params => ({
        url: '/User/UpdateMemberships',
        method: 'POST',
        body: params,
      }),
    }),

    articles: build.query<Array<Article>, void>({
      query: () => ({url: '/Content/GetMyArticles'}),
    }),

    certificates: build.query<Array<Certificate>, void>({
      query: () => ({url: '/User/GetCertificate'}),
    }),

    profileInformations: build.query<ProfileInformations, void>({
      providesTags: ['profileInformations'],
      query: () => ({url: '/User/GetProfile'}),
    }),

    updateProfile: build.mutation<{}, UpdateProfile>({
      invalidatesTags: ['profileInformations'],
      query: params => ({
        url: '/User/UpdateProfile',
        method: 'POST',
        body: params,
      }),

      transformResponse: (response: any) => {
        console.info('Update Profile Response: ', response);

        return response;
      },
    }),

    saveFCMToken: build.mutation<{data: {success: boolean}}, {token: string; userId?: string}>({
      query: params => ({
        url: '/Account/SaveFCMToken',
        method: 'POST',
        body: params,
      }),

      transformResponse: (response: any) => {
        console.info('Update Profile Response: ', response);

        return response;
      },
    }),
  }),
});

export const {
  useAboutMeQuery,
  useGetProfileLinksQuery,
  useGetMembershipQuery,
  useGetGalleryQuery,
  useDeleteGalleryMutation,
  useArticlesQuery,
  useCertificatesQuery,
  useProfileInformationsQuery,
  useUpdateProfileMutation,
  useUpdateMembershipMutation,
  useSaveFCMTokenMutation,
} = profileGETApi;
