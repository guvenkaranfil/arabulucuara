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
