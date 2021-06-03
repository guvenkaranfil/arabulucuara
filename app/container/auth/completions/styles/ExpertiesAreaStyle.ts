import {StyleSheet} from 'react-native';
import {Fonts, Metrics} from 'utils';

export default StyleSheet.create({
  step: {
    alignItems: 'center',
  },

  stepInfo: {
    paddingTop: Metrics.hp(20),
    textAlign: 'center',
    fontSize: 12,
    fontFamily: Fonts.robotoRegular,
    color: '#fff',
  },

  form: {
    marginLeft: 28,
    marginTop: Metrics.hp(26),
  },

  expertiesLabel: {
    paddingBottom: 16,
    fontSize: 16,
    fontFamily: Fonts.robotoRegular,
    color: '#fff',
  },

  expertiesItem: {
    marginBottom: 16,
  },

  expertiesName: {
    fontSize: 16,
    fontFamily: Fonts.robotoRegular,
    color: '#fff',
  },

  expertiesInfo: {
    paddingTop: Metrics.hp(8),
    textAlign: 'center',
    fontSize: 12,
    fontFamily: Fonts.robotoRegular,
    color: '#CBC9D9',
  },

  footer: {
    marginTop: Metrics.hp(20),
    height: Metrics.hp(125),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
