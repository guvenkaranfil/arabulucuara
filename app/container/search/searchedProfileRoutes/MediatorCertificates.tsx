import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {SearchNavigatorParamList} from '@routes/stacks/search/types';

import ProfileLayout from '@components/layouts/ProfileLayout';
import {CalendarIcon} from '@icons';
import {CommonStyles, Fonts, Metrics} from '@utils';

type ScreenProps = {
  route: RouteProp<SearchNavigatorParamList, 'mediatorCertificates'>;
};

export default function MediatorCertificates({route}: ScreenProps) {
  const {profile, member} = route.params;

  if (member?.belgeler && member?.belgeler?.length > 0) {
    return (
      <ProfileLayout user={profile}>
        <View style={styles.screenContainer}>
          <Text style={styles.screenTitle}>Seminer & Eğitim ve Sertifikalar</Text>

          {member.belgeler.map((certificate, index) => (
            <View key={index} style={styles.certificate}>
              <Text style={styles.certificateTitle}>{certificate.konu}</Text>
              <Text style={styles.cooparateLabel}>{certificate.kurum}</Text>
              <View style={styles.date}>
                <CalendarIcon width={15} height={17} />
                <Text style={styles.yearLabel}>{certificate.yil}</Text>
              </View>
            </View>
          ))}
        </View>
      </ProfileLayout>
    );
  }

  return (
    <ProfileLayout user={profile}>
      <View style={CommonStyles.searchEmptyPage}>
        <Text>Sertifika bulunamadı</Text>
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

  certificate: {
    marginBottom: 20,
    paddingVertical: 16,
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
