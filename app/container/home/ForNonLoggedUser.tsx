import React from 'react';
import {ScrollView, StyleSheet, View, RefreshControl} from 'react-native';
import {Metrics} from '@utils';

import Banner from './components/Banner';
import NewsShowecase from './components/NewsShowecase';
import RoutingButtons from './components/RoutingButtons';
import Attendees from './components/Attendees';
import {GetHomeResponse} from './HomeApi';
import NotLoggedUserHeader from '@components/header/NotLoggedUserHeader';
import {useNavigation} from '@react-navigation/native';
import HomeFooter from './components/HomeFooter';

export default function Home({
  banners,
  siteNews,
  users,
  isRefreshing,
  refetch,
  onPressLogin,
}: GetHomeResponse & {refetch: () => void; isRefreshing: boolean; onPressLogin: () => void}) {
  const navigation = useNavigation();
  console.log('banners:', banners);
  return (
    <View style={styles.container}>
      <NotLoggedUserHeader onPressSignIn={onPressLogin} />
      <ScrollView
        contentContainerStyle={styles.cotentContainerStyle}
        refreshControl={<RefreshControl onRefresh={refetch} refreshing={isRefreshing} />}>
        {banners && banners?.length > 0 && (
          <View style={styles.bannerArea}>
            <Banner banners={banners ?? []} />
          </View>
        )}

        <View style={styles.routingButtons}>
          <RoutingButtons
            searchMediator={() => {
              navigation.navigate('search');
              navigation.navigate('search', {screen: 'seekMediator'});
            }}
            searchMediatorCenter={() => {
              navigation.navigate('search');
              navigation.navigate('search', {screen: 'mediationCenter'});
            }}
            searchPro={() => {
              navigation.navigate('search');
              navigation.navigate('search', {screen: 'forExpert'});
            }}
            openCalculator={() => {
              // TODO: needs to resolve more ellegant way
              // ISSUE LINk: https://github.com/react-navigation/react-navigation/issues/7698
              navigation.navigate('portal');
              setTimeout(() => {
                navigation.push('arabulucuFee');
              }, 100);
            }}
          />
        </View>

        <View style={styles.newsShowCase}>
          <NewsShowecase
            news={siteNews ?? []}
            openNew={(id: number) => console.log('open new id:', id)}
          />
        </View>

        <View style={styles.attendees}>
          <Attendees attendees={users ?? []} />
        </View>

        <HomeFooter />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},

  cotentContainerStyle: {paddingBottom: 28},

  bannerArea: {marginTop: Metrics.hp(20), alignItems: 'center'},

  lastMoves: {marginTop: Metrics.hp(20), alignItems: 'center'},

  newsShowCase: {marginTop: Metrics.hp(20), alignItems: 'center'},

  routingButtons: {alignItems: 'center'},

  attendees: {marginTop: Metrics.hp(35), alignItems: 'center'},
});
