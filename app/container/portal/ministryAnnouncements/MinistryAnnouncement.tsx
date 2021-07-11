import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import HTML from 'react-native-render-html';
import {WebView} from 'react-native-webview';

import {PortalNavigatorParamList} from '@routes/stacks/portal/Types';
import {CommonStyles, Fonts} from '@utils';
import {useGetMinistryAnnouncementDetailQuery} from './MinistryAnnouncementApi';
import FullScreenLoader from '@components/loader/FullScreenLoader';

export interface Props {
  route: RouteProp<PortalNavigatorParamList, 'ministryAnnouncement'>;
  navigation: StackNavigationProp<PortalNavigatorParamList, 'ministryAnnouncement'>;
}

export default function MinistryAnnouncement({route}: Props) {
  const {id, title} = route.params;

  const {data, isLoading} = useGetMinistryAnnouncementDetailQuery({id: String(id)});

  if (isLoading) {
    return <FullScreenLoader />;
  }

  if (data?.path) {
    return (
      <View style={CommonStyles.container}>
        <WebView
          source={{
            uri: 'https://arabulucuara.com/uploaded/BakanlikDuyursu/' + data?.path,
          }}
        />
      </View>
    );
  }

  if (data?.body) {
    return (
      <View style={CommonStyles.container}>
        <ScrollView style={CommonStyles.paddingForScroll}>
          <Text style={styles.title}>{title}</Text>

          <HTML source={{html: data?.body}} containerStyle={styles.articleContent} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },

  articleContent: {marginVertical: 25},
});
