import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Search from '@search/index';
import SearchResult from '@search/SearchResult';
import SeekMediator from '@search/SeekMediator';
import SearchExpertMediator from '@search/SearchExpertMediator';
import SearchMediationCenter from '@search/SearchMediationCenter';

import {SearchNavigatorParamList} from './types';
import LoggedUserHeader from '../../components/LoggedUserHeader';

const Stack = createStackNavigator<SearchNavigatorParamList>();
function PortalNavigator() {
  const isUserLoggedIn = true;

  return (
    <Stack.Navigator screenOptions={{header: isUserLoggedIn && LoggedUserHeader}}>
      <Stack.Screen name="search" component={Search} />
      <Stack.Screen name="searchResult" component={SearchResult} />
      <Stack.Screen
        name="seekMediator"
        component={SeekMediator}
        options={{title: 'Arabulucu Ara'}}
      />
      <Stack.Screen
        name="expertMediator"
        component={SearchExpertMediator}
        options={{title: 'Uzman Arabulucu Ara'}}
      />
      <Stack.Screen
        name="mediationCenter"
        component={SearchMediationCenter}
        options={{title: 'Arabuluculuk Merkezi Ara'}}
      />
    </Stack.Navigator>
  );
}

export default PortalNavigator;
