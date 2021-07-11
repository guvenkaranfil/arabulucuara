import React from 'react';
import {useGetHomeQuery} from './HomeApi';

import FullScreenLoader from '@components/loader/FullScreenLoader';
import ForLoggedUser from './ForLoggedUser';
import ForNonLoggedUser from './ForNonLoggedUser';

const isUserLoggedIn = false;
export default function Index() {
  const {data, isLoading, isFetching, refetch} = useGetHomeQuery();

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return isUserLoggedIn ? (
    <ForLoggedUser
      banners={data?.banners}
      operations={data?.operations}
      siteNews={data?.siteNews}
      articles={data?.articles}
      users={data?.users}
      isRefreshing={isFetching}
      refetch={refetch}
    />
  ) : (
    <ForNonLoggedUser
      banners={data?.banners}
      siteNews={data?.siteNews}
      users={data?.users}
      refetch={refetch}
      isRefreshing={isFetching}
    />
  );
}
