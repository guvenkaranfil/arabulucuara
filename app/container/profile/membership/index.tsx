import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '@store/RootStore';
import MembershipArabulucu from './MembershipArabulucu';
import {useGetMembershipQuery} from '@profile/ProfileGetApi';
import FullScreenLoader from '@components/loader/FullScreenLoader';

export default function MemberShipContainer() {
  const user = useSelector((state: RootState) => state.user);

  const {data, isLoading} = useGetMembershipQuery();
  console.log('data membership:', data);

  if (isLoading) return <FullScreenLoader />;
  else if (data && user.userRole === 'arabulucu') return <MembershipArabulucu member={data} />;

  return null;
}
