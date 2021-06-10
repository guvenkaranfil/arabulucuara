import {Dimensions} from 'react-native';
import {widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('window');

function widthPercentageCalculator(heightNum: number) {
  return widthPercentageToDP((heightNum * 100) / 375);
}

function heightPercentageCalculator(heightNum: number) {
  return heightPercentageToDP((heightNum * 100) / 812);
}

export default {
  DEVICE_WIDTH: width,
  DEVICE_HEIGHT: height,

  CONTAINER_WIDTH: width - 25 * 2,
  horizontalContainerPadding: 25,

  wp: widthPercentageCalculator,
  hp: heightPercentageCalculator,
};
