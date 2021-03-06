import React from 'react';
import {StyleSheet, FlatList, Text, View, Pressable} from 'react-native';
import {CommonStyles, Fonts, Labels, Metrics} from '@utils';
import {StackNavigationProp} from '@react-navigation/stack';
import {PortalNavigatorParamList} from '@routes/stacks/portal/Types';
import {useGetMinistryAnnouncementsQuery} from './MinistryAnnouncementApi';
import FullScreenLoader from '@components/loader/FullScreenLoader';
import {getMonthAndDayName} from '@helpers/DateFormatter';

export interface Props {
  navigation: StackNavigationProp<PortalNavigatorParamList, 'ministryAnnouncements'>;
}

export default function MinistryAnnouncements({navigation}: Props) {
  const {data, isLoading} = useGetMinistryAnnouncementsQuery();

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <View style={CommonStyles.container}>
      <FlatList
        contentContainerStyle={styles.content}
        data={data}
        renderItem={({item, index}) => (
          <Pressable
            key={index}
            style={[styles.announcement, styles.shadow]}
            onPress={() =>
              navigation.navigate('ministryAnnouncement', {id: item.id, title: item.title})
            }>
            <View style={styles.date}>
              <Text style={Labels.label18BoldWhite}>
                {getMonthAndDayName(item.createdDate).day}
              </Text>
              <Text style={styles.month}>{getMonthAndDayName(item.createdDate).month}</Text>
            </View>

            <Text numberOfLines={3} style={styles.title}>
              {item.title}
            </Text>
          </Pressable>
        )}
        keyExtractor={(_, index) => String(index)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 43,
    paddingLeft: 25,
  },

  announcement: {
    marginBottom: 15,
    flexDirection: 'row',
    width: Metrics.CONTAINER_WIDTH,
    height: 76,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },

  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.16,
    shadowRadius: 3.5,

    elevation: 5,
  },

  date: {
    width: 60,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7E0736',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  month: {
    paddingTop: 10,
    fontSize: 12,
    fontFamily: Fonts.robotoRegular,
    color: '#fff',
  },

  title: {
    paddingHorizontal: 15,
    maxWidth: Metrics.CONTAINER_WIDTH - 76,
    fontSize: 16,
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
  },
});
