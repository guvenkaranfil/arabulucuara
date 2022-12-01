import {Profile} from '@search/components/SearchProfile';
import {SearchResponse} from '@search/mocks/searchApi';

export type SearchNavigatorParamList = {
  search: undefined;
  searchResult: {data: SearchResponse[]};
  seekMediator: undefined;
  expertMediator: undefined;
  mediationCenter: undefined;
  forExpert: undefined;
  profileDetail: {profile: Profile};
  aboutProfile: {profile: Profile};
  mediationCenterMembers: {profile: Profile};
  mediationExpertises: {profile: Profile};
  cooperationAndSolutionPartners: {profile: Profile};
  mediatorSubscriptions: {profile: Profile};
  mediatorArticles: {profile: Profile};
  mediatorCertificates: {profile: Profile};
  mediatorGallery: {profile: Profile};
};
