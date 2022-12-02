import {ProfileScreenNavigationProps, UserProfileRoute} from '@routes/stacks/profile/Types';
import React from 'react';
import {ActivityIndicator, Alert, Linking, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {RootState} from '@store/RootStore';

import ProfileLayout from './layouts/ProfileLayout';
import ProfileRouteButtons from './components/UserProfileButtons';
import {logOut} from '@store/user/UserSlice';
import AsyncStorage from '@react-native-community/async-storage';
import {USER_INFO_STORAGE_KEY} from '../../constants';
import {ProfilePageLink, useGetProfileLinksQuery} from './ProfileGetApi';

const mapPageNameToStackName = {
  Profile: 'profileInformation',
  ChangePassword: undefined,
  Messages: 'messagesContainer',
  Index: undefined,
  Memberships: undefined,
  Biography: 'aboutUser',
  Expertise: undefined,
  Gallery: 'userGallery',
  Articles: 'userArticles',
  Videos: undefined,
  Sertifikalar: 'userCertificates',
};
export default function Profile({navigation}: ProfileScreenNavigationProps) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  console.log('Profile.user:', user);
  const {data: profile, isLoading} = useGetProfileLinksQuery();
  console.log('profile links response: ', profile);

  const handleSignOut = () => {
    console.log('Handle sign out');
    AsyncStorage.removeItem(USER_INFO_STORAGE_KEY)
      .then(() => {
        dispatch(logOut());
        navigation.navigate('home');
      })
      .catch(() => {
        Alert.alert('Bir sorun oluştu', 'Lütfen tekrar çıkış yapmayı deneyiniz');
      });
  };

  if (isLoading) {
    return (
      <View style={styles.fCenter}>
        <ActivityIndicator size="small" color="black" />
      </View>
    );
  }

  const navigateToPage = (pressedRoute: ProfilePageLink) => {
    const pageStackName = mapPageNameToStackName[pressedRoute.pageName];
    if (pageStackName) {
      navigation.navigate(pageStackName);
    } else {
      Linking.openURL(pressedRoute.url);
    }
  };

  if (profile?.linkler) {
    return (
      <ProfileLayout
        user={profile!}
        onPressMessages={() => navigation.navigate('messagesContainer')}>
        <ProfileRouteButtons
          routeButtons={profile?.linkler}
          onPressRoute={navigateToPage}
          onPressSignOut={handleSignOut}
        />
      </ProfileLayout>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  fCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// base URL for images
// https://arabulucuara.com/uploaded/UserImage/55168eff-df91-430c-ac6b-aaf782db5572.jpg
