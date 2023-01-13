import * as React from 'react';
import {Alert} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeNavigator from './home/HomeNavigator';
import SearchNavigator from './search/SearchNavigator';
import PortalNavigator from './portal/PortalNavigator';
import ProfileNavigator from './profile/ProfileNavigator';

import TabBar from './components/TabBar';
import {tabBarOptions, homeOptions, portalOptions, searchOptions, profileOptions} from './Config';
import {useSelector} from 'react-redux';
import {isUserLoggedIn} from '@selectors';

const Tab = createBottomTabNavigator();

const AppStack = () => {
  const haveUser = useSelector(isUserLoggedIn);

  return (
    <Tab.Navigator tabBarOptions={tabBarOptions} tabBar={TabBar} initialRouteName="search">
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
                [
                  {text: 'Vazgeç'},
                  {text: 'Giriş Yap', onPress: () => navigation.navigate('auth')},
                  {
                    text: 'Kayıt Ol',
                    onPress: () => navigation.navigate('auth', {screen: 'registerIdentities'}),
                  },
                ],
              );
            }

            // Do something with the `navigation` object
            navigation.navigate(route.name);
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
