export enum UserType {
  arabulucu,
  arabulucuMerkezi,
  uzman,
}

export type AuthNavigatorParamList = {
  app: undefined;
  login: undefined;
  forgotPassword: undefined;
  registerIdentities: undefined;
  register: {userType: UserType};
  welcome: {name: string};
  'completions/address': undefined;
  'completions/personal': undefined;
  'completions/professionType': undefined;
  'completions/profilePhoto': undefined;
  'completions/aboutMe': undefined;
  'completions/expertiesArea': undefined;
  'completions/meditationCenter': undefined;

  contract: {contractName: string; contractURL: string};
};
