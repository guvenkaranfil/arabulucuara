import {StyleSheet} from 'react-native';
import {Fonts, Metrics} from 'utils';

export default StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: 28,
  },

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
    marginTop: Metrics.hp(29),
    alignItems: 'center',
  },

  dateTime: {
    marginBottom: 20,
    paddingLeft: Metrics.wp(20),
    width: Metrics.DEVICE_WIDTH - 56,
    height: 44,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
  },

  dateLabel: {
    fontSize: 16,
    fontFamily: Fonts.robotoRegular,
    color: '#0F0A39',
  },

  footer: {
    marginTop: Metrics.hp(29),
    height: Metrics.hp(125),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
