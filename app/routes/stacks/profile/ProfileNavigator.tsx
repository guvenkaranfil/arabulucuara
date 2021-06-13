import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProfileNavigatorParamList} from './Types';

import Profile from '@profile/index';

const Stack = createStackNavigator<ProfileNavigatorParamList>();
function ProfileNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="profile" component={Profile} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export default ProfileNavigator;
