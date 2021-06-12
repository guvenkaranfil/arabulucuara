import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Search from '@search/index';
import SearchResult from '@search/SearchResult';

import {SearchNavigatorParamList} from './types';

const Stack = createStackNavigator<SearchNavigatorParamList>();
function PortalNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="search" component={Search} />
      <Stack.Screen name="searchResult" component={SearchResult} />
    </Stack.Navigator>
  );
}

export default PortalNavigator;
