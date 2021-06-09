import {StyleSheet} from 'react-native';
import {Fonts} from 'utils';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    flex: 1,
    backgroundColor: '#fff',
  },

  contentContainerStyle: {paddingBottom: 25},

  title: {
    paddingTop: 33,
    paddingBottom: 25,
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },

  topicOwner: {
    marginTop: 16,
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  publisher: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  views: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  aboutTopicLabels: {
    paddingLeft: 10,
    fontSize: 13,
    fontFamily: Fonts.robotoRegular,
    color: '#B3B3B3',
  },
});
