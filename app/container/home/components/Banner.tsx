import {Banner} from '@home/Models';
import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {Metrics} from '@utils';
import Swiper from 'react-native-swiper';

export default function BannerArea({banners}: {banners: Array<Banner>}) {
  return (
    <View style={styles.container}>
      <Swiper showsButtons={false} paginationStyle={styles.swiperPaginationStyle}>
        {banners.map((banner, index) => (
          <View key={index} style={styles.bannerArea}>
            <Image source={{uri: banner?.image}} style={styles.banner} />
          </View>
        ))}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: Metrics.DEVICE_WIDTH - 40,
    height: Metrics.wp(164),
  },

  swiperPaginationStyle: {
    position: 'absolute',
    bottom: 0,
  },

  bannerArea: {
    width: Metrics.DEVICE_WIDTH - 40,
    height: '100%',
  },

  banner: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});
