import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SearchNavigatorParamList} from '@routes/stacks/search/types';

import ProfileLayout from '@components/layouts/ProfileLayout';
import {Fonts, Metrics} from '@utils';
import ProfileRouteButtons from './components/ProfileRouteButtons';
import {
  INDIVIDUAL_MEDIATOR_ROUTES,
  MEDIATOR_CENTER_ROUTES,
  ProfileRoute,
} from './helpers/ProflieRoutes';

interface ScreenProps {
  route: RouteProp<SearchNavigatorParamList, 'profileDetail'>;
  navigation: StackNavigationProp<SearchNavigatorParamList, 'search'>;
}

export default function ProfileDetail({route, navigation}: ScreenProps) {
  const {profile} = route.params;

  const [showContactInformations, setshowContactInformations] = useState(false);

  const _renderContactInformations = () => {
    if (showContactInformations) {
      return (
        <Animatable.View style={styles.contactInformations} animation="fadeIn">
          <Text style={styles.contactLabel}>{CONTACT_INFORMATIONS.mail}</Text>
          <Text style={styles.contactLabel}>{CONTACT_INFORMATIONS.phone}</Text>
          <Text style={styles.contactLabel}>{CONTACT_INFORMATIONS.location}</Text>
        </Animatable.View>
      );
    }
  };

  return (
    <ProfileLayout user={profile}>
      <>
        <View style={styles.actionButtons}>
          <Pressable
            style={styles.actionButton}
            onPress={() => setshowContactInformations(prev => !prev)}>
            <Text style={styles.actionLabel}>İletişim Bilgileri</Text>
          </Pressable>

          <Pressable style={styles.actionButton}>
            <Text style={styles.actionLabel}>Mesaj Gönder</Text>
          </Pressable>
        </View>

        {_renderContactInformations()}

        <ProfileRouteButtons
          routeButtons={
            profile.accountType === 'individualCenter'
              ? INDIVIDUAL_MEDIATOR_ROUTES
              : MEDIATOR_CENTER_ROUTES
          }
          onPressRoute={(pressedRoute: ProfileRoute) =>
            navigation.navigate(pressedRoute.stackName, {profile})
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

  contactInformations: {
    marginTop: 15,
    marginLeft: Metrics.horizontalContainerPadding,
    width: Metrics.CONTAINER_WIDTH,
    justifyContent: 'center',
  },

  contactLabel: {
    paddingTop: 8,
    fontSize: 14,
    fontFamily: Fonts.robotoMedium,
    color: '#181C32',
  },
});

const CONTACT_INFORMATIONS = {
  mail: 'info@arabuluculukmerkezi.com',
  phone: '(312) 473 3960',
  location: 'Ankara / Çankaya',
};
