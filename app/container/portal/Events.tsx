import React from 'react';
import {FlatList, StyleSheet, Text, View, Pressable, Alert, RefreshControl} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PortalNavigatorParamList} from '@routes/stacks/portal/Types';

import {CommonStyles, Fonts, Labels, Metrics} from '@utils';

import FullScreenLoader from '@components/loader/FullScreenLoader';
import {RouteProp} from '@react-navigation/native';
import {Event, useGetEventsQuery} from './portalApi';
import {getMonthAndDayName} from '@helpers/DateFormatter';

export interface Props {
  navigation: StackNavigationProp<PortalNavigatorParamList, 'events'>;
  route: RouteProp<PortalNavigatorParamList, 'events'>;
}

export default function Events({navigation, route}: Props) {
  const {data, isLoading, isError, refetch, isFetching} = useGetEventsQuery();
  console.log('Isloading: ', isLoading);
  console.log('data events: ', data);

  const showEventDetail = (event: Event) => {
    Alert.alert('Etkinlik Detayı', event.details);
  };

  if (isLoading) {
    return <FullScreenLoader />;
  } else if (isError) {
    return (
      <View>
        <Text>Bir sorun Olutşu</Text>
      </View>
    );
  } else if (data && Array.isArray(data)) {
    return (
      <View style={CommonStyles.container}>
        <FlatList
          refreshControl={<RefreshControl refreshing={isFetching} onRefresh={refetch} />}
          contentContainerStyle={styles.screenMarginTop}
          data={data}
          renderItem={({item, index}) => (
            <Pressable key={index} onPress={() => showEventDetail(item)}>
              <View style={[styles.new, styles.shadow]}>
                <View style={styles.date}>
                  {item?.startDate && (
                    <>
                      <Text style={Labels.label18BoldWhite}>
                        {getMonthAndDayName(item?.startDate)?.day}
                      </Text>
                      <Text style={styles.monthLabel}>
                        {getMonthAndDayName(item?.startDate)?.month}
                      </Text>
                    </>
                  )}
                </View>
                <View style={styles.labelContainer}>
                  <Text numberOfLines={3} ellipsizeMode="tail" style={styles.newTitle}>
                    {item.name}
                  </Text>
                </View>
              </View>
            </Pressable>
          )}
          keyExtractor={(_, index) => String(index)}
        />
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  screenMarginTop: {
    marginVertical: 24,
    paddingHorizontal: 16,
  },

  articleTitle: {
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },

  article: {
    marginBottom: 15,
    paddingVertical: 16,
    paddingHorizontal: 21,
    marginLeft: Metrics.horizontalContainerPadding,
    width: Metrics.CONTAINER_WIDTH,
    borderRadius: 10,
    backgroundColor: '#F5F6FA',
  },

  aritcleOwner: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  publisher: {
    paddingLeft: 7,
    fontSize: 12,
    fontFamily: Fonts.robotoRegular,
    color: '#B3B3B3',
  },

  title: {
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },

  new: {
    marginTop: 15,
    flexDirection: 'row',
    width: Metrics.DEVICE_WIDTH - 50,
    height: 76,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
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
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#7E0736',
  },

  monthLabel: {
    paddingTop: 2,
    fontSize: 12,
    fontFamily: Fonts.robotoRegular,
    color: '#fff',
  },

  newTitle: {
    paddingHorizontal: Metrics.wp(20),
    fontSize: 16,
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
  },

  labelContainer: {
    width: Metrics.DEVICE_WIDTH - 50 - 60,
  },
});
