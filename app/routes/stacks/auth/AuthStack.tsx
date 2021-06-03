import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthNavigatorParamList} from './Types';

import Login from '@auth/Login';
import ForgotPassword from '@auth/ForgotPassword';
import RegisterIdentities from '@auth/RegisterIdentities';
import Register from '@auth/Register';
import Welcome from '@auth/Welcome';

import Address from '@auth/completions/01_Address';
import Personal from '@auth/completions/02_Personal';
import ProfessionType from '@auth/completions/03_ProfessionType';
import ProfilePhoto from '@auth/completions/04_ProfilePhoto';
import AboutMe from '@auth/completions/05_AboutMe';
import ExpertiesArea from '@auth/completions/06_ExpertiesArea';

const Stack = createStackNavigator<AuthNavigatorParamList>();
function AuthStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="completions/expertiesArea">
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="forgotPassword" component={ForgotPassword} />
      <Stack.Screen name="registerIdentities" component={RegisterIdentities} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="welcome" component={Welcome} />

      <Stack.Screen name="completions/address" component={Address} />
      <Stack.Screen name="completions/personal" component={Personal} />
      <Stack.Screen name="completions/professionType" component={ProfessionType} />
      <Stack.Screen name="completions/profilePhoto" component={ProfilePhoto} />
      <Stack.Screen name="completions/aboutMe" component={AboutMe} />
      <Stack.Screen name="completions/expertiesArea" component={ExpertiesArea} />
    </Stack.Navigator>
  );
}

export default AuthStack;
