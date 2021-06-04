import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PortalNavigatorParamList} from './Types';

import Portal from '@portal/index';
import Forum from '@portal/forum/index';
import CategoryDetail from '@portal/forum/CategoryDetail';

const Stack = createStackNavigator<PortalNavigatorParamList>();
function PortalNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="portal" component={Portal} />
      <Stack.Screen name="forum" component={Forum} />
      <Stack.Screen name="categoryDetail" component={CategoryDetail} />
    </Stack.Navigator>
  );
}

export default PortalNavigator;
