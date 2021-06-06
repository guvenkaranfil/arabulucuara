import {StyleSheet} from 'react-native';
import {Fonts, Metrics} from '@utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000aa',
  },

  centeredContainer: {
    width: Metrics.DEVICE_WIDTH - 28 * 2,
    borderRadius: 10,
    backgroundColor: '#fff',
  },

  modalHeader: {
    marginBottom: 15,
    paddingTop: 26,
    paddingHorizontal: 21,
    width: '100%',
    height: 57,
    borderBottomWidth: 1,
    borderBottomColor: '#707070',
  },

  title: {
    fontSize: 16,
    fontFamily: Fonts.robotoLight,
    color: '#181C32',
  },

  content: {
    maxHeight: Metrics.hp(550),
    paddingBottom: 28,
    paddingHorizontal: 21,
  },

  footer: {
    marginBottom: 11,
    paddingHorizontal: 20,
    flexDirection: 'row',
    width: '100%',
    height: 70,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#707070',
  },

  cancelButton: {
    width: Metrics.wp(112),
    height: Metrics.hp(44),
    backgroundColor: '#F4E1F0',
  },

  cancelLabel: {color: '#7E0736'},

  approveButton: {
    width: Metrics.wp(112),
    height: Metrics.hp(44),
    backgroundColor: '#7E0736',
  },
});
