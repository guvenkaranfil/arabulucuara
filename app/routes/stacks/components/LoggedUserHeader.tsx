/* eslint-disable curly */
import React from 'react';
import {Pressable, StyleSheet, Text, View, Animated} from 'react-native';
import {StackHeaderProps} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';

import {Fonts, Metrics} from '@utils';
import {BackIcon, LetterIcon} from '@icons';

export default function Header({navigation, scene, previous}: StackHeaderProps) {
  const linearColors = ['#790633', '#BA1858'];

  const progress = Animated.add(scene.progress.current, scene.progress.next || 0);

  const opacity = progress.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  const blockedStackNames = ['search', 'seekMediator', 'mediationCenter', 'forExpert'];
  const shouldShowMessagesButton = () => {
    const routeName = scene.route.name;

    // @ts-ignore
    if (routeName === 'messagesContainer' || routeName === 'messageDetail') return false;
    if (blockedStackNames.includes(routeName)) return false;

    return true;
  };

  let titleWidth = Metrics.DEVICE_WIDTH - 50 - 50;

  return (
    <Animated.View style={{opacity}}>
      <LinearGradient style={styles.container} colors={linearColors}>
        <Pressable
          style={styles.left}
          disabled={!navigation.canGoBack()}
          onPress={navigation.goBack}>
          {previous && <BackIcon width={17} height={12} stroke="#fff" />}
        </Pressable>

        <View
          style={[
            styles.center,
            {
              width: titleWidth,
            },
          ]}>
          <Text style={[styles.screenTitle]}>{scene.descriptor.options.title}</Text>
        </View>

        {shouldShowMessagesButton() && (
          <Pressable
            onPress={() => {
              // TODO: needs to resolve more ellegant way
              // ISSUE LINk: https://github.com/react-navigation/react-navigation/issues/7698
              navigation.navigate('profile');
              setTimeout(() => {
                navigation.navigate('profile', {screen: 'messagesContainer'});
              }, 100);
            }}>
            <View style={styles.right}>
              <LetterIcon width={20} height={17} />
            </View>
          </Pressable>
        )}
      </LinearGradient>
    </Animated.View>
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
    height: '100%',
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
