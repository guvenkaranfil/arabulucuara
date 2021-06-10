import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import HTML from 'react-native-render-html';

import {content} from '../forum/mocks';
import {PortalNavigatorParamList} from '@routes/stacks/portal/Types';
import {CommonStyles, Fonts} from '@utils';

export interface Props {
  route: RouteProp<PortalNavigatorParamList, 'ministryAnnouncement'>;
  navigation: StackNavigationProp<PortalNavigatorParamList, 'ministryAnnouncement'>;
}

export default function MinistryAnnouncement({route}: Props) {
  const {title} = route.params;

  return (
    <View style={CommonStyles.container}>
      <ScrollView style={CommonStyles.paddingForScroll}>
        <Text style={styles.title}>{title}</Text>

        <HTML source={{html: content.htmlContent}} containerStyle={styles.articleContent} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },

  articleContent: {marginVertical: 25},
});
