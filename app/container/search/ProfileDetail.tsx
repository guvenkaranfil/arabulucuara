import React from 'react';
import {View, Text} from 'react-native';

import ProfileLayout from '@components/layouts/ProfileLayout';
import {CommonStyles} from '@utils';

export default function ProfileDetail({route, navigation}) {
  const {profile} = route.params;
  console.log('profile:', profile);

  return (
    <ProfileLayout navigation={navigation} user={profile}>
      <View style={{height: 1000}}>
        <Text>Hakkımda</Text>
      </View>
    </ProfileLayout>
  );
}
