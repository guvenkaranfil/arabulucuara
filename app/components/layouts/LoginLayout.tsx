import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Metrics} from '@utils';
import {BackIcon, HouseIcon} from '@icons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

type Props = {
  children: React.ReactNode;
  showBackButton?: boolean;
  showHomeButton?: boolean;
  enableKeyboardDismiss?: boolean;
  onPressBack?: () => void;
  onPressHouse?: () => void;
};

export default function LoginLayout({
  children,
  showBackButton,
  showHomeButton,
  enableKeyboardDismiss = true,
  onPressBack,
  onPressHouse,
}: Props) {
  const linearColors = ['#790633', '#830939', '#BA1858', '#BA1858'];
  const hitSlopArea = {top: 15, right: 15, bottom: 15, left: 15};

  const _renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPressBack} hitSlop={hitSlopArea} disabled={!showBackButton}>
        {showBackButton && <BackIcon height={16} stroke="#fff" />}
      </TouchableOpacity>
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
      {enableKeyboardDismiss ? (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.childContainer}>{children}</View>
        </TouchableWithoutFeedback>
      ) : (
        // <ScrollView contentContainerStyle={styles.contentContainerStyle} bounces={false}>
        <View style={styles.childContainer}>{children}</View>
        // </ScrollView>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  childContainer: {flex: 1},
  contentContainerStyle: {paddingBottom: 28},

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
