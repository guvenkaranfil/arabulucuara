import {Category} from '@portal/forum/components/Categories';
import {TopicType} from '@container/portal/forum/components/Topic';
import {Article} from '@portal/articles/ArticleDetail';
import {DataBank} from '@portal/dataBank/DataBankList';
import {DataBankDetail} from '@portal/dataBank/DataBankDetail';

export type PortalNavigatorParamList = {
  portal: undefined;
  forum: undefined;
  categoryDetail: Category;
  TopicDetail: TopicType;
  articles: undefined;
  articleDetail: {article: Article};
  dataBank: undefined;
  dataBankList: {dataBank: DataBank};
  dataBankDetail: {dataBankDetail: DataBankDetail};
  ministryAnnouncements: undefined;
};
