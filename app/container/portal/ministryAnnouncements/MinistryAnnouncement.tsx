import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {PortalNavigatorParamList} from '@routes/stacks/portal/Types';
import {useGetMinistryAnnouncementDetailQuery} from './MinistryAnnouncementApi';
import FullScreenLoader from '@components/loader/FullScreenLoader';
import ContentViewer from '@components/content/ContentViewer';

export interface Props {
  route: RouteProp<PortalNavigatorParamList, 'ministryAnnouncement'>;
  navigation: StackNavigationProp<PortalNavigatorParamList, 'ministryAnnouncement'>;
}

const WEB_PATH = 'https://arabulucuara.com/uploaded/BakanlikDuyursu/';
export default function MinistryAnnouncement({route}: Props) {
  const {id, title} = route.params;

  const {data, isLoading} = useGetMinistryAnnouncementDetailQuery({id: String(id)});

  if (isLoading) {
    return <FullScreenLoader />;
  }

  if (data?.path || data?.body) {
    return (
      <ContentViewer
        title={title}
        body={data?.body}
        path={data?.path ? WEB_PATH + data?.path : undefined}
      />
    );
  }

  return null;
}
