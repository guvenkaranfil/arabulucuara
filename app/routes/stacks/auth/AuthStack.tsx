import * as React from 'react';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';

import Login from '@auth/Login';
import ForgotPassword from '@auth/ForgotPassword';

type AuthStackParamList = {
  login: undefined;
  forgotPassword: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'login'>;

export type LoginNavigationProp = {
  navigation: LoginScreenNavigationProp;
};

const Stack = createStackNavigator<AuthStackParamList>();
function AuthStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="forgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}

export default AuthStack;
