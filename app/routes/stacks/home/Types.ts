import {AuthNavigatorParamList} from '../auth/Types';

export type HomeNavigatorParamList = {
  home: undefined;
  auth: {screen: keyof AuthNavigatorParamList};
};
