/* eslint-disable curly */
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootState} from '@store/RootStore';
import {useSelector} from 'react-redux';
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
import MeditationCenter from '@auth/completions/07_MeditationCenter';
import Contract from '@auth/Contract';

export const getInitialRoutename = (
  userLastStep: number,
  role: string,
): keyof AuthNavigatorParamList => {
  console.log('user.userLastStep: ', userLastStep);
  if (userLastStep === 1) return 'completions/address';
  if (userLastStep === 2) return 'completions/personal';
  if (userLastStep === 3) return 'completions/professionType';
  if (userLastStep === 4) return 'completions/profilePhoto';
  if (userLastStep === 5) return 'completions/aboutMe';
  if (userLastStep === 6) return 'completions/expertiesArea';
  if (userLastStep === 7 && role !== 'merkez') return 'completions/meditationCenter';

  return 'login';
};

const Stack = createStackNavigator<AuthNavigatorParamList>();
function AuthStack() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName={getInitialRoutename(user?.userLastStep ?? 0, user?.userRole)}>
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
      <Stack.Screen name="completions/meditationCenter" component={MeditationCenter} />

      <Stack.Screen name="contract" component={Contract} />
    </Stack.Navigator>
  );
}

export default AuthStack;
