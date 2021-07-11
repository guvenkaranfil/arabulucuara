import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Alert} from 'react-native';

import AuthStack from './stacks/auth/AuthStack';
import HomeNavigator from './stacks/home/HomeNavigator';
import SearchNavigator from './stacks/search/SearchNavigator';
import PortalNavigator from './stacks/portal/PortalNavigator';
import ProfileNavigator from './stacks/profile/ProfileNavigator';

import TabBar from './components/TabBar';
import {tabBarOptions, homeOptions, portalOptions, searchOptions, profileOptions} from './Config';
import {useSelector} from 'react-redux';
import {isUserLoggedIn} from '@selectors';

const Tab = createBottomTabNavigator();
export default function AppNavigator() {
  const haveUser = useSelector(isUserLoggedIn);

  return !haveUser ? (
    <AuthStack />
  ) : (
    <Tab.Navigator tabBarOptions={tabBarOptions} tabBar={TabBar}>
      <Tab.Screen name="home" component={HomeNavigator} options={homeOptions} />
      <Tab.Screen name="search" component={SearchNavigator} options={searchOptions} />
      <Tab.Screen name="portal" component={PortalNavigator} options={portalOptions} />
      <Tab.Screen
        name="profile"
        component={ProfileNavigator}
        options={profileOptions}
        listeners={({navigation, route}) => ({
          tabPress: e => {
            if (!haveUser) {
              // Prevent default action
              e.preventDefault();
              return Alert.alert(
                'Lütfen Dikkat',
                'Profil Sayfasını açmak için giriş yapmalısınız!',
                [{text: 'Vazgeç'}, {text: 'Giriş Yap'}, {text: 'Kayıt Ol'}],
              );
            }

            // Do something with the `navigation` object
            navigation.navigate(route.name);
          },
        })}
      />
    </Tab.Navigator>
  );
}
