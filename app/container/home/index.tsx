import React from 'react';
import {useGetHomeQuery} from './HomeApi';

import FullScreenLoader from '@components/loader/FullScreenLoader';
import ForLoggedUser from './ForLoggedUser';
import ForNonLoggedUser from './ForNonLoggedUser';
import {HomeNavigatorParamList} from '@routes/stacks/home/Types';
import {StackNavigationProp} from '@react-navigation/stack';

export interface Props {
  navigation: StackNavigationProp<HomeNavigatorParamList, 'home'>;
}

const isUserLoggedIn = false;
export default function Index({navigation}: Props) {
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
      onPressLogin={() => navigation.navigate('auth', {screen: 'login'})}
    />
  );
}
