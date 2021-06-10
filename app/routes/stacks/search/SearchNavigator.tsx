import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Search from '@search/index';

import NotLoggedUserHeader from '../../components/NotLoggedUserHeader';
import LoggedUserHeader from '../../components/LoggedUserHeader';
import {SearchNavigatorParamList} from './types';

const Stack = createStackNavigator<SearchNavigatorParamList>();
function PortalNavigator() {
  const isUserLoggedIn = false;

  return (
    <Stack.Navigator screenOptions={{header: NotLoggedUserHeader}}>
      <Stack.Screen
        name="search"
        component={Search}
        options={{header: isUserLoggedIn ? LoggedUserHeader : NotLoggedUserHeader}}
      />
    </Stack.Navigator>
  );
}

export default PortalNavigator;
