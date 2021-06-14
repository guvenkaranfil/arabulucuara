import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProfileNavigatorParamList} from './Types';

import Profile from '@profile/index';
import ProfileInformation from '@profile/ProfileInformation';
import AboutUser from '@profile/AboutUser';
import UserCertificates from '@profile/UserCertificates';

import LoggedUserHeader from '../../components/LoggedUserHeader';
import {aboutUser, profileInformation, userCertificates} from './StackOptionts';

const Stack = createStackNavigator<ProfileNavigatorParamList>();
function ProfileNavigator() {
  return (
    <Stack.Navigator screenOptions={{header: LoggedUserHeader}}>
      <Stack.Screen name="profile" component={Profile} options={{headerShown: false}} />
      <Stack.Screen
        name="profileInformation"
        component={ProfileInformation}
        options={profileInformation}
      />
      <Stack.Screen name="aboutUser" component={AboutUser} options={aboutUser} />
      <Stack.Screen
        name="userCertificates"
        component={UserCertificates}
        options={userCertificates}
      />
    </Stack.Navigator>
  );
}

export default ProfileNavigator;
