import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {Metrics} from 'utils';

export default function Banner() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/Banner.png')} style={styles.banner} />
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
