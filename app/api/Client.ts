import {
  createApi,
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import {updateToken} from '../stores/user/UserSlice';
import {RootState} from '../stores/RootStore';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.arabulucuara.com',
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
  endpoints: () => ({}),
});
