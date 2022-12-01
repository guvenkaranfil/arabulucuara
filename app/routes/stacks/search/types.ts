import {SearchResponse} from '@search/searchApi';

export type SearchNavigatorParamList = {
  auth: undefined;
  search: undefined;
  searchResult: {data: SearchResponse[] | undefined};
  seekMediator: undefined;
  expertMediator: undefined;
  mediationCenter: undefined;
  forExpert: undefined;
  profileDetail: {profile: SearchResponse};
  aboutProfile: {profile: SearchResponse};
  mediationCenterMembers: {profile: SearchResponse};
  mediationExpertises: {profile: SearchResponse};
  cooperationAndSolutionPartners: {profile: SearchResponse};
  mediatorSubscriptions: {profile: SearchResponse};
  mediatorArticles: {profile: SearchResponse};
  mediatorCertificates: {profile: SearchResponse};
  mediatorGallery: {profile: SearchResponse};
};
