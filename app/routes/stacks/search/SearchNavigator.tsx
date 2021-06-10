import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Search from '@search/index';

import LoggedUserHeader from '../../components/LoggedUserHeader';
import {SearchNavigatorParamList} from './types';

const Stack = createStackNavigator<SearchNavigatorParamList>();
function PortalNavigator() {
  return (
    <Stack.Navigator screenOptions={{header: LoggedUserHeader}}>
      <Stack.Screen name="search" component={Search} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export default PortalNavigator;
