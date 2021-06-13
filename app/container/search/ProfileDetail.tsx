import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SearchNavigatorParamList} from '@routes/stacks/search/types';

import ProfileLayout from '@components/layouts/ProfileLayout';
import {Fonts, Metrics} from '@utils';
import ProfileRouteButtons from './components/ProfileRouteButtons';
import {INDIVIDUAL_MEDIATOR_ROUTES, MEDIATOR_CENTER_ROUTES} from './helpers/ProflieRoutes';

interface ScreenProps {
  route: RouteProp<SearchNavigatorParamList, 'profileDetail'>;
  navigation: StackNavigationProp<SearchNavigatorParamList, 'search'>;
}

export default function ProfileDetail({route, navigation}: ScreenProps) {
  const {profile} = route.params;
  console.log('profile:', profile);

  return (
    <ProfileLayout navigation={navigation} user={profile}>
      <>
        <View style={styles.actionButtons}>
          <Pressable style={styles.actionButton}>
            <Text style={styles.actionLabel}>İletişim Bilgileri</Text>
          </Pressable>

          <Pressable style={styles.actionButton}>
            <Text style={styles.actionLabel}>Mesaj Gönder</Text>
          </Pressable>
        </View>

        <ProfileRouteButtons
          navigation={navigation}
          routeButtons={
            profile.accountType === 'individualCenter'
              ? INDIVIDUAL_MEDIATOR_ROUTES
              : MEDIATOR_CENTER_ROUTES
          }
        />
      </>
    </ProfileLayout>
  );
}

const styles = StyleSheet.create({
  actionButtons: {
    marginLeft: Metrics.horizontalContainerPadding,
    flexDirection: 'row',
    width: Metrics.CONTAINER_WIDTH,
    justifyContent: 'space-between',
  },

  actionButton: {
    marginTop: 35,
    paddingHorizontal: 30,
    paddingVertical: 7,
    borderRadius: 10,
    backgroundColor: '#7E0736',
  },

  actionLabel: {
    fontSize: 14,
    fontFamily: Fonts.robotoLight,
    color: '#fff',
  },
});
