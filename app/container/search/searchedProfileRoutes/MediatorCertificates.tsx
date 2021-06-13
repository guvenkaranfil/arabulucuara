import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SearchNavigatorParamList} from '@routes/stacks/search/types';

import ProfileLayout from '@components/layouts/ProfileLayout';
import {CalendarIcon} from '@icons';
import {Fonts, Metrics} from '@utils';

type ScreenProps = {
  route: RouteProp<SearchNavigatorParamList, 'profileDetail'>;
  navigation: StackNavigationProp<SearchNavigatorParamList, 'search'>;
};

export default function MediatorCertificates({route, navigation}: ScreenProps) {
  const {profile} = route.params;

  return (
    <ProfileLayout navigation={navigation} user={profile}>
      <View style={styles.screenContainer}>
        <Text style={styles.screenTitle}>Makaleler</Text>

        {CERTIFICATES.map((certificate, index) => (
          <View key={index} style={styles.certificate}>
            <Text style={styles.certificateTitle}>{certificate.title}</Text>
            <Text style={styles.cooparateLabel}>{certificate.cooparate}</Text>
            <View style={styles.date}>
              <CalendarIcon width={15} height={17} />
              <Text style={styles.yearLabel}>{certificate.year}</Text>
            </View>
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

const CERTIFICATES = [
  {
    id: 1,
    title: 'İŞ HUKUKU UZMAN ARABULUCULUK',
    cooparate: 'ULUDAĞ ÜNİVERSİTESİ',
    year: 2018,
  },
  {
    id: 1,
    title: 'İŞ HUKUKU UZMAN ARABULUCULUK',
    cooparate: 'ULUDAĞ ÜNİVERSİTESİ',
    year: 2018,
  },
  {
    id: 1,
    title: 'İŞ HUKUKU UZMAN ARABULUCULUK',
    cooparate: 'ULUDAĞ ÜNİVERSİTESİ',
    year: 2018,
  },
  {
    id: 1,
    title: 'İŞ HUKUKU UZMAN ARABULUCULUK',
    cooparate: 'ULUDAĞ ÜNİVERSİTESİ',
    year: 2018,
  },
  {
    id: 1,
    title: 'İŞ HUKUKU UZMAN ARABULUCULUK',
    cooparate: 'ULUDAĞ ÜNİVERSİTESİ',
    year: 2018,
  },
  {
    id: 1,
    title: 'İŞ HUKUKU UZMAN ARABULUCULUK',
    cooparate: 'ULUDAĞ ÜNİVERSİTESİ',
    year: 2018,
  },
];
