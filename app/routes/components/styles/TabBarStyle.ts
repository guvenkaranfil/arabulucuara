import {StyleSheet} from 'react-native';

import {Fonts, Metrics} from '@utils';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: Metrics.hp(70),
  },

  tabBar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  activeTabIcon: {},

  inActiveTabIcon: {},

  tabLabel: {
    paddingTop: Metrics.hp(5),
    fontSize: 12,
    fontFamily: Fonts.robotoRegular,
  },

  activeTabLabel: {
    color: '#7E0736',
  },

  inActiveTabLabel: {
    color: '#B3B3B3',
  },

  bottomStripe: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 1,
    backgroundColor: '#7E0736',
  },
});
