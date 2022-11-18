import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProfileNavigatorParamList} from './Types';

import Profile from '@profile/index';
import ProfileInformation from '@profile/ProfileInformation';
import AboutUser from '@profile/AboutUser';
import UserCertificates from '@profile/UserCertificates';
import UserArticles from '@profile/UserArticles';
import UserGallery from '@profile/UserGallery';

import LoggedUserHeader from '../components/LoggedUserHeader';
import {
  aboutUser,
  messageDetail,
  messagesContainer,
  profileInformation,
  userArticles,
  userCertificates,
  userGallery,
} from './StackOptionts';
import MessagesTopNavigator from './MessagesTopNavigator';
import MessageDetail from '@profile/messages/MessageDetail';

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
      <Stack.Screen name="userArticles" component={UserArticles} options={userArticles} />
      <Stack.Screen name="userGallery" component={UserGallery} options={userGallery} />
      <Stack.Screen
        name="messagesContainer"
        component={MessagesTopNavigator}
        options={messagesContainer}
      />
      <Stack.Screen name="messageDetail" component={MessageDetail} options={messageDetail} />
    </Stack.Navigator>
  );
}

export default ProfileNavigator;
