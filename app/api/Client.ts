import {
  createApi,
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import {updateToken} from '@store/user/UserSlice';
import {RootState} from '@store/RootStore';

// const BASE_URL = 'https://api.arabulucuara.com';
const BASE_URL = 'http://192.168.1.141';
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, {getState}) => {
    const token = (getState() as RootState).user.token?.token;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    console.log('Token expired');
    // try to get a new token
    const refreshResult = await baseQuery(
      '/Account/refresh' + '?t=' + (api.getState() as RootState).user.refreshToken,
      api,
      extraOptions,
    );
    console.log('refreshResult:', refreshResult);
    if (refreshResult.data) {
      console.log('new token:', refreshResult.data);
      // store the new token
      api.dispatch(updateToken(refreshResult.data));
      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    } else {
      console.log('token could not refresh...');
      // api.dispatch(loggedOut());
    }
  }
  return result;
};

export default createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['apime', 'profileInformations', 'messageBox', 'membership', 'subjectComment'],
  endpoints: () => ({}),
});
