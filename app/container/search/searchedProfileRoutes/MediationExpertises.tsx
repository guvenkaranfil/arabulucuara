import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {SearchNavigatorParamList} from '@routes/stacks/search/types';

import ProfileLayout from '@components/layouts/ProfileLayout';
import {Fonts, Metrics} from '@utils';

interface Mediation {
  id: number;
  name: string;
}

type ScreenProps = {
  mediationExpertises: Array<Mediation>;
  route: RouteProp<SearchNavigatorParamList, 'profileDetail'>;
};

export default function MediationExpertises({route}: ScreenProps) {
  const {profile, member} = route.params;

  return (
    <ProfileLayout user={profile}>
      <View style={styles.screenContainer}>
        <Text style={styles.screenTitle}>Arabuluculuk Uzmanlık Alanları</Text>

        {member.uzmanlikAlanlari &&
          member.uzmanlikAlanlari?.length > 0 &&
          member.uzmanlikAlanlari.map((area, index) => (
            <View key={index} style={styles.expertiseArea}>
              {index + 1 !== EXPERTISE_AREAS.length ? (
                <View style={styles.stripe}>
                  <View style={styles.actionBorder} />
                </View>
              ) : (
                <View style={[styles.stripe, styles.latestStripe]}>
                  <View style={[styles.actionBorder]} />
                </View>
              )}

              <Text style={styles.areaLabel}>{area}</Text>
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

  expertiseArea: {
    flexDirection: 'row',
    width: '100%',
    minHeight: 50,
  },

  areaLabel: {
    paddingLeft: 18,
    maxWidth: Metrics.DEVICE_WIDTH - 50 - 70,
  },

  stripe: {
    marginLeft: 8,
    width: 1,
    paddingBottom: 24,
    backgroundColor: '#B3B3B3',
  },

  actionBorder: {
    left: -6,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#F4E1F0',
  },

  latestStripe: {
    height: 12,
    paddingBottom: 0,
  },
});

const EXPERTISE_AREAS = [
  {
    id: 1,
    name: 'Genel Arabuluculuk',
  },
  {
    id: 1,
    name: 'İş Hukuku Genel Uzmanlık Alanıİş Hukuku Genel Uzmanlık Alanı',
  },
  {
    id: 1,
    name: 'Ticaret Hukuku Genel Uzmanlık Alanı',
  },
  {
    id: 1,
    name: 'Banka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık Alanı',
  },
  {
    id: 1,
    name: 'Genel Arabuluculuk',
  },
  {
    id: 1,
    name: 'İş Hukuku Genel Uzmanlık Alanı',
  },
  {
    id: 1,
    name: 'Ticaret Hukuku Genel Uzmanlık Alanı',
  },
  {
    id: 1,
    name: 'Banka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık Alanı',
  },
  {
    id: 1,
    name: 'Genel Arabuluculuk',
  },
  {
    id: 1,
    name: 'İş Hukuku Genel Uzmanlık Alanı',
  },
  {
    id: 1,
    name: 'Ticaret Hukuku Genel Uzmanlık Alanı',
  },
  {
    id: 1,
    name: 'Banka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık Alanı',
  },
  {
    id: 1,
    name: 'Genel Arabuluculuk',
  },
  {
    id: 1,
    name: 'İş Hukuku Genel Uzmanlık Alanı',
  },
  {
    id: 1,
    name: 'Ticaret Hukuku Genel Uzmanlık Alanı',
  },
  {
    id: 1,
    name: 'Banka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık AlanıBanka ve Finans Hukuku Özel Uzmanlık Alanı',
  },
];
