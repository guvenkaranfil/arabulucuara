import {Category} from '@portal/forum/components/Categories';
import {Article} from '@portal/articles/Model';
import {DataBankCategory, DataBankSubCategory} from '@portal/dataBank/Model';

export type PortalNavigatorParamList = {
  portal: undefined;
  forum: undefined;
  categoryDetail: Category;
  TopicDetail: {subjectId: number};
  articles: {articleId?: number};
  articleDetail: {article: Article};
  dataBank: undefined;
  dataBankList: {dataBank: DataBankCategory};
  dataBankDetail: {dataBankDetail: DataBankSubCategory};
  ministryAnnouncements: undefined;
  ministryAnnouncement: {id: number; title: string};

  arabulucuFee: undefined;
};
