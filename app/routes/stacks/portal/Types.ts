import {Category} from '@portal/forum/components/Categories';
import {TopicType} from '@container/portal/forum/components/Topic';

export type PortalNavigatorParamList = {
  portal: undefined;
  forum: undefined;
  categoryDetail: Category;
  TopicDetail: TopicType;
  articles: undefined;
};
