import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PortalNavigatorParamList} from '@routes/stacks/portal/Types';
import HTML from 'react-native-render-html';
import {WebView} from 'react-native-webview';

import {CommonStyles, Fonts} from '@utils';
import FilledButton from '@components/buttons/FilledButton';

export interface Props {
  route: RouteProp<PortalNavigatorParamList, 'dataBankDetail'>;
  navigation: StackNavigationProp<PortalNavigatorParamList, 'dataBankDetail'>;
}

export interface DataBankDetail {
  id: number;
  name: string;
  content: string;
}

export default function DataBankDetail({route}: Props) {
  const {dataBankDetail} = route.params;

  if (!dataBankDetail?.body) {
    return (
      <View style={CommonStyles.container}>
        <WebView
          source={{
            uri: 'https://arabulucuara.com/uploaded/BilgiBankasi/' + dataBankDetail?.path,
          }}
        />
      </View>
    );
  }

  return (
    <View style={CommonStyles.container}>
      <ScrollView contentContainerStyle={[CommonStyles.paddingForScroll]}>
        <Text style={styles.title}>{dataBankDetail.title}</Text>

        <HTML source={{html: dataBankDetail?.body}} containerStyle={styles.dataBankDetail} />

        <FilledButton
          label="İçeriği Görüntüle"
          bgColor="#7E0736"
          onPress={() => console.log('onPress...')}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingVertical: 28,
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },

  dataBankDetail: {
    marginBottom: 28,
  },
});
