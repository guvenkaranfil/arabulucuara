import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {StackHeaderProps} from '@react-navigation/stack';

import {Fonts, Metrics} from '@utils';
import {TextLogo} from '@icons';
import {mustSignDialog} from '@components/alert';

export default function NotLoggedHeaderForNavigator({navigation}: StackHeaderProps) {
  const linearColors = ['#790633', '#BA1858'];

  const showLoginAlert = () => {
    mustSignDialog(navigation);
  };

  return (
    <LinearGradient style={styles.container} colors={linearColors}>
      <View style={styles.appLogo}>
        <TextLogo width={183} height={33} />
      </View>

      <View style={styles.right}>
        <Pressable style={styles.signIn} onPress={showLoginAlert}>
          <Text style={styles.signInLabel}>Üye Girişi</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Metrics.horizontalContainerPadding,
    flexDirection: 'row',
    width: Metrics.DEVICE_WIDTH,
    height: Metrics.hp(74),
    justifyContent: 'space-between',
  },

  left: {
    width: 50,
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  appLogo: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  right: {
    height: '100%',
    justifyContent: 'center',
  },

  signIn: {
    width: 72,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },

  signInLabel: {
    fontSize: 12,
    fontFamily: Fonts.robotoBold,
    color: '#fff',
  },
});
