import React from 'react';
import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native';
import {Metrics} from '@utils';

import BannerArea from './components/Banner';
import NewsShowecase from './components/NewsShowecase';
import Attendees from './components/Attendees';
import LastMoves from './components/LastMoves';
import FeaturedArticles from './components/FeaturedArticles';
import {GetHomeResponse} from './HomeApi';

export default function ForLoggedUser({
  banners,
  siteNews,
  users,
  operations,
  articles,
  isRefreshing,
  refetch,
}: GetHomeResponse & {refetch: () => void; isRefreshing: boolean}) {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.cotentContainerStyle}
        refreshControl={<RefreshControl onRefresh={refetch} refreshing={isRefreshing} />}>
        <View style={styles.bannerArea}>
          <BannerArea banners={banners ?? []} />
        </View>

        <View style={styles.lastMoves}>
          <LastMoves
            actions={operations ?? []}
            onPress={item => console.log('pressed item:', item)}
          />
        </View>

        <View style={styles.attendees}>
          <Attendees attendees={users ?? []} />
        </View>

        <View style={styles.newsShowCase}>
          <NewsShowecase
            news={siteNews ?? []}
            openNew={(id: number) => console.log('open new id:', id)}
          />
        </View>

        <View style={styles.featuredArticles}>
          <FeaturedArticles
            articles={articles ?? []}
            openArticle={article => console.log('pressed article + ', article)}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},

  cotentContainerStyle: {paddingBottom: 28},

  bannerArea: {marginTop: Metrics.hp(20), alignItems: 'center'},

  featuredArticles: {marginTop: Metrics.hp(20), alignItems: 'center'},

  lastMoves: {marginTop: Metrics.hp(20), alignItems: 'center'},

  newsShowCase: {marginTop: Metrics.hp(20), alignItems: 'center'},

  routingButtons: {alignItems: 'center'},

  attendees: {marginTop: Metrics.hp(35), alignItems: 'center'},
});
