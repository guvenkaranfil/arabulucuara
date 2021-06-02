import * as React from 'react';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';

import Login from '@auth/Login';
import ForgotPassword from '@auth/ForgotPassword';
import RegisterIdentities from '@auth/RegisterIdentities';
import Register from '@auth/Register';

type AuthStackParamList = {
  login: undefined;
  forgotPassword: undefined;
  registerIdentities: undefined;
  register: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'login'>;

export type LoginNavigationProp = {
  navigation: LoginScreenNavigationProp;
};

type ForgotPasswordScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'login'>;

export type ForgotPasswordNavigationProp = {
  navigation: ForgotPasswordScreenNavigationProp;
};

type RegisterIdentitiesScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'login'>;

export type RegisterIdentitiesNavigationProp = {
  navigation: RegisterIdentitiesScreenNavigationProp;
};

const Stack = createStackNavigator<AuthStackParamList>();
function AuthStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="forgotPassword" component={ForgotPassword} />
      <Stack.Screen name="registerIdentities" component={RegisterIdentities} />
      <Stack.Screen name="register" component={Register} />
    </Stack.Navigator>
  );
}

export default AuthStack;
