import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SearchNavigatorParamList} from '@routes/stacks/search/types';

import ProfileLayout from '@components/layouts/ProfileLayout';
import {OnlyPersonIcon} from '@icons';
import {Fonts, Metrics} from '@utils';

type ScreenProps = {
  route: RouteProp<SearchNavigatorParamList, 'profileDetail'>;
  navigation: StackNavigationProp<SearchNavigatorParamList, 'search'>;
};

export default function MediationCenterMembers({route, navigation}) {
  const {profile} = route.params;

  return (
    <ProfileLayout navigation={navigation} user={profile}>
      <View style={styles.screenContainer}>
        <Text style={styles.screenTitle}>Makaleler</Text>

        {MEMBERS.map((member, index) => (
          <View key={index} style={styles.member}>
            <Text style={styles.memberTitle}>{member.nameSurname}</Text>
            <Text style={styles.memberProfessionLabel}>{member.profession}</Text>
            <View style={styles.type}>
              <OnlyPersonIcon width={15} height={17} />
              <Text style={styles.memberTypeLabel}>{member.type}</Text>
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

  member: {
    marginBottom: 20,
    paddingVertical: 16,
    paddingHorizontal: 20,
    width: Metrics.CONTAINER_WIDTH,
    borderRadius: 10,
    backgroundColor: '#F5F6FA',
  },

  memberTitle: {
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },

  memberProfessionLabel: {
    paddingBottom: 8,
    fontSize: 12,
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
  },

  type: {
    flexDirection: 'row',
  },

  memberTypeLabel: {
    paddingTop: 2,
    paddingLeft: 7,
    fontSize: 12,
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
  },
});

const MEMBERS = [
  {
    id: 1,
    nameSurname: 'Sevil KOYUNCU',
    profession: 'Arabulucu Avukat',
    type: 'Kurucu',
  },
  {
    id: 1,
    nameSurname: 'Didem KOÇAKER GÜLER',
    profession: 'Arabulucu Avukat',
    type: 'Kurucu',
  },
  {
    id: 1,
    nameSurname: 'Sevil KOYUNCU',
    profession: 'Arabulucu Avukat',
    type: 'Kurucu',
  },
  {
    id: 1,
    nameSurname: 'Didem KOÇAKER GÜLER',
    profession: 'Arabulucu Avukat',
    type: 'Kurucu',
  },
  {
    id: 1,
    nameSurname: 'Sevil KOYUNCU',
    profession: 'Arabulucu Avukat',
    type: 'Kurucu',
  },
  {
    id: 1,
    nameSurname: 'Didem KOÇAKER GÜLER',
    profession: 'Arabulucu Avukat',
    type: 'Kurucu',
  },
  {
    id: 1,
    nameSurname: 'Sevil KOYUNCU',
    profession: 'Arabulucu Avukat',
    type: 'Kurucu',
  },
  {
    id: 1,
    nameSurname: 'Didem KOÇAKER GÜLER',
    profession: 'Arabulucu Avukat',
    type: 'Kurucu',
  },
];
