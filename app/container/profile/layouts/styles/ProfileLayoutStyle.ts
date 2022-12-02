import {StyleSheet} from 'react-native';
import {Fonts, Metrics} from '@utils';

export default StyleSheet.create({
  shadow: {
    borderRadius: 30,
    backgroundColor: '#fff',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.16,
    shadowRadius: 15,

    elevation: 5,
  },

  container: {
    width: Metrics.DEVICE_WIDTH,
    height: 180,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  screenHeader: {
    flexDirection: 'row',
    width: Metrics.DEVICE_WIDTH,
    height: Metrics.hp(74),
    backgroundColor: 'rgb(123,7,52)',
    justifyContent: 'space-between',
  },

  left: {
    width: 50,
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  screenHeaderCenter: {
    paddingHorizontal: 16,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  right: {
    width: 50,
    height: '100%',
    justifyContent: 'center',
  },

  infosContainer: {
    marginLeft: Metrics.horizontalContainerPadding,
    flexDirection: 'row',
    width: Metrics.CONTAINER_WIDTH,
  },

  profilePhoto: {
    width: 105,
    height: 105,
    borderRadius: 10,
  },

  profilePhotoWithBg: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgb(221,222,223)',
  },

  userProfile: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  infos: {
    paddingHorizontal: 16,
    maxWidth: Metrics.CONTAINER_WIDTH - 105,
  },

  nameLabel: {
    fontSize: 22,
    fontFamily: Fonts.robotoBold,
    color: '#fff',
  },

  userTypeLabel: {
    paddingTop: 4,
    fontSize: 15,
    fontFamily: Fonts.robotoMedium,
    color: '#fff',
  },

  professionLabel: {
    paddingTop: 4,
    fontSize: 15,
    fontFamily: Fonts.robotoLight,
    color: '#fff',
  },

  ratingStyle: {
    marginTop: 8,
    alignItems: 'flex-start',
  },
});
