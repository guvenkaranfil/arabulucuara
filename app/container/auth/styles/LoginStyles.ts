import {StyleSheet} from 'react-native';

import {Metrics} from '@utils';

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
    fontFamily: 'Roboto-Regular',
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
    fontFamily: 'Roboto-Regular',
    color: '#CBC9D9',
  },
});
