import {Fonts, Metrics} from '@utils';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 18,
    flexDirection: 'row',
    width: Metrics.CONTAINER_WIDTH,
  },

  profilePhoto: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },

  profilePhotoWithBg: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgb(221,222,223)',
  },

  userPhoto: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  usereInfos: {
    maxWidth: Metrics.CONTAINER_WIDTH - 80 - 15,
    paddingBottom: 7,
    paddingLeft: 15,
  },

  nameLabel: {
    fontSize: 16,
    fontFamily: Fonts.robotoMedium,
    color: '#000000',
  },

  userTypeLabel: {
    paddingTop: 4,
    fontSize: 14,
    fontFamily: Fonts.robotoBold,
    color: '#B3B3B3',
  },

  locationLabel: {
    paddingTop: 4,
    fontSize: 12,
    fontFamily: Fonts.robotoLight,
    color: '#B3B3B3',
  },

  rateCount: {
    paddingTop: 8,
    alignItems: 'flex-start',
  },
});
