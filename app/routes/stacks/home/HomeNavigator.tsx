import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeNavigatorParamList} from './Types';

import Home from '@home/index';

const Stack = createStackNavigator<HomeNavigatorParamList>();
function HomeNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
