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

  photoPicker: {
    alignItems: 'center',
    marginVertical: Metrics.hp(20),
  },

  photoLabel: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: Fonts.robotoRegular,
    color: '#fff',
  },

  photoReview: {
    marginTop: Metrics.hp(17),
    width: Metrics.wp(200),
    height: Metrics.wp(200),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
  },

  profilePhoto: {
    width: 150,
    height: 150,
  },

  footer: {
    height: Metrics.hp(125),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
