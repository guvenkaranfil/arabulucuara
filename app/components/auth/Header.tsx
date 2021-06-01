import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Fonts, Metrics} from '@utils';
import {TextLogo} from '@icons';

type Props = {
  screenTitle: string;
  dynamicHeight: number;
  logoPaddingTop?: number;
};

export default function Header({screenTitle, dynamicHeight, logoPaddingTop = 37}: Props) {
  return (
    <View style={[styles.container, {height: Metrics.hp(dynamicHeight)}]}>
      <TextLogo width={280} height={50} />
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
    fontSize: 26,
    fontFamily: Fonts.robotoBold,
    color: '#fff',
  },
});
