import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {SearchNavigatorParamList} from '@routes/stacks/search/types';
import HTML from 'react-native-render-html';

import ProfileLayout from '@components/layouts/ProfileLayout';
import {Fonts} from '@utils';

interface ScreenProps {
  route: RouteProp<SearchNavigatorParamList, 'profileDetail'>;
}

export default function AboutProfile({route}: ScreenProps) {
  const {profile, member} = route.params;

  if (member.ozgecmis || (member.ozgecmisMaddeler && member.ozgecmisMaddeler.length > 0)) {
    return (
      <ProfileLayout user={profile}>
        <View style={styles.screenContainer}>
          <Text style={styles.aboutMeLabel}>Hakkımızda</Text>
          {member.ozgecmisMaddeler &&
            member.ozgecmisMaddeler?.length > 0 &&
            member.ozgecmisMaddeler.map((ozgecmis, index) => (
              <View style={styles.item} key={index}>
                <Text style={styles.madde}>{ozgecmis}</Text>
              </View>
            ))}
          {member.ozgecmis && <HTML source={{html: member.ozgecmis}} />}
        </View>
      </ProfileLayout>
    );
  }

  return (
    <ProfileLayout user={profile}>
      <View style={styles.screenContainer}>
        <Text>Özgeçmiş bulunamadı</Text>
      </View>
    </ProfileLayout>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    paddingLeft: 16,
    paddingVertical: 30,
  },

  aboutMeLabel: {
    paddingBottom: 16,
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },
});
