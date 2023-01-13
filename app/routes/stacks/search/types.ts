import {Article} from '@portal/articles/Model';
import {MemberResponse, SearchResponse} from '@search/searchApi';

export type SearchNavigatorParamList = {
  profile: {screen: string};
  portal: undefined;
  auth: undefined;
  search: undefined;
  searchResult: {data: SearchResponse[] | undefined};
  seekMediator: undefined;
  expertMediator: undefined;
  mediationCenter: undefined;
  forExpert: undefined;

  profileDetail: {profile: SearchResponse};
  aboutProfile: {profile: SearchResponse; member: MemberResponse};
  centerMembers: {profile: SearchResponse; member: MemberResponse};
  mediationCenterMembers: {profile: SearchResponse; member: MemberResponse};
  mediationExpertises: {profile: SearchResponse; member: MemberResponse};
  cooperationAndSolutionPartners: {profile: SearchResponse; member: MemberResponse};
  mediatorSubscriptions: {profile: SearchResponse};

  mediatorArticles: {profile: SearchResponse; member: MemberResponse};
  articleDetail: {article: Article};

  mediatorCertificates: {profile: SearchResponse; member: MemberResponse};

  mediatorGallery: {profile: SearchResponse; member: MemberResponse};

  mediatorMembersip: {profile: SearchResponse; member: MemberResponse};
};
