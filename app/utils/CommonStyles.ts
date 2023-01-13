import {StyleSheet} from 'react-native';
import Fonts from './Fonts';

export default StyleSheet.create({
  f1: {flex: 1},
  container: {flex: 1, backgroundColor: '#fff'},
  paddingForScroll: {paddingVertical: 25, paddingLeft: 25},
  scrollContentStyle: {paddingBottom: 25},
  fCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchEmptyPage: {
    paddingTop: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  updatingText: {
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: Fonts.robotoMedium,
    color: '#000',
  },
});
