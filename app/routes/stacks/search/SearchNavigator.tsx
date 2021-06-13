import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Search from '@search/index';
import SearchResult from '@search/SearchResult';
import SeekMediator from '@search/SeekMediator';
import SearchExpertMediator from '@search/SearchExpertMediator';
import SearchMediationCenter from '@search/SearchMediationCenter';
import SearchForExpert from '@search/SearchForExpert';
import ProfileDetail from '@search/ProfileDetail';
import AboutProfile from '@search/searchedProfileRoutes/AboutProfile';
import MediationCenterMembers from '@search/searchedProfileRoutes/MediationCenterMembers';
import MediationExpertises from '@search/searchedProfileRoutes/MediationExpertises';
import CooperationAndSolutionPartners from '@search/searchedProfileRoutes/CooperationAndSolutionPartners';
import MediatorSubscriptions from '@search/searchedProfileRoutes/MediatorSubscriptions';
import MediatorArticles from '@search/searchedProfileRoutes/MediatorArticles';
import MediatorCertificates from '@search/searchedProfileRoutes/MediatorCertificates';
import MediatorGallery from '@search/searchedProfileRoutes/MediatorGallery';

import {SearchNavigatorParamList} from './types';
import LoggedUserHeader from '../../components/LoggedUserHeader';

const Stack = createStackNavigator<SearchNavigatorParamList>();
function PortalNavigator() {
  const isUserLoggedIn = true;

  return (
    <Stack.Navigator screenOptions={{header: isUserLoggedIn && LoggedUserHeader}}>
      <Stack.Screen name="search" component={Search} />
      <Stack.Screen name="searchResult" component={SearchResult} />
      <Stack.Screen
        name="seekMediator"
        component={SeekMediator}
        options={{title: 'Arabulucu Ara'}}
      />
      <Stack.Screen
        name="expertMediator"
        component={SearchExpertMediator}
        options={{title: 'Uzman Arabulucu Ara'}}
      />
      <Stack.Screen
        name="mediationCenter"
        component={SearchMediationCenter}
        options={{title: 'Arabuluculuk Merkezi Ara'}}
      />
      <Stack.Screen name="forExpert" component={SearchForExpert} options={{title: 'Uzman Ara'}} />
      <Stack.Screen name="profileDetail" component={ProfileDetail} options={{headerShown: false}} />
      <Stack.Screen name="aboutProfile" component={AboutProfile} options={{headerShown: false}} />
      <Stack.Screen
        name="mediationCenterMembers"
        component={MediationCenterMembers}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="mediationExpertises"
        component={MediationExpertises}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="cooperationAndSolutionPartners"
        component={CooperationAndSolutionPartners}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="mediatorSubscriptions"
        component={MediatorSubscriptions}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="mediatorArticles"
        component={MediatorArticles}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="mediatorCertificates"
        component={MediatorCertificates}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="mediatorGallery"
        component={MediatorGallery}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default PortalNavigator;
