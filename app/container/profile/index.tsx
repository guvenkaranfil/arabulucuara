import {ProfileScreenNavigationProps} from '@routes/stacks/profile/Types';
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
import {Fonts, Metrics} from '@utils';
import FilledButton from '@components/buttons/FilledButton';
import {useGetMemberQuery} from '@search/searchApi';

const mapPageNameToStackName = {
  Profile: 'profileInformation',
  ChangePassword: undefined,
  Messages: 'messagesContainer',
  Index: undefined,
  Memberships: 'membership',
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
  const {data: profile, isLoading} = useGetProfileLinksQuery();

  console.log('user.username:', user.username);
  const {data: member, isLoading: isLoadingMember} = useGetMemberQuery({username: user.username!});
  console.log('member.meslekler: ', member?.meslekler);

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
        jobs={member?.meslekler}
        onPressMessages={() => navigation.navigate('messagesContainer')}>
        <ProfileRouteButtons
          routeButtons={profile?.linkler}
          onPressRoute={navigateToPage}
          onPressSignOut={handleSignOut}
          goToCompleteProfile={() => navigation.navigate('auth')}
        />
      </ProfileLayout>
    );
  }

  return (
    <ProfileLayout
      user={profile!}
      onPressMessages={() => navigation.navigate('messagesContainer')}
      jobs={member?.meslekler}>
      <View style={styles.routeButtons}>
        <FilledButton
          style={styles.routeButton}
          label={'Çıkış Yap'}
          labelStyle={styles.routeLabel}
          onPress={handleSignOut}
        />
      </View>
    </ProfileLayout>
  );
}

const styles = StyleSheet.create({
  fCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  routeButtons: {
    marginVertical: 35,
    marginLeft: Metrics.horizontalContainerPadding,
    width: Metrics.CONTAINER_WIDTH,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  routeButton: {
    marginBottom: 15,
    paddingLeft: 21,
    alignItems: 'flex-start',
    height: 55,
    backgroundColor: '#E1E3E9',
  },

  routeLabel: {
    fontSize: 16,
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
  },
});

// base URL for images
// https://arabulucuara.com/uploaded/UserImage/55168eff-df91-430c-ac6b-aaf782db5572.jpg
