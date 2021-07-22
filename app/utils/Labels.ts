import {StyleSheet} from 'react-native';

import Colors from './Colors';
import Fonts from './Fonts';
import FontSizes from './FontSizes';

export default StyleSheet.create({
  label18RegularWhite: {
    fontSize: 18,
    fontFamily: Fonts.robotoRegular,
    color: Colors.white,
  },

  label18BoldWhite: {
    fontSize: 18,
    fontFamily: Fonts.robotoBold,
    color: Colors.white,
  },

  label26BoldWhite: {
    fontSize: FontSizes.h26,
    fontFamily: Fonts.robotoBold,
    color: Colors.white,
  },
});
