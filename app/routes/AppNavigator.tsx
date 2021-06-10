import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AuthStack from './stacks/auth/AuthStack';
import HomeNavigator from './stacks/home/HomeNavigator';
import SearchNavigator from './stacks/search/SearchNavigator';
import PortalNavigator from './stacks/portal/PortalNavigator';

import TabBar from './components/TabBar';
import {tabBarOptions, homeOptions, portalOptions, searchOptions} from './Config';

const Tab = createBottomTabNavigator();
export default function AppNavigator() {
  const showLoginFlow = false;

  return showLoginFlow ? (
    <AuthStack />
  ) : (
    <Tab.Navigator tabBarOptions={tabBarOptions} tabBar={TabBar} initialRouteName="portal">
      <Tab.Screen name="home" component={HomeNavigator} options={homeOptions} />
      <Tab.Screen name="search" component={SearchNavigator} options={searchOptions} />
      <Tab.Screen name="portal" component={PortalNavigator} options={portalOptions} />
    </Tab.Navigator>
  );
}
