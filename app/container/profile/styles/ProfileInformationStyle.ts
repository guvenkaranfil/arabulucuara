import {Fonts, Metrics} from '@utils';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: Metrics.horizontalContainerPadding,
    flex: 1,
    backgroundColor: '#fff',
  },

  contentStyle: {
    paddingTop: 27,
  },

  formItem: {
    marginBottom: 20,
  },

  formTitle: {
    paddingBottom: 10,
    fontSize: 14,
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
  },

  emptyFormCard: {
    marginBottom: 20,
    paddingLeft: Metrics.wp(20),
    width: Metrics.DEVICE_WIDTH - 56,
    height: 44,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#F5F6FA',
  },

  dateLabel: {
    fontSize: 16,
    fontFamily: Fonts.robotoRegular,
    color: '#0F0A39',
  },

  otherProfessions: {
    paddingTop: Metrics.wp(10),
    paddingLeft: Metrics.wp(12),
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Metrics.DEVICE_WIDTH - 56,
    borderRadius: 10,
    backgroundColor: '#F5F6FA',
  },

  professionButton: {
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 10,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#7E0736',
  },

  professionLabel: {
    paddingLeft: 7,
    fontSize: 16,
    fontFamily: Fonts.robotoRegular,
    color: '#fff',
  },

  checkBoxStyle: {
    borderColor: '#000',
  },

  checkBoxLabel: {
    color: '#000',
  },
});
