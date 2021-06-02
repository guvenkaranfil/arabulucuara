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
    marginTop: Metrics.hp(29),
    alignItems: 'center',
  },

  formQuestion: {
    paddingLeft: 28,
    marginBottom: 20,
  },

  formQuestionRow: {
    marginTop: Metrics.hp(10),
    flexDirection: 'row',
    width: 180,
    justifyContent: 'space-between',
  },

  questionLabel: {
    fontSize: 16,
    fontFamily: Fonts.robotoRegular,
    color: '#fff',
  },

  footer: {
    height: Metrics.hp(125),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
