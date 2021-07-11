import {Category} from '@portal/forum/components/Categories';
import {TopicType} from '@container/portal/forum/components/Topic';
import {Article} from '@portal/articles/Model';
import {DataBankCategory, DataBankSubCategory} from '@portal/dataBank/Model';

export type PortalNavigatorParamList = {
  portal: undefined;
  forum: undefined;
  categoryDetail: Category;
  TopicDetail: TopicType;
  articles: undefined;
  articleDetail: {article: Article};
  dataBank: undefined;
  dataBankList: {dataBank: DataBankCategory};
  dataBankDetail: {dataBankDetail: DataBankSubCategory};
  ministryAnnouncements: undefined;
  ministryAnnouncement: {id: number; title: string};
};
