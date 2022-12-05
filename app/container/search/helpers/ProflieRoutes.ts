import {SearchNavigatorParamList} from '@routes/stacks/search/types';

export interface ProfileRoute {
  label: string;
  stackName: keyof SearchNavigatorParamList;
}

export const MEDIATOR_CENTER_ROUTES: Array<ProfileRoute> = [
  {
    label: 'Hakkımda',
    stackName: 'aboutProfile',
  },
  {
    label: 'Merkez Üyeleri',
    stackName: 'mediationCenterMembers',
  },
  {
    label: 'Arabuluculuk Uzmanlık Alanları',
    stackName: 'mediationExpertises',
  },
  {
    label: 'İşbirliği ve Çözüm Ortakları',
    stackName: 'cooperationAndSolutionPartners',
  },
  {
    label: 'Makaleler',
    stackName: 'mediatorArticles',
  },
  {
    label: 'Galeri',
    stackName: 'mediatorGallery',
  },
];
