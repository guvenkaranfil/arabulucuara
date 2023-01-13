import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {isUserLoggedIn} from '@selectors';
import {useSelector} from 'react-redux';

import Portal from '@portal/index';
import Forum from '@portal/forum/index';
import CategoryDetail from '@portal/forum/CategoryDetail';
import TopicDetail from '@portal/forum/TopicDetail';
import Articles from '@portal/articles';
import ArticleDetail from '@portal/articles/ArticleDetail';

import DataBank from '@portal/dataBank';
import DataBankList from '@portal/dataBank/DataBankList';
import DataBankDetail from '@portal/dataBank/DataBankDetail';

import MinistryAnnouncements from '@portal/ministryAnnouncements';
import MinistryAnnouncement from '@portal/ministryAnnouncements/MinistryAnnouncement';

import {PortalNavigatorParamList} from './Types';
import LoggedUserHeader from '../components/LoggedUserHeader';

import ArabulucuFee from '@portal/arabulucuFee';
import NotLoggedHeaderForNavigator from '@components/header/NotLoggedHeaderForNavigator';
import Events from '@portal/Events';
import ConferenceRoom from '@portal/conference/ConferenceRoom';
import JoinConference from '@portal/conference/JoinConference';

const Stack = createStackNavigator<PortalNavigatorParamList>();
function PortalNavigator() {
  const userLoggedIn = useSelector(isUserLoggedIn);

  return (
    <Stack.Navigator
      screenOptions={{header: userLoggedIn ? LoggedUserHeader : NotLoggedHeaderForNavigator}}
      initialRouteName="portal">
      <Stack.Screen name="portalScreen" component={Portal} options={{title: 'Portal'}} />
      <Stack.Screen name="forum" component={Forum} options={{title: 'Forum'}} />
      <Stack.Screen name="categoryDetail" component={CategoryDetail} options={{title: 'Forum'}} />
      <Stack.Screen name="TopicDetail" component={TopicDetail} options={{title: 'Forum'}} />
      <Stack.Screen name="articles" component={Articles} options={{title: 'Makaleler'}} />
      <Stack.Screen name="articleDetail" component={ArticleDetail} options={{title: 'Makaleler'}} />
      <Stack.Screen name="dataBank" component={DataBank} options={{title: 'Bilgi Bankası'}} />

      <Stack.Screen name="events" component={Events} options={{title: 'Bilgi Bankası'}} />

      <Stack.Screen
        name="joinConference"
        component={JoinConference}
        options={{title: 'Konferans Giriş'}}
      />

      <Stack.Screen
        name="conferenceRoom"
        component={ConferenceRoom}
        options={{title: 'Konferans Odası'}}
      />

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
      <Stack.Screen
        name="ministryAnnouncements"
        component={MinistryAnnouncements}
        options={{title: 'Bakanlık Duyuruları'}}
      />
      <Stack.Screen
        name="ministryAnnouncement"
        component={MinistryAnnouncement}
        options={{title: 'Bakanlık Duyuruları'}}
      />

      <Stack.Screen
        name="arabulucuFee"
        component={ArabulucuFee}
        options={{title: 'Arabuluculuk Ücreti'}}
      />
    </Stack.Navigator>
  );
}

export default PortalNavigator;
