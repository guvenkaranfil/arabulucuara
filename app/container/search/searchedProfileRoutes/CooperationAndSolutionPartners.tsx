import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {SearchNavigatorParamList} from '@routes/stacks/search/types';

import ProfileLayout from '@components/layouts/ProfileLayout';
import {Fonts, Metrics} from '@utils';

type ScreenProps = {
  route: RouteProp<SearchNavigatorParamList, 'profileDetail'>;
};

export default function CooperationAndSolutionPartners({route}: ScreenProps) {
  const {profile} = route.params;
  return (
    <ProfileLayout user={profile}>
      <View style={styles.screenContainer}>
        <Text style={styles.screenTitle}>İşbirliği ve Çözüm Ortakları</Text>

        {PARTNERS.map((member, index) => (
          <View key={index} style={styles.member}>
            <Image source={{uri: member?.logo}} style={styles.logo} />
            <Text style={styles.memberTitle}>{member.partnerTitle}</Text>
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

const PARTNERS = [
  {
    id: 1,
    logo: 'https://pbs.twimg.com/profile_images/869696150659584000/fO_RHSZe_400x400.jpg',
    partnerTitle: 'Çözüm Ortağı Başlığı',
  },
  {
    id: 1,
    logo: 'https://pbs.twimg.com/profile_images/869696150659584000/fO_RHSZe_400x400.jpg',
    partnerTitle: 'Çözüm Ortağı Başlığı',
  },
  {
    id: 1,
    logo: 'https://pbs.twimg.com/profile_images/869696150659584000/fO_RHSZe_400x400.jpg',
    partnerTitle: 'Çözüm Ortağı Başlığı',
  },
  {
    id: 1,
    logo: 'https://pbs.twimg.com/profile_images/869696150659584000/fO_RHSZe_400x400.jpg',
    partnerTitle: 'Çözüm Ortağı Başlığı',
  },
  {
    id: 1,
    logo: 'https://pbs.twimg.com/profile_images/869696150659584000/fO_RHSZe_400x400.jpg',
    partnerTitle: 'Çözüm Ortağı Başlığı',
  },
  {
    id: 1,
    logo: 'https://pbs.twimg.com/profile_images/869696150659584000/fO_RHSZe_400x400.jpg',
    partnerTitle: 'Çözüm Ortağı Başlığı',
  },
];
