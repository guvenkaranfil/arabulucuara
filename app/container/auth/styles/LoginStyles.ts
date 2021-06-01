import {StyleSheet} from 'react-native';

import {Fonts, Metrics} from '@utils';

export default StyleSheet.create({
  inputs: {
    alignItems: 'center',
  },

  forgotPassword: {
    paddingRight: 25,
    alignItems: 'flex-end',
  },

  forgotPasswordText: {
    fontSize: 14,
    fontFamily: Fonts.robotoRegular,
    color: '#fff',
  },

  signIn: {
    paddingTop: Metrics.hp(67),
    alignItems: 'center',
  },

  footer: {
    paddingTop: Metrics.hp(100),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  footerLabel: {
    paddingBottom: Metrics.hp(28),
    flexDirection: 'row',
  },

  footerLabelText: {
    fontSize: 15,
    fontFamily: Fonts.robotoRegular,
    color: '#CBC9D9',
  },
});
