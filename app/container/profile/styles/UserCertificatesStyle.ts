import {StyleSheet} from 'react-native';
import {Fonts, Metrics} from '@utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  scrollContent: {
    paddingVertical: 25,
  },

  screenContainer: {
    paddingVertical: 30,
    paddingHorizontal: Metrics.horizontalContainerPadding,
  },

  screenTitle: {
    paddingBottom: 16,
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },

  certificate: {
    marginLeft: 25,
    marginBottom: 20,
    paddingVertical: 16,
    paddingHorizontal: 20,
    width: Metrics.CONTAINER_WIDTH,
    borderRadius: 10,
    backgroundColor: '#F5F6FA',
  },

  certificateTitle: {
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },

  cooparateLabel: {
    paddingBottom: 8,
    fontSize: 12,
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
  },

  date: {
    flexDirection: 'row',
  },

  yearLabel: {
    paddingLeft: 7,
    fontSize: 12,
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
  },

  rightActions: {
    flexDirection: 'row',
    width: Metrics.CONTAINER_WIDTH / 2,
    height: '100%',
  },

  swipeActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  swipeAction: {
    marginRight: 22,
    alignItems: 'center',
  },

  actionLabel: {
    paddingTop: 8,
    fontSize: 12,
    fontFamily: Fonts.robotoRegular,
    color: '#B3B3B3',
  },

  columnSeperator: {
    marginRight: 22,
    width: 1,
    height: 30,
    backgroundColor: '#DEDEDE',
  },

  addNewCertificate: {
    marginLeft: Metrics.horizontalContainerPadding,
  },

  newCertificateTitle: {
    paddingTop: 15,
    paddingBottom: 10,
    fontSize: 14,
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
  },
});
