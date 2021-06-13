export interface ProfileRoute {
  label: string;
  stackName: string | object;
}

export const INDIVIDUAL_MEDIATOR_ROUTES: Array<ProfileRoute> = [
  {
    label: 'Hakkımda',
    stackName: 'aboutMe',
  },
  {
    label: 'Arabuluculuk Uzmanlık Alanları',
    stackName: '',
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
    stackName: 'aboutMe',
  },
  {
    label: 'Merkez Üyeleri',
    stackName: '',
  },
  {
    label: 'Arabuluculuk Uzmanlık Alanları',
    stackName: '',
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
