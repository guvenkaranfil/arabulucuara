import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {Labels, Metrics} from '@utils';

type Props = {
  screenTitle: string;
  dynamicHeight: number;
  logoPaddingTop?: number;
};

export default function Header({screenTitle, dynamicHeight, logoPaddingTop = 37}: Props) {
  return (
    <View style={[styles.container, {height: Metrics.hp(dynamicHeight)}]}>
      <Image source={require('../../assets/images/logo_white.png')} resizeMode="contain" />
      <Text style={[styles.title, {paddingTop: Metrics.hp(logoPaddingTop)}]}>{screenTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Metrics.DEVICE_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    textAlign: 'center',
    ...Labels.label26BoldWhite,
  },
});
