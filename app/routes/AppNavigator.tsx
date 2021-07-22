import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import {isUserLoggedIn} from '@selectors';
import AsyncStorage from '@react-native-community/async-storage';
import {logIn} from '@store/user/UserSlice';

import AuthStack from './stacks/auth/AuthStack';
import AppStack from './stacks/AppStack';
import FullScreenLoader from '@components/loader/FullScreenLoader';

const Stack = createStackNavigator();
export default function AppNavigator() {
  const haveUser = useSelector(isUserLoggedIn);
  const dispatch = useDispatch();

  const [isCheckingForUser, setisCheckingForUser] = React.useState(true);

  React.useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await AsyncStorage.getItem('@user');

        if (user) {
          dispatch(logIn(JSON.parse(user)));
        }
      } catch (error) {
      } finally {
        setisCheckingForUser(false);
      }
    };

    checkUser();
  }, [dispatch]);

  if (isCheckingForUser) {
    return <FullScreenLoader />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="app" component={AppStack} />
        {!haveUser && <Stack.Screen name="auth" component={AuthStack} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
