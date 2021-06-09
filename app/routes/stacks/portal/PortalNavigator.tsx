import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Portal from '@portal/index';
import Forum from '@portal/forum/index';
import CategoryDetail from '@portal/forum/CategoryDetail';
import TopicDetail from '@portal/forum/TopicDetail';

import {PortalNavigatorParamList} from './Types';
import LoggedUserHeader from '../../components/LoggedUserHeader';

const Stack = createStackNavigator<PortalNavigatorParamList>();
function PortalNavigator() {
  return (
    <Stack.Navigator screenOptions={{header: LoggedUserHeader}} initialRouteName="portal">
      <Stack.Screen name="portal" component={Portal} options={{title: 'Portal'}} />
      <Stack.Screen name="forum" component={Forum} options={{title: 'Forum'}} />
      <Stack.Screen name="categoryDetail" component={CategoryDetail} options={{title: 'Forum'}} />
      <Stack.Screen name="TopicDetail" component={TopicDetail} options={{title: 'Forum'}} />
    </Stack.Navigator>
  );
}

export default PortalNavigator;
