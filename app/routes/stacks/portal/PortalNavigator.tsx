import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Portal from '@portal/index';
import Forum from '@portal/forum/index';
import CategoryDetail from '@portal/forum/CategoryDetail';
import TopicDetail from '@portal/forum/TopicDetail';
import Articles from '@portal/articles';
import ArticleDetail from '@portal/articles/ArticleDetail';

import DataBank from '@portal/dataBank';
import DataBankList from '@portal/dataBank/DataBankList';
import DataBankDetail from '@portal/dataBank/DataBankDetail';

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
      <Stack.Screen name="articles" component={Articles} options={{title: 'Makaleler'}} />
      <Stack.Screen name="articleDetail" component={ArticleDetail} options={{title: 'Makaleler'}} />
      <Stack.Screen name="dataBank" component={DataBank} options={{title: 'Bilgi Bankası'}} />
      <Stack.Screen
        name="dataBankList"
        component={DataBankList}
        options={{title: 'Bilgi Bankası'}}
      />
      <Stack.Screen
        name="dataBankDetail"
        component={DataBankDetail}
        options={{title: 'Bilgi Bankası'}}
      />
    </Stack.Navigator>
  );
}

export default PortalNavigator;
