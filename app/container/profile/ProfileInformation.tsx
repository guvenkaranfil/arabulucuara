import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '@store/RootStore';

import InformationArabulucu from './profileInformation/InformationArabulucu';
import {useProfileInformationsQuery} from './ProfileGetApi';
import FullScreenLoader from '@components/loader/FullScreenLoader';

export default function ProfileInformation() {
  const {data, isLoading} = useProfileInformationsQuery();
  const user = useSelector((state: RootState) => state.user);

  if (isLoading) {
    return <FullScreenLoader />;
  } else if (data) {
    if (user.userRole === 'arabulucu') return <InformationArabulucu informations={data} />;
  }

  return <></>;
}
