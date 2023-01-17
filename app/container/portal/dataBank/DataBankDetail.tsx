import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PortalNavigatorParamList} from '@routes/stacks/portal/Types';

import FilledButton from '@components/buttons/FilledButton';
import ContentViewer from '@components/content/ContentViewer';

export interface Props {
  route: RouteProp<PortalNavigatorParamList, 'dataBankDetail'>;
  navigation: StackNavigationProp<PortalNavigatorParamList, 'dataBankDetail'>;
}

const WEB_URL = 'https://arabulucuara.com/uploaded/BilgiBankasi/';
export interface DataBankDetail {
  id: number;
  name: string;
  content: string;
}

export default function DataBankDetail({route}: Props) {
  const {dataBankDetail} = route.params;
  console.log('dataBankDetail:', dataBankDetail);

  return (
    <ContentViewer
      title={dataBankDetail?.title}
      body={dataBankDetail?.body}
      path={dataBankDetail?.path ? WEB_URL + dataBankDetail?.path : undefined}>
      <FilledButton
        style={{marginTop: 25}}
        label="İçeriği Görüntüle"
        bgColor="#7E0736"
        onPress={() => console.log('onPress...')}
      />
    </ContentViewer>
  );
}
