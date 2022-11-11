import {AuthNavigatorParamList} from '../auth/Types';
import {PortalNavigatorParamList} from '../portal/Types';

export type HomeNavigatorParamList = {
  home: undefined;
  portal: {screen: keyof PortalNavigatorParamList; params: {articleId: number}};
  auth: {screen: keyof AuthNavigatorParamList};
};
