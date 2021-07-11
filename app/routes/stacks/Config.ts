import {BottomTabNavigationOptions, BottomTabBarOptions} from '@react-navigation/bottom-tabs';

const tabBarOptions: BottomTabBarOptions = {
  activeTintColor: '#7E0736',
  inactiveTintColor: '#B3B3B3',
};

const homeOptions: BottomTabNavigationOptions = {
  tabBarLabel: 'Anasayfa',
};

const searchOptions: BottomTabNavigationOptions = {
  tabBarLabel: 'Arama',
};

const portalOptions: BottomTabNavigationOptions = {
  tabBarLabel: 'Portal',
};
const profileOptions: BottomTabNavigationOptions = {
  tabBarLabel: 'Profil',
};

export {tabBarOptions, homeOptions, searchOptions, portalOptions, profileOptions};
