import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {SearchNavigatorParamList} from '@routes/stacks/search/types';

import ProfileLayout from '@components/layouts/ProfileLayout';
import {Constants, Fonts, Metrics} from '@utils';

type ScreenProps = {
  route: RouteProp<SearchNavigatorParamList, 'cooperationAndSolutionPartners'>;
};

export default function CooperationAndSolutionPartners({route}: ScreenProps) {
  const {profile, member} = route.params;
  return (
    <ProfileLayout user={profile}>
      <View style={styles.screenContainer}>
        <Text style={styles.screenTitle}>İşbirliği ve Çözüm Ortakları</Text>

        {member?.cozumOrtaklari &&
          member?.cozumOrtaklari?.length > 0 &&
          member.cozumOrtaklari.map((item, index) => (
            <View key={index} style={styles.member}>
              <Image source={{uri: Constants.USER_IMAGE + item?.logo}} style={styles.logo} />
              <Text style={styles.memberTitle}>{item.adi}</Text>
            </View>
          ))}
      </View>
    </ProfileLayout>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    paddingVertical: 30,
    paddingHorizontal: Metrics.horizontalContainerPadding,
  },

  screenTitle: {
    paddingBottom: 16,
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },

  member: {
    marginBottom: 20,
    paddingVertical: 16,
    paddingHorizontal: 8,
    flexDirection: 'row',
    width: Metrics.CONTAINER_WIDTH,
    borderRadius: 10,
    backgroundColor: '#F5F6FA',
  },

  memberTitle: {
    paddingTop: 4,
    paddingLeft: 16,
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },

  logo: {
    width: 75,
    height: 75,
    borderRadius: 10,
  },
});
