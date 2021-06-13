import {SearchNavigatorParamList} from '@routes/stacks/search/types';

export interface ProfileRoute {
  label: string;
  stackName: keyof SearchNavigatorParamList;
}

export const INDIVIDUAL_MEDIATOR_ROUTES: Array<ProfileRoute> = [
  {
    label: 'Hakkımda',
    stackName: 'aboutProfile',
  },
  {
    label: 'Arabuluculuk Uzmanlık Alanları',
    stackName: 'mediationExpertises',
  },
  {
    label: 'Üyelikler',
    stackName: 'mediatorSubscriptions',
  },
  {
    label: 'Makaleler',
    stackName: 'mediatorArticles',
  },
  {
    label: 'Seminer & Eğitim ve Sertifikalar',
    stackName: 'mediatorCertificates',
  },
  {
    label: 'Galeri',
    stackName: 'mediatorGallery',
  },
];

export const MEDIATOR_CENTER_ROUTES: Array<ProfileRoute> = [
  {
    label: 'Hakkımda',
    stackName: 'aboutProfile',
  },
  {
    label: 'Merkez Üyeleri',
    stackName: '',
  },
  {
    label: 'Arabuluculuk Uzmanlık Alanları',
    stackName: 'mediationExpertises',
  },
  {
    label: 'İşbirliği ve Çözüm Ortakları',
    stackName: '',
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
