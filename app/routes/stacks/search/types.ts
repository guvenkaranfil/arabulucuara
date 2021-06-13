import {Profile} from '@search/components/SearchProfile';

export type SearchNavigatorParamList = {
  search: undefined;
  searchResult: undefined;
  seekMediator: undefined;
  expertMediator: undefined;
  mediationCenter: undefined;
  forExpert: undefined;
  profileDetail: {navigation: any; profile: Profile};
};
