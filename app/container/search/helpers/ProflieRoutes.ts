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
    stackName: '',
  },
  {
    label: 'Makaleler',
    stackName: '',
  },
  {
    label: 'Seminer & Eğitim ve Sertifikalar',
    stackName: '',
  },
  {
    label: 'Galeri',
    stackName: '',
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
    stackName: '',
  },
  {
    label: 'Galeri',
    stackName: '',
  },
];
