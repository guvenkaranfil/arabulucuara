import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type ProfileNavigatorParamList = {
  profile: undefined;
};

export interface ProfileScreenNavigationProps {
  route: RouteProp<ProfileNavigatorParamList, 'profile'>;
  navigation: StackNavigationProp<ProfileNavigatorParamList, 'profile'>;
}
