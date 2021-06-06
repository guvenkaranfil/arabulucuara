import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {StackHeaderProps} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';

import {Fonts, Metrics} from 'utils';
import {BackIcon, LetterIcon} from '@icons';

export default function Header({navigation, scene, previous}: StackHeaderProps) {
  const linearColors = ['#790633', '#BA1858'];

  return (
    <LinearGradient style={styles.container} colors={linearColors}>
      <Pressable style={styles.left} disabled={!navigation.canGoBack()} onPress={navigation.goBack}>
        {previous && <BackIcon width={17} height={12} />}
      </Pressable>

      <View style={styles.center}>
        <Text style={styles.screenTitle}>{scene.descriptor.options.title}</Text>
      </View>

      <View style={styles.right}>
        <LetterIcon width={20} height={17} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: Metrics.DEVICE_WIDTH,
    height: Metrics.hp(74),
  },

  left: {
    width: 50,
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  screenTitle: {
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#fff',
  },

  right: {
    width: 50,
    height: '100%',
    justifyContent: 'center',
  },
});
