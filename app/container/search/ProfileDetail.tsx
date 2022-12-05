import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Linking} from 'react-native';
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
import {SearchPage, useGetMemberQuery} from './searchApi';
import FullScreenLoader from '@components/loader/FullScreenLoader';

interface ScreenProps {
  route: RouteProp<SearchNavigatorParamList, 'profileDetail'>;
  navigation: StackNavigationProp<SearchNavigatorParamList, 'search'>;
}

const mapPageNameToStackName = {
  hakkimizda: 'aboutProfile',
  hakkimda: 'aboutProfile',
  MerkezUyeler: 'centerMembers',
  CozumOrtaklari: 'cooperationAndSolutionPartners',
  MerkezUzmanlik: 'mediationExpertises',
  MerkezMakaleler: 'mediatorArticles',
  ArabulucuMakaleler: 'mediatorArticles',
  ArabulucuBelgeler: 'mediatorCertificates',
  galeri: 'mediatorGallery',
};
export default function ProfileDetail({route, navigation}: ScreenProps) {
  const {profile} = route.params;
  console.log('profile: ', profile);

  const [showContactInformations, setshowContactInformations] = useState(false);
  const {data: member, isLoading} = useGetMemberQuery({username: profile.uri.value});
  console.log('member informations: ', member);

  console.log('Profile..');

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

  const onPressRouteButton = (pressedRoute: SearchPage) => {
    const stackName = mapPageNameToStackName[pressedRoute.pageName];

    if (stackName) {
      navigation.navigate(stackName!, {
        profile,
        member: member,
      });
    } else {
      Linking.openURL(pressedRoute.url);
    }
  };

  return (
    <ProfileLayout
      user={profile}
      onPressMessages={() => navigation.navigate('profile', {screen: 'messagesContainer'})}>
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

        {isLoading ? (
          <FullScreenLoader />
        ) : (
          member?.linkler && (
            <ProfileRouteButtons routeButtons={member.linkler} onPressRoute={onPressRouteButton} />
          )
        )}
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
