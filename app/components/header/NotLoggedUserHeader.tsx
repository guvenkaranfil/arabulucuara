import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Fonts, Metrics} from '@utils';

interface ScreenProps {
  onPressSignIn: () => void;
}

export default function NotLoggedUserHeader({onPressSignIn}: ScreenProps) {
  const linearColors = ['#790633', '#BA1858'];

  return (
    <LinearGradient style={styles.container} colors={linearColors}>
      <View style={styles.appLogo}>
        <Image source={require('../../assets/images/logo_white.png')} resizeMode="contain" />
      </View>

      <View style={styles.right}>
        <Pressable style={styles.signIn} onPress={onPressSignIn}>
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
