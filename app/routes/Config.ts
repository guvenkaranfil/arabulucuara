import {BottomTabNavigationOptions, BottomTabBarOptions} from '@react-navigation/bottom-tabs';
import {Metrics} from '@utils';

const tabBarOptions: BottomTabBarOptions = {
  activeTintColor: '#7E0736',
  inactiveTintColor: '#B3B3B3',
  style: {height: Metrics.hp(70), borderWidth: 0},
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

export {tabBarOptions, homeOptions, searchOptions, portalOptions};
