import React from 'react';
import {View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Metrics} from '@utils';
import {BackIcon, HouseIcon} from '@icons';

type Props = {
  children: React.ReactNode;
  showBackButton?: boolean;
  showHomeButton?: boolean;
  onPressBack?: () => void;
  onPressHouse?: () => void;
};

export default function LoginLayout({
  children,
  showBackButton,
  showHomeButton,
  onPressBack,
  onPressHouse,
}: Props) {
  const linearColors = ['#790633', '#830939', '#BA1858', '#BA1858'];
  const hitSlopArea = {top: 15, right: 15, bottom: 15, left: 15};

  const _renderHeader = () => (
    <View style={styles.header}>
      {showBackButton && (
        <TouchableOpacity onPress={onPressBack} hitSlop={hitSlopArea}>
          <BackIcon height={16} />
        </TouchableOpacity>
      )}
      {showHomeButton && (
        <TouchableOpacity onPress={onPressHouse} hitSlop={hitSlopArea}>
          <HouseIcon />
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <LinearGradient style={styles.container} colors={linearColors}>
      {_renderHeader()}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.childContainer}>{children}</View>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  childContainer: {
    flex: 1,
  },

  header: {
    paddingHorizontal: 25,
    paddingBottom: 15,
    flexDirection: 'row',
    width: Metrics.DEVICE_WIDTH,
    height: 65,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
});
