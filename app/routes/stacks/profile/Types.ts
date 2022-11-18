import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type ProfileNavigatorParamList = {
  profile: undefined;
  profileInformation: undefined;
  aboutUser: undefined;
  userCertificates: undefined;
  userArticles: undefined;
  userGallery: undefined;
  messagesContainer: undefined;
  messageDetail: {messageId: number};
};

export interface ProfileScreenNavigationProps {
  route: RouteProp<ProfileNavigatorParamList, 'profile'>;
  navigation: StackNavigationProp<ProfileNavigatorParamList, 'profile'>;
}

export interface UserProfileRoute {
  label: string;
  stackName: keyof ProfileNavigatorParamList;
}
