import * as React from 'react';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';

import Login from '@auth/Login';
import ForgotPassword from '@auth/ForgotPassword';
import RegisterIdentities from '@auth/RegisterIdentities';

type AuthStackParamList = {
  login: undefined;
  forgotPassword: undefined;
  registerIdentities: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'login'>;

export type LoginNavigationProp = {
  navigation: LoginScreenNavigationProp;
};

type ForgotPasswordScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'login'>;

export type ForgotPasswordNavigationProp = {
  navigation: ForgotPasswordScreenNavigationProp;
};

const Stack = createStackNavigator<AuthStackParamList>();
function AuthStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="forgotPassword" component={ForgotPassword} />
      <Stack.Screen name="registerIdentities" component={RegisterIdentities} />
    </Stack.Navigator>
  );
}

export default AuthStack;
