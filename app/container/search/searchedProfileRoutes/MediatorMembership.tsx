import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {SearchNavigatorParamList} from '@routes/stacks/search/types';

import ProfileLayout from '@components/layouts/ProfileLayout';
import {CommonStyles, Fonts, Metrics} from '@utils';

type ScreenProps = {
  route: RouteProp<SearchNavigatorParamList, 'mediatorCertificates'>;
};

export default function MediatorMembership({route}: ScreenProps) {
  const {profile, member} = route.params;

  if (member?.uyelikler && member?.uyelikler?.length > 0) {
    return (
      <ProfileLayout user={profile}>
        <View style={styles.screenContainer}>
          <Text style={styles.screenTitle}>Makaleler</Text>

          {member.uyelikler.map((certificate, index) => (
            <View key={index} style={styles.certificate}>
              <Text style={styles.certificateTitle}>{certificate.name}</Text>
              <Text style={styles.cooparateLabel}>{certificate.value}</Text>
            </View>
          ))}
        </View>
      </ProfileLayout>
    );
  }

  return (
    <View style={CommonStyles.fCenter}>
      <Text>Sertifika bulunamadı</Text>
    </View>
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

  certificate: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    width: Metrics.CONTAINER_WIDTH,
    borderRadius: 10,
    backgroundColor: '#F5F6FA',
  },

  certificateTitle: {
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },

  cooparateLabel: {
    paddingBottom: 8,
    fontSize: 12,
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
  },

  date: {
    flexDirection: 'row',
  },

  yearLabel: {
    paddingLeft: 7,
    fontSize: 12,
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
  },
});
