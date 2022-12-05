import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SearchNavigatorParamList} from '@routes/stacks/search/types';

import ProfileLayout from '@components/layouts/ProfileLayout';
import {Constants, Fonts} from '@utils';

interface ScreenProps {
  route: RouteProp<SearchNavigatorParamList, 'centerMembers'>;
  navigation: StackNavigationProp<SearchNavigatorParamList, 'centerMembers'>;
}

export default function CenterMembers({route, navigation}: ScreenProps) {
  const {profile, member} = route.params;

  return (
    <ProfileLayout
      user={profile}
      onPressMessages={() => navigation.navigate('profile', {screen: 'messagesContainer'})}>
      <View style={styles.container}>
        <Text style={styles.title}>Üyelikler</Text>

        <View style={styles.header}>
          <View style={styles.headerItem}>
            <Text style={styles.pointTitle}>Pozisyon</Text>
          </View>

          <View style={[styles.headerItem, styles.otherItem]}>
            <Text style={styles.pointTitle}>Adı Soyadı</Text>
          </View>

          <View style={[styles.headerItem, styles.otherItem, styles.meslek]}>
            <Text style={styles.pointTitle}>Meslek</Text>
          </View>
        </View>

        {member.merkezUyeler?.length > 0 &&
          member.merkezUyeler?.map((member, index) => (
            <View style={styles.items}>
              <View style={styles.positionItem}>
                <Image
                  source={{uri: Constants.USER_IMAGE + member.image}}
                  style={styles.memberImage}
                />
                <Text style={[styles.itemTitle, styles.pl8]}>{member.pozisyon}</Text>
              </View>

              <View style={[styles.positionItem, styles.otherItem]}>
                <Text style={styles.itemTitle}>
                  {member.adi} {member.soyadi}
                </Text>
              </View>

              <View style={[styles.positionItem, styles.otherItem, styles.meslek]}>
                <Text style={styles.itemTitle}>{member.meslek}</Text>
              </View>
            </View>
          ))}
      </View>
    </ProfileLayout>
  );
}

const styles = StyleSheet.create({
  pl8: {paddingLeft: 8},

  container: {
    flex: 1,
    padding: 16,
  },

  pointTitle: {
    fontSize: 14,
    fontFamily: Fonts.robotoMedium,
    color: '#181C32',
  },

  title: {
    textAlign: 'center',
    paddingBottom: 32,
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },

  header: {
    height: 40,
    flexDirection: 'row',
  },

  headerItem: {
    flex: 1,
  },

  items: {
    marginBottom: 20,
    flexDirection: 'row',
  },

  positionItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  memberImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'contain',
  },

  itemTitle: {
    fontSize: 14,
    fontFamily: Fonts.robotoRegular,
  },

  otherItem: {
    flex: 0.8,
  },

  meslek: {
    marginLeft: 20,
    // justifyContent: 'center',
  },
});
