import {ProfileScreenNavigationProps, UserProfileRoute} from '@routes/stacks/profile/Types';
import React from 'react';

import ProfileLayout from '@components/layouts/ProfileLayout';
import ProfileRouteButtons from './components/UserProfileButtons';

export default function Profile({navigation}: ProfileScreenNavigationProps) {
  return (
    <ProfileLayout user={user}>
      <ProfileRouteButtons
        routeButtons={userProfileRoutes}
        onPressRoute={(pressedRoute: UserProfileRoute) =>
          navigation.navigate(pressedRoute.stackName)
        }
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
];
