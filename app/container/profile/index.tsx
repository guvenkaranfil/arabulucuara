import {ProfileScreenNavigationProps, UserProfileRoute} from '@routes/stacks/profile/Types';
import React from 'react';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';

import ProfileLayout from '@components/layouts/ProfileLayout';
import ProfileRouteButtons from './components/UserProfileButtons';
import {logOut} from '@store/user/UserSlice';
import AsyncStorage from '@react-native-community/async-storage';
import {USER_INFO_STORAGE_KEY} from '../../constants';

export default function Profile({navigation}: ProfileScreenNavigationProps) {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    console.log('Handle sign out');
    AsyncStorage.removeItem(USER_INFO_STORAGE_KEY)
      .then(() => {
        dispatch(logOut());
        // TODO: check type error to fix
        navigation.navigate('home');
      })
      .catch(() => {
        Alert.alert('Bir sorun oluştu', 'Lütfen tekrar çıkış yapmayı deneyiniz');
      });
  };

  return (
    <ProfileLayout user={user} onPressMessages={() => navigation.navigate('messagesContainer')}>
      <ProfileRouteButtons
        routeButtons={userProfileRoutes}
        onPressRoute={(pressedRoute: UserProfileRoute) =>
          navigation.navigate(pressedRoute.stackName)
        }
        onPressSignOut={handleSignOut}
      />
    </ProfileLayout>
  );
}

const user = {
  id: 1,
  accountType: 'individualCenter',
  profilePhoto:
    'https://arabulucuara.com/uploaded/UserImage/0686a091-4571-4db1-ac9a-c8ebf967e984.jpg',
  nameSurname: 'Sevil KOYUNCU',
  userType: 'Arabulucu',
  location: 'Osmangazi - Bursa',
  profession: 'Avukat',
  rate: 5,
};

const userProfileRoutes: Array<UserProfileRoute> = [
  {
    label: 'Profile Bilgileri',
    stackName: 'profileInformation',
  },
  {
    label: 'Hakkımda',
    stackName: 'aboutUser',
  },
  {
    label: 'Seminer & Eğitim ve Sertifikalar',
    stackName: 'userCertificates',
  },
  {
    label: 'Makaleler',
    stackName: 'userArticles',
  },
  {
    label: 'Galeri',
    stackName: 'userGallery',
  },
];

// base URL for images
// https://arabulucuara.com/uploaded/UserImage/55168eff-df91-430c-ac6b-aaf782db5572.jpg
