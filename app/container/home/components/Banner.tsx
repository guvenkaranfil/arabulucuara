import {Banner} from '@home/Models';
import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {Metrics} from '@utils';

export default function BannerArea({banners}: {banners: Array<Banner>}) {
  return (
    <View style={styles.container}>
      <Image source={{uri: banners[1]?.image}} style={styles.banner} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Metrics.DEVICE_WIDTH - 40,
    height: Metrics.wp(164),
  },

  banner: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});
