import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthNavigatorParamList} from './Types';

import Login from '@auth/Login';
import ForgotPassword from '@auth/ForgotPassword';
import RegisterIdentities from '@auth/RegisterIdentities';
import Register from '@auth/Register';
import Welcome from '@auth/Welcome';
import Address from '@auth/completions/01_Address';

const Stack = createStackNavigator<AuthNavigatorParamList>();
function AuthStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="completions/address" component={Address} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="forgotPassword" component={ForgotPassword} />
      <Stack.Screen name="registerIdentities" component={RegisterIdentities} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="welcome" component={Welcome} />
    </Stack.Navigator>
  );
}

export default AuthStack;
