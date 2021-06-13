import {StyleSheet, Platform} from 'react-native';

import {Fonts, Metrics} from '@utils';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: Metrics.hp(70),
    backgroundColor: '#fff',
  },

  tabBar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#9D9D9D',
        shadowOffset: {
          width: 0,
          height: -15,
        },
        shadowOpacity: 0.12,
        shadowRadius: 30,

        elevation: 15,
      },
      android: {
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3.5,

        elevation: 5,
      },
    }),
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
