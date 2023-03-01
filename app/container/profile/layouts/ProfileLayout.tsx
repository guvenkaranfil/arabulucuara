import React, {useRef, ReactElement} from 'react';
import {View, Animated, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import {CommonStyles, Labels} from '@utils';
import styles from './styles/ProfileLayoutStyle';
import MediationCenter from './components/MediationCenter';
import IndividualMediator from './components/IndividualMediator';

import {BackIcon, LetterIcon} from '@icons';
import {ProfileLinks} from '@profile/ProfileGetApi';

interface ScreenProps {
  children: ReactElement;
  user: ProfileLinks;
  onPressMessages: () => void;
  jobs?: Array<string>;
}

export default function ProfileLayout({children, user, onPressMessages, jobs}: ScreenProps) {
  console.log('profile layout jobs: ', jobs);

  const navigation = useNavigation();

  const linearColors = ['#790633', '#BA1858'];
  const scrollY = useRef(new Animated.Value(0)).current;

  const opacityNameSurname = scrollY.interpolate({
    inputRange: [50, 100],
    outputRange: [0.5, 1],
  });

  const _renderHeader = () => (
    <View style={styles.screenHeader}>
      <Pressable style={styles.left} disabled={!navigation.canGoBack()} onPress={navigation.goBack}>
        <BackIcon width={17} height={12} stroke="#fff" />
      </Pressable>

      <View style={styles.screenHeaderCenter}>
        <Animated.Text
          numberOfLines={1}
          style={[Labels.label16BoldWhite, {opacity: opacityNameSurname}]}>
          {user?.displayName ?? ''}
        </Animated.Text>
      </View>

      <Pressable onPress={onPressMessages}>
        <View style={styles.right}>
          <LetterIcon width={20} height={17} />
        </View>
      </Pressable>
    </View>
  );

  return (
    <View style={CommonStyles.container}>
      {_renderHeader()}
      <Animated.ScrollView
        bounces={false}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
          useNativeDriver: true,
        })}
        scrollEventThrottle={16}>
        <View style={styles.shadow}>
          <LinearGradient style={styles.container} colors={linearColors}>
            {user?.roleName === 'arabulucu' ? (
              <IndividualMediator {...user} />
            ) : (
              <MediationCenter {...user} jobs={jobs} />
            )}
          </LinearGradient>
        </View>
        {children}
      </Animated.ScrollView>
    </View>
  );
}
