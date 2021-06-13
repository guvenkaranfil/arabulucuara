import {ProfileScreenNavigationProps} from '@routes/stacks/profile/Types';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import ProfileLayout from '@components/layouts/ProfileLayout';

export default function Profile({navigation}: ProfileScreenNavigationProps) {
  return (
    <ProfileLayout user={user}>
      <Text>asdfsa</Text>
    </ProfileLayout>
  );
}

const styles = StyleSheet.create({});

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
