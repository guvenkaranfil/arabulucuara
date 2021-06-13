import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {SearchNavigatorParamList} from '@routes/stacks/search/types';
import HTML from 'react-native-render-html';

import ProfileLayout from '@components/layouts/ProfileLayout';
import {Fonts, Metrics} from '@utils';

interface ScreenProps {
  route: RouteProp<SearchNavigatorParamList, 'profileDetail'>;
}

export default function AboutProfile({route}: ScreenProps) {
  const {profile} = route.params;

  return (
    <ProfileLayout user={profile}>
      <View style={styles.screenContainer}>
        <Text style={styles.aboutMeLabel}>Hakkımızda</Text>
        <HTML source={{html: content.htmlContent}} />
      </View>
    </ProfileLayout>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    paddingTop: 30,
    paddingHorizontal: Metrics.horizontalContainerPadding,
  },

  aboutMeLabel: {
    paddingBottom: 16,
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },
});

export const content = {
  title: 'Med-Arb sürecinde Tahkim şartı ne şekilde yazılmalıdır?',
  htmlContent:
    '<b>Line1</b><br/>line2<br/>line3<br/><a href="http://arabulucuara.com">Arabulucu Ara</a>',
  publisher: 'Mehmet GÜNEY',
  views: 10,
};
