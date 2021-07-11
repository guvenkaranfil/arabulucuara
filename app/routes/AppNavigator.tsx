import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {isUserLoggedIn} from '@selectors';

import AuthStack from './stacks/auth/AuthStack';
import AppStack from './stacks/AppStack';

const Stack = createStackNavigator();
export default function AppNavigator() {
  const haveUser = useSelector(isUserLoggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="app" component={AppStack} />
        {!haveUser && <Stack.Screen name="auth" component={AuthStack} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
