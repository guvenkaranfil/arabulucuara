import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '@auth/Login';

const Stack = createStackNavigator();
function AuthStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
}

export default AuthStack;
